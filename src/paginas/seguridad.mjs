import { aviso, c, esc, lista, seccion, tabla, tarjetas } from "../lib.mjs";

const { app, retencion } = c;
const SI = "Sí";
const NO = "No";

export default {
  archivo: "seguridad-datos.html",
  corto: "Seguridad de datos",
  titulo: "Formulario de seguridad de datos",
  descripcion: `Declaración de datos de ${app.nombreCompleto} para la sección Seguridad de los datos de Google Play y la privacidad de la app en App Store.`,
  intro: `Qué datos recoge ${esc(app.nombre)}, si se comparten y para qué, con el formato que piden Google Play y App Store.`,
  resumen: `<div class="summary">${tarjetas([
    ["Cifrado en tránsito", "Los datos viajan por HTTPS y WSS."],
    ["Sin anuncios ni rastreo", "No hay publicidad, venta de datos ni seguimiento entre apps."],
    ["Eliminación disponible", `Se solicita en la <a href="./">página de eliminación</a>.`],
  ])}</div>`,
  secciones: [
    seccion("practicas", "Prácticas generales", `
      ${tabla(["Pregunta", "Respuesta"], [
        ["¿La app recoge o comparte datos de usuario?", SI],
        ["¿Los datos se cifran en tránsito?", SI],
        ["¿Se puede solicitar la eliminación de datos?", `${SI}: <a href="./">cuenta</a> y <a href="./#datos">datos sin cerrar la cuenta</a>`],
        ["¿Hay publicidad?", NO],
        ["¿Se venden datos?", NO],
        ["¿Se rastrea a usuarios entre apps de otras empresas?", NO],
        ["Política de privacidad", `<a href="politicas.html">${esc(c.sitio.url)}/politicas.html</a>`],
      ])}
    `),
    seccion("google", "Google Play: tipos de datos", `
      <p>«Compartido» indica que el dato llega a una organización distinta de ${esc(app.nombre)} que no actúa solo como proveedor nuestro, como una empresa de domicilios o un local. Lo declaramos así por transparencia, aunque Google exime algunas transferencias iniciadas por el usuario.</p>
      ${tabla(["Dato", "Recogido", "Compartido", "Obligatorio", "Finalidad"], [
        ["Ubicación precisa", SI, SI, "Domiciliarios: sí. Otros: opcional", "Funciones de la app, gestión de pedidos y entregas"],
        ["Ubicación aproximada", SI, SI, "Domiciliarios: sí. Otros: opcional", "Funciones de la app"],
        ["Nombre", SI, SI, "Con cuenta", "Funciones de la app, gestión de cuenta"],
        ["Correo electrónico", SI, NO, "Con cuenta", "Gestión de cuenta, comunicaciones, seguridad"],
        ["ID de usuario", SI, NO, "Con cuenta", "Gestión de cuenta, seguridad"],
        ["Dirección", SI, SI, "Para entregas", "Funciones de la app"],
        ["Teléfono", SI, SI, "Con cuenta", "Funciones de la app, comunicaciones"],
        ["Otra información personal (placa, número de chaqueta)", SI, SI, "Domiciliarios", "Funciones de la app"],
        ["Historial de compras (pedidos)", SI, SI, "Al pedir en la app", "Funciones de la app"],
        ["Otra información financiera (cuotas, liquidaciones, comprobantes)", SI, SI, "Domiciliarios y empresas", "Funciones de la app"],
        ["Mensajes dentro de la app", SI, SI, "Opcional", "Funciones de la app, soporte"],
        ["Fotos", SI, SI, "Opcional", "Funciones de la app, personalización"],
        ["Grabaciones de voz", SI, SI, "Opcional", "Funciones de la app"],
        ["Archivos y documentos", SI, SI, "Opcional", "Funciones de la app"],
        ["Otro contenido del usuario (reseñas)", SI, SI, "Opcional", "Funciones de la app"],
        ["Otras acciones (favoritos, turnos, disponibilidad)", SI, NO, "Según la función", "Funciones de la app"],
        ["ID de dispositivo u otros (token de notificaciones)", SI, NO, "Para recibir avisos", "Comunicaciones, seguridad"],
      ])}
      <h3>Datos que no se recogen</h3>
      <p>Información de pago con tarjeta, salud y actividad física, SMS, correos del usuario, contactos, calendario, música, apps instaladas, historial web, historial de búsqueda en la app, registros de fallos y diagnósticos, e identificador publicitario.</p>
    `),
    seccion("apple", "App Store: privacidad de la app", `
      <p>Todos estos datos están vinculados a la identidad del usuario. Ninguno se usa para rastrear ni para publicidad.</p>
      ${tabla(["Categoría de Apple", "Datos", "Uso"], [
        ["Información de contacto", "Nombre, correo, teléfono, dirección física", "Funcionalidad de la app"],
        ["Ubicación", "Precisa y aproximada", "Funcionalidad de la app"],
        ["Contenido del usuario", "Fotos, audio, atención al cliente y otro contenido (mensajes, reseñas, archivos)", "Funcionalidad de la app"],
        ["Identificadores", "ID de usuario e ID de dispositivo (token de notificaciones)", "Funcionalidad de la app"],
        ["Compras", "Historial de compras (pedidos)", "Funcionalidad de la app"],
        ["Información financiera", "Otra información financiera (cuotas, liquidaciones, comprobantes)", "Funcionalidad de la app"],
      ])}
      <p>No se declaran: salud y actividad física, información sensible, contactos, historial de navegación o búsqueda, diagnósticos, datos de uso con fines de análisis, ni datos de pago con tarjeta.</p>
    `),
    seccion("permisos", "Permisos que solicita la app", `
      ${tabla(["Permiso", "Sistema", "Motivo"], [
        ["Ubicación mientras se usa", "Android y iOS", "Cercanía, puntos en el mapa y entregas"],
        ["Ubicación en segundo plano", "Android y iOS", "Solo domiciliarios en turno: asignación y seguimiento"],
        ["Servicio en primer plano de ubicación", "Android", "Mantener activo el seguimiento con notificación visible"],
        ["Notificaciones, vibración, arranque y activación", "Android y iOS, según el caso", "Avisos de pedidos y mensajes"],
        ["Micrófono", "Android y iOS", "Notas de voz"],
        ["Cámara y fotos", "Android y iOS", "Perfil, chat, local, galería y comprobantes"],
      ])}
    `),
    seccion("segundo-plano", "Divulgación de ubicación en segundo plano", `
      ${aviso("Texto de referencia para la ficha y la revisión", `${esc(app.nombre)} recopila datos de ubicación para asignar pedidos cercanos y mostrar el avance de la entrega al cliente y a la empresa, incluso cuando la app está cerrada o no se está usando, solo mientras el domiciliario está en turno.`, "importante")}
      ${lista([
        "Solo aplica a domiciliarios. Clientes y aliados no usan ubicación en segundo plano.",
        "La app muestra una explicación antes de pedir el permiso.",
        "Android mantiene una notificación visible mientras dura el seguimiento.",
        `El historial se borra automáticamente a los ${retencion.historialUbicacionDias} días.`,
        "No se usa para publicidad.",
      ])}
    `),
    seccion("proteccion", "Cómo protegemos los datos", `
      ${lista([
        "Conexiones cifradas y contraseñas protegidas con hash.",
        "Sesiones revocables y tokens en almacenamiento seguro del teléfono.",
        "Permisos por rol y separación de datos por empresa.",
        "Límites y bloqueo ante intentos de acceso fallidos.",
      ])}
      <p>El detalle completo está en la <a href="politicas.html#seguridad">política de privacidad</a>.</p>
    `),
  ],
};
