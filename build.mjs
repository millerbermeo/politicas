// Genera las páginas HTML estáticas a partir de config.mjs y src/paginas.
// Sin dependencias: basta con ejecutar `node build.mjs`.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { c, esc, pendientes } from "./src/lib.mjs";
import eliminacion from "./src/paginas/eliminacion.mjs";
import privacidad from "./src/paginas/privacidad.mjs";
import terminos from "./src/paginas/terminos.mjs";
import seguridad from "./src/paginas/seguridad.mjs";
import clasificacion from "./src/paginas/clasificacion.mjs";
import normas from "./src/paginas/normas.mjs";
import contacto from "./src/paginas/contacto.mjs";

const raiz = dirname(fileURLToPath(import.meta.url));
const paginas = [privacidad, terminos, eliminacion, seguridad, clasificacion, normas, contacto];
const hrefDe = (p) => (p.archivo === "index.html" ? "./" : p.archivo);

const nav = (actual, clase) =>
  paginas
    .map(
      (p) =>
        `<a class="${clase}" href="${hrefDe(p)}"${p === actual ? ' aria-current="page"' : ""}>${p.corto}</a>`,
    )
    .join("");

const marca = `<a class="brand" href="politicas.html" aria-label="${esc(c.app.nombre)}, centro legal"><img src="assets/logo.png" alt="" width="28" height="28"><span>${esc(c.app.nombre)} <small>Legal</small></span></a>`;

function render(p) {
  const url = `${c.sitio.url}/${p.archivo === "index.html" ? "" : p.archivo}`;
  const titulo = `${p.titulo} | ${c.app.nombre}`;
  const indice = p.secciones
    .map((s) => `<li><a href="#${s.id}">${s.titulo}</a></li>`)
    .join("");
  const cuerpo = p.secciones
    .map((s) => `<section id="${s.id}"><h2>${s.titulo}</h2>${s.cuerpo}</section>`)
    .join("\n");

  return `<!doctype html>
<html lang="${c.sitio.idioma}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; script-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(p.descripcion)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="${esc(c.app.nombreCompleto)}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(p.descripcion)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${c.sitio.url}/assets/logo.png">
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f7">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0e0b0c">
<link rel="icon" href="assets/logo.png" type="image/png">
<link rel="apple-touch-icon" href="assets/logo.png">
<link rel="stylesheet" href="assets/styles.css">
<script src="assets/site.js" defer></script>
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="topbar">
  <div class="topbar-in">
    ${marca}
    <nav class="nav-wide" aria-label="Documentos legales">${nav(p, "nav-link")}</nav>
    <details class="nav-menu">
      <summary>Documentos</summary>
      <nav aria-label="Documentos legales, menú">${nav(p, "menu-link")}</nav>
    </details>
  </div>
</header>
<main id="contenido">
  <header class="hero">
    <p class="eyebrow">${esc(c.app.nombreCompleto)}</p>
    <h1>${p.titulo}</h1>
    <p class="lead">${p.intro}</p>
    <p class="meta">Versión ${esc(c.vigencia.version)} · Vigente desde el <time datetime="${c.vigencia.fechaIso}">${esc(c.vigencia.fecha)}</time></p>
    ${p.acciones ?? ""}
  </header>
  ${p.resumen ?? ""}
  <div class="doc">
    <aside class="toc-wrap">
      <details class="toc" open>
        <summary>En esta página</summary>
        <ol>${indice}</ol>
      </details>
    </aside>
    <article class="prose">
${cuerpo}
    </article>
  </div>
</main>
<footer class="footer">
  <div class="footer-in">
    <div>
      <p class="footer-name">${esc(c.app.nombreCompleto)}</p>
      <p>Paquete ${esc(c.app.paqueteAndroid)} · Desarrollador ${esc(c.app.desarrolladorPlay)}</p>
      <p><a href="mailto:${esc(c.contacto.correoSoporte)}">${esc(c.contacto.correoSoporte)}</a></p>
    </div>
    <nav aria-label="Documentos legales, pie de página">${nav(p, "footer-link")}</nav>
  </div>
</footer>
</body>
</html>
`;
}

for (const p of paginas) writeFileSync(join(raiz, p.archivo), render(p));

// Archivos para buscadores.
writeFileSync(
  join(raiz, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paginas
    .map(
      (p) =>
        `  <url><loc>${c.sitio.url}/${p.archivo === "index.html" ? "" : p.archivo}</loc><lastmod>${c.vigencia.fechaIso}</lastmod></url>`,
    )
    .join("\n")}\n</urlset>\n`,
);
writeFileSync(join(raiz, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${c.sitio.url}/sitemap.xml\n`);

// Comprobación: todo enlace interno debe apuntar a una página y un ancla reales.
const anclas = new Map(paginas.map((p) => [p.archivo, new Set(p.secciones.map((s) => s.id))]));
const rotos = [];
for (const p of paginas) {
  const html = render(p);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|assets\/)/.test(href)) continue;
    const [ruta, ancla] = href.split("#");
    const destino = ruta === "" ? p.archivo : ruta === "./" ? "index.html" : ruta;
    if (!anclas.has(destino) || (ancla && ancla !== "contenido" && !anclas.get(destino).has(ancla))) {
      rotos.push(`${p.archivo} -> ${href}`);
    }
  }
}

console.log(`Generadas ${paginas.length} páginas.`);
if (pendientes.size) {
  console.log(`\nDatos pendientes en config.mjs (${pendientes.size}):`);
  for (const x of pendientes) console.log(`  - ${x}`);
}
if (rotos.length) {
  console.error(`\nEnlaces internos rotos:\n  ${rotos.join("\n  ")}`);
  process.exit(1);
}
