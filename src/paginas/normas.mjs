import { c, correo, esc, lista, pasos, seccion, tarjetas, urlCorreo } from "../lib.mjs";

const { app, plazos, contacto } = c;

const cuerpo = `Quiero reportar contenido o una cuenta en ${app.nombre}.

Qué ocurrió:
Dónde está (chat, reseña, local, foto):
Nombre de la cuenta o del local:
Fecha y hora:
Capturas o enlaces:`;

export default {
  archivo: "normas-comunidad.html",
  corto: "Normas",
  titulo: "Normas de la comunidad",
  descripcion: `Qué contenido y conductas no se permiten en ${app.nombreCompleto} y cómo reportarlos.`,
  intro: `Reglas para que pedir, vender y entregar sea seguro y respetuoso para todos.`,
  acciones: `<div class="actions"><a class="btn btn-primary" href="${urlCorreo(contacto.correoSoporte, `Reporte de contenido ${app.nombre}`, cuerpo)}">Reportar contenido o usuario</a></div>`,
  resumen: `<div class="summary">${tarjetas([
    ["Tolerancia cero", "Contenido sexual con menores, amenazas y delitos."],
    ["Revisión", `Buscamos revisar cada reporte en menos de ${plazos.reporteContenidoHoras} horas.`],
    ["Consecuencias", "Retiro de contenido, suspensión o cierre de cuenta."],
  ])}</div>`,
  secciones: [
    seccion("aplica", "Dónde aplican", `
      <p>En chats, reseñas, calificaciones, fotos, stickers, perfiles, locales, catálogos y cualquier otro contenido enviado por ${esc(app.nombre)}.</p>
    `),
    seccion("prohibido", "Qué no está permitido", `
      ${lista([
        "Contenido sexual que involucre a menores o cualquier forma de explotación infantil.",
        "Contenido sexual explícito o imágenes íntimas sin consentimiento.",
        "Amenazas, violencia, acoso, extorsión o incitación al odio.",
        "Discriminación por raza, sexo, orientación, religión, origen, discapacidad u otra condición.",
        "Datos personales de otros sin permiso.",
        "Estafas, comprobantes falsos, suplantación, reseñas falsas y spam.",
        `Venta de productos prohibidos, listados en los <a href="terminos.html#regulados">términos</a>.`,
        "Venta de alcohol a menores.",
        "Contenido que infrinja marcas o derechos de autor.",
      ])}
    `),
    seccion("reportar", "Cómo reportar", `
      ${pasos([
        `Escribe a ${correo(contacto.correoSoporte)} o usa el botón de esta página.`,
        "Indica qué pasó, dónde y qué cuenta o local está involucrado. Añade capturas si puedes.",
        `Revisamos el reporte, con el objetivo de hacerlo en menos de ${plazos.reporteContenidoHoras} horas, y te informamos si tomamos medidas.`,
      ])}
      <p>Si hay un peligro inmediato, llama al <strong>123</strong>. Los delitos, en especial contra menores, deben denunciarse ante las autoridades.</p>
    `),
    seccion("bloquear", "Evitar el contacto con un usuario", `
      <p>Si quieres dejar de tener contacto con un usuario, repórtalo por este canal. Podemos restringir la interacción, retirar el contenido o suspender la cuenta.</p>
    `),
    seccion("medidas", "Qué medidas podemos tomar", `
      ${lista([
        "Retirar o limitar el contenido.",
        "Advertir a la cuenta.",
        "Suspender o cerrar la cuenta o el local.",
        "Conservar evidencia y avisar a las autoridades cuando corresponda.",
      ])}
      <p>Si crees que nos equivocamos, puedes pedir una revisión en ${correo(contacto.correoSoporte)}.</p>
    `),
  ],
};
