// Ayudas para escribir las páginas: valores pendientes, tablas, secciones y enlaces.
import { config } from "../config.mjs";

export const pendientes = new Set();

const ETIQUETAS = {
  nombreLegal: "razón social o nombre legal",
  tipoDocumento: "tipo de documento",
  numeroDocumento: "número de documento",
  direccion: "dirección de notificaciones",
  ciudad: "ciudad",
  infraestructura: "proveedor de servidores y país",
};

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Devuelve el valor o un aviso visible si aún no se ha completado en config.mjs. */
export function dato(grupo, clave) {
  const valor = config[grupo]?.[clave];
  if (valor) return esc(valor);
  const etiqueta = ETIQUETAS[clave] ?? clave;
  pendientes.add(`${grupo}.${clave} (${etiqueta})`);
  return `<mark class="pending">[Pendiente: ${etiqueta}]</mark>`;
}

export const c = config;
export const r = (clave) => dato("responsable", clave);

/** Dirección (si existe) y ciudad; la dirección es opcional en config.mjs. */
export const domicilio = () =>
  [c.responsable.direccion && esc(c.responsable.direccion), r("ciudad")].filter(Boolean).join(", ");

export const identificacion = () => {
  const documento = c.responsable.mostrarDocumento
    ? `, identificada con ${r("tipoDocumento")} ${r("numeroDocumento")}`
    : "";
  return `${r("nombreLegal")}${documento}, con domicilio en ${domicilio()}, ${esc(c.responsable.pais)}`;
};

const digitos = (n) => String(n).replace(/\D/g, "");

export const telefonoVisible = (n) => {
  const d = digitos(n);
  return d.startsWith("57") && d.length === 12
    ? `+57 ${d.slice(2, 5)} ${d.slice(5, 8)} ${d.slice(8)}`
    : `+${d}`;
};

export const urlWhatsapp = (texto) =>
  `https://wa.me/${digitos(c.contacto.whatsappSoporte)}?text=${encodeURIComponent(texto)}`;

export const urlCorreo = (correo, asunto, cuerpo) =>
  esc(`mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`);

export const correo = (dir = c.contacto.correoPrivacidad) => `<a href="mailto:${esc(dir)}">${esc(dir)}</a>`;

export const whatsapp = (texto = `Hola, necesito ayuda con ${c.app.nombre}`) =>
  `<a href="${esc(urlWhatsapp(texto))}" rel="noopener">${telefonoVisible(c.contacto.whatsappSoporte)}</a>`;

export const lista = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
export const pasos = (items) => `<ol class="steps">${items.map((i) => `<li><div>${i}</div></li>`).join("")}</ol>`;

export const aviso = (titulo, texto, tipo = "info") =>
  `<aside class="callout callout-${tipo}"><strong>${titulo}</strong><div>${texto}</div></aside>`;

/** En móvil cada fila se apila como tarjeta usando data-label. */
export function tabla(titulos, filas, leyenda) {
  const head = titulos.map((t) => `<th scope="col">${t}</th>`).join("");
  const body = filas
    .map(
      (f) =>
        `<tr>${f
          .map((v, i) =>
            i === 0
              ? `<th scope="row" data-label="${esc(titulos[i])}">${v}</th>`
              : `<td data-label="${esc(titulos[i])}">${v}</td>`,
          )
          .join("")}</tr>`,
    )
    .join("");
  const cap = leyenda ? `<caption>${leyenda}</caption>` : "";
  return `<div class="table-wrap"><table>${cap}<thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

export const tarjetas = (items) =>
  `<div class="cards">${items
    .map(([t, d]) => `<div class="card"><h3>${t}</h3><p>${d}</p></div>`)
    .join("")}</div>`;

/** Sección con ancla; la lista de secciones alimenta el índice lateral. */
export const seccion = (id, titulo, cuerpo) => ({ id, titulo, cuerpo });
