import { aviso, c, correo, esc, lista, pasos, seccion, tabla, tarjetas, telefonoVisible, urlCorreo, urlWhatsapp, whatsapp } from "../lib.mjs";

const { app, plazos, retencion, contacto } = c;

const asunto = `Solicitud de eliminación de cuenta ${app.nombre}`;
const cuerpo = `Hola, solicito eliminar mi cuenta de ${app.nombre} y los datos asociados.

Nombre:
Correo de la cuenta:
Teléfono de la cuenta:
Tipo de cuenta (cliente, aliado, domiciliario o administrador):
Empresa, si eres domiciliario o administrador:

Entiendo que la eliminación es definitiva.`;
const asuntoDatos = `Solicitud de eliminación de datos ${app.nombre}`;
const cuerpoDatos = `Hola, quiero conservar mi cuenta de ${app.nombre} y eliminar estos datos:

Datos que quiero eliminar:
Correo de la cuenta:
Teléfono de la cuenta:`;

export default {
  archivo: "index.html",
  corto: "Eliminar cuenta",
  titulo: "Eliminación de cuenta y datos",
  descripcion: `Cómo solicitar la eliminación de tu cuenta de ${app.nombreCompleto} (${app.paqueteAndroid}, ${app.desarrolladorPlay}) y de tus datos, qué se borra, qué se conserva y en qué plazo.`,
  intro: `Puedes pedir que eliminemos tu cuenta de ${esc(app.nombreCompleto)} y sus datos desde esta página, sin abrir ni reinstalar la app.`,
  acciones: `<div class="actions">
    <a class="btn btn-primary" href="${urlCorreo(contacto.correoPrivacidad, asunto, cuerpo)}">Solicitar por correo</a>
    <a class="btn btn-secondary" href="${esc(urlWhatsapp(`Hola, quiero eliminar mi cuenta de ${app.nombre}`))}" rel="noopener">Solicitar por WhatsApp</a>
  </div>`,
  resumen: `<div class="summary">${tarjetas([
    ["Sin costo", "Solicitar la eliminación es gratis y no necesitas justificarla."],
    ["Respuesta", `Te respondemos en máximo ${plazos.reclamoDiasHabiles} días hábiles.`],
    ["Eliminación", `Se completa en máximo ${plazos.eliminacionDiasCalendario} días calendario desde que verificamos tu identidad.`],
  ])}</div>`,
  secciones: [
    seccion("solicitar", "Cómo solicitarla", `
      ${pasos([
        `<strong>Escríbenos</strong> a ${correo()} o por WhatsApp al ${whatsapp(`Hola, quiero eliminar mi cuenta de ${app.nombre}`)}. Los botones de arriba dejan el mensaje listo.`,
        `<strong>Indica tus datos:</strong> nombre, correo y teléfono de la cuenta, y tu tipo de cuenta.`,
        `<strong>Confirma que eres tú.</strong> Escribe desde el correo o el teléfono registrado. Si no es posible, te enviaremos un código de verificación.`,
        `<strong>Recibe la confirmación</strong> cuando la eliminación termine.`,
      ])}
      ${aviso("Nunca te pediremos tu contraseña", "Tampoco códigos bancarios ni pagos para tramitar la solicitud.")}
      <p>Desinstalar la app <strong>no</strong> elimina tu cuenta. Debes enviar la solicitud.</p>
    `),
    seccion("borra", "Qué eliminamos", `
      <p>Eliminamos o anonimizamos de forma irreversible los datos de tu cuenta que no debamos conservar:</p>
      ${lista([
        "Perfil: nombre, correo, teléfono, foto, credenciales y vínculo con Google.",
        "Ubicación guardada e historial de ubicación.",
        "Favoritos, preferencias y tokens de notificaciones.",
        "Conversaciones del chat: textos, fotos, audios, ubicaciones y archivos.",
        "Reseñas y calificaciones que escribiste, o se desvincula tu nombre de ellas.",
        "Si eres aliado: datos, fotos y galería de tu local en la app.",
        "Si eres domiciliario: datos de perfil, placa, número de chaqueta y comprobantes que no deban conservarse.",
      ])}
      <p>También pedimos a los proveedores que tratan estos datos por nuestra cuenta que los eliminen. Las copias de respaldo se sobrescriben en un plazo de hasta ${esc(retencion.copiasRespaldo)}.</p>
    `),
    seccion("conserva", "Qué podemos conservar", `
      <p>Solo conservamos lo necesario, bloqueado para otros usos, por estas razones:</p>
      ${tabla(["Dato", "Motivo", "Plazo"], [
        ["Pedidos, pagos reportados, liquidaciones y soportes contables", "Obligaciones legales, contables y tributarias, y atención de garantías o reclamos", esc(retencion.contable)],
        ["Registros de acceso y seguridad (IP, dispositivo, intentos de ingreso)", "Prevención de fraude y seguridad", esc(retencion.seguridad)],
        ["Datos de una disputa o requerimiento de autoridad", "Defensa de derechos y cumplimiento legal", "Hasta que termine el asunto"],
      ])}
      <p>La ley colombiana no permite suprimir datos cuando existe un deber legal o contractual de conservarlos. Si es tu caso, te diremos qué datos se conservan y por qué.</p>
    `),
    seccion("casos", "Según tu tipo de cuenta", `
      ${tabla(["Cuenta", "Qué ocurre"], [
        ["Cliente", "Eliminamos la cuenta global y sus datos. Los pedidos que hiciste siguen en los registros de cada empresa o local mientras la ley lo exija."],
        ["Aliado", "Tu local deja de mostrarse. Antes debes resolver los pedidos en curso."],
        ["Domiciliario", "Coordinamos con la empresa para la que operas. Deben cerrarse pedidos, cuotas y liquidaciones pendientes."],
        ["Administrador de empresa", "Tu usuario se elimina. Los datos de la empresa dependen del contrato con ella."],
        ["Pedidos por WhatsApp", `Esos mensajes están también en WhatsApp y en el teléfono del local. Debes pedirle al local que los borre. Nosotros no controlamos esos registros.`],
      ])}
    `),
    seccion("datos", "Eliminar datos sin cerrar la cuenta", `
      <p>Puedes borrar algunos datos sin eliminar tu cuenta:</p>
      ${lista([
        "En la app: eliminar tu reseña, quitar favoritos, cambiar tu foto y actualizar tu perfil o ubicación.",
        "En tu teléfono: retirar los permisos de ubicación, cámara, fotos, micrófono o notificaciones.",
        `Para cualquier otro dato: <a href="${urlCorreo(contacto.correoPrivacidad, asuntoDatos, cuerpoDatos)}">envíanos una solicitud</a> indicando qué quieres eliminar.`,
      ])}
    `),
    seccion("despues", "Después de la eliminación", `
      ${lista([
        "La eliminación es definitiva. No podremos recuperar tu cuenta ni tu historial.",
        "Tus sesiones se cierran en todos los dispositivos.",
        "Puedes retirar la solicitud mientras no hayamos ejecutado la eliminación.",
      ])}
      <p>Si no recibes respuesta o no estás de acuerdo, consulta tus derechos en la <a href="politicas.html#derechos">política de privacidad</a>.</p>
      <p>WhatsApp de soporte: ${telefonoVisible(contacto.whatsappSoporte)}. Horario: ${esc(contacto.horario)}.</p>
    `),
  ],
};
