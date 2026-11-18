import { c, correo, esc, identificacion, lista, seccion, tabla, tarjetas, urlCorreo, urlWhatsapp, whatsapp } from "../lib.mjs";

const { app, contacto, plazos } = c;

const plantilla = `Nombre completo:
Documento o dato de identificación:
Correo o teléfono de la cuenta:
Tipo de solicitud (consulta, corrección, supresión, revocatoria o queja):
Descripción de los hechos:
Medio para recibir respuesta:
Soportes adjuntos:`;

export default {
  archivo: "contacto.html",
  corto: "Contacto",
  titulo: "Contacto",
  descripcion: `Canales de soporte, privacidad y asuntos legales de ${app.nombreCompleto}.`,
  intro: `Escríbenos por soporte, para ejercer tus derechos sobre tus datos o para reportar un problema.`,
  acciones: `<div class="actions">
    <a class="btn btn-primary" href="${esc(urlWhatsapp(`Hola, necesito ayuda con ${app.nombre}`))}" rel="noopener">Escribir por WhatsApp</a>
    <a class="btn btn-secondary" href="mailto:${esc(contacto.correoSoporte)}">Enviar correo</a>
  </div>`,
  resumen: `<div class="summary">${tarjetas([
    ["Soporte", `Lo más rápido es WhatsApp, ${esc(contacto.horario)}.`],
    ["Consultas de datos", `Hasta ${plazos.consultaDiasHabiles} días hábiles.`],
    ["Reclamos de datos", `Hasta ${plazos.reclamoDiasHabiles} días hábiles.`],
  ])}</div>`,
  secciones: [
    seccion("canales", "Canales", `
      ${tabla(["Motivo", "Canal"], [
        ["Ayuda con la app o un pedido", `${whatsapp()} · ${correo(contacto.correoSoporte)}`],
        ["Privacidad y datos personales", correo(contacto.correoPrivacidad)],
        ["Asuntos legales y notificaciones", correo(contacto.correoLegal)],
        ["Eliminar tu cuenta", `<a href="./">Página de eliminación</a>`],
      ])}
      <p>Si tu caso es sobre un producto o una entrega, ten a mano el nombre del local o de la empresa.</p>
    `),
    seccion("responsable", "Responsable", `
      <p>${identificacion()}.</p>
    `),
    seccion("solicitudes", "Solicitudes sobre tus datos", `
      <p><a href="${urlCorreo(contacto.correoPrivacidad, `Solicitud de datos personales ${app.nombre}`, plantilla)}">Abre la plantilla de solicitud</a> o envía esta información:</p>
      ${lista([
        "Nombre y dato que te identifique.",
        "Qué pides y los hechos que la motivan.",
        "Medio donde quieres recibir la respuesta.",
        "Soportes. Si actúas por otra persona, acredita que la representas.",
      ])}
      <p>Plazos y derechos: <a href="politicas.html#derechos">política de privacidad</a>.</p>
    `),
    seccion("reportar", "Reportar contenido o un usuario", `
      <p>Sigue los pasos de las <a href="normas-comunidad.html#reportar">normas de la comunidad</a>. Si hay un peligro inmediato, llama al <strong>123</strong>.</p>
    `),
    seccion("autoridad", "Autoridad de control", `
      <p>Si ya acudiste a nosotros y no se resolvió tu caso, puedes presentar una queja ante la <a href="https://www.sic.gov.co" rel="noopener">Superintendencia de Industria y Comercio</a>, autoridad de protección de datos y del consumidor en Colombia.</p>
    `),
  ],
};
