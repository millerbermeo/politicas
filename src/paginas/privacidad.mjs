import { aviso, c, correo, dato, domicilio, esc, identificacion, lista, seccion, tabla, tarjetas, whatsapp } from "../lib.mjs";

const { app, plazos, retencion, edadMinima, vigencia } = c;

export default {
  archivo: "politicas.html",
  corto: "Privacidad",
  titulo: "Política de privacidad",
  descripcion: `Qué datos trata ${app.nombreCompleto}, para qué, con quién los comparte, cuánto tiempo los conserva y cómo ejercer tus derechos según la Ley 1581 de 2012.`,
  intro: `Qué datos usamos cuando pides, vendes o entregas con ${esc(app.nombre)}, para qué los usamos y cómo controlarlos.`,
  resumen: `<div class="summary">${tarjetas([
    ["No vendemos tus datos", "Tampoco mostramos publicidad ni te rastreamos para anuncios."],
    ["Ubicación en segundo plano", "Solo para domiciliarios en turno, con aviso visible en el teléfono."],
    ["Tú decides", `Puedes consultar, corregir o <a href="./">eliminar</a> tus datos.`],
  ])}</div>`,
  secciones: [
    seccion("responsable", "Quién responde por tus datos", `
      <p>El responsable del tratamiento es ${identificacion()}, quien opera ${esc(app.nombreCompleto)} (en adelante, «${esc(app.nombre)}» o «nosotros»).</p>
      ${tabla(["Canal", "Dato"], [
        ["Correo de privacidad", correo()],
        ["WhatsApp", whatsapp()],
        ["Domicilio", domicilio()],
      ])}
      ${app.nombreEnApp !== app.nombre ? `<p>Dentro de la app, el servicio aparece con el nombre ${esc(app.nombreEnApp)}.</p>` : ""}
      <p>Esta política aplica a la app ${esc(app.nombreCompleto)} para Android (${esc(app.paqueteAndroid)}) y iOS (${esc(app.bundleIos)}), a sus paneles web y a los canales de atención por WhatsApp conectados a la plataforma.</p>
    `),
    seccion("roles", "Nuestro papel y el de las empresas", `
      <p>${esc(app.nombre)} es una plataforma usada por empresas de domicilios y comercios. Por eso el papel de cada uno cambia:</p>
      ${tabla(["Situación", "Quién decide sobre los datos"], [
        ["Cuentas globales de clientes y aliados en la app, seguridad y funcionamiento de la plataforma", `${esc(app.nombre)} actúa como <strong>responsable</strong>.`],
        ["Pedidos, clientes, domiciliarios y conversaciones que gestiona una empresa de domicilios", `La empresa actúa como <strong>responsable</strong> y ${esc(app.nombre)} como <strong>encargado</strong>, según sus instrucciones.`],
        ["Pedidos que recibe un local aliado", "El local es responsable de los datos que recibe y usa para vender y atender tu pedido."],
      ])}
      <p>Si tu solicitud corresponde a una empresa o a un local, te orientaremos o se la trasladaremos.</p>
    `),
    seccion("datos", "Datos que tratamos", `
      ${tabla(["Quién", "Datos"], [
        ["Visitante sin cuenta", "Carrito guardado solo en tu teléfono y datos técnicos de conexión. Si envías un pedido por WhatsApp, el local recibe lo que escribas."],
        ["Cliente", "Nombre, correo, teléfono, contraseña protegida con hash, foto, ubicación que guardes, favoritos, pedidos, direcciones, conversaciones y reseñas."],
        ["Aliado", "Nombre del negocio y descripción, teléfonos, dirección, coordenadas, municipio, horarios, sitio web, fotos, galería, categorías, catálogo y pedidos."],
        ["Domiciliario", "Nombre, WhatsApp, foto, placa, número de chaqueta, ubicación, recorridos, turnos, descansos, disponibilidad, calificaciones, cuota diaria, comprobantes, liquidaciones, bonos y egresos."],
        ["Administrador", "Nombre, usuario o correo, foto, permisos y acciones hechas en el panel."],
        ["Cliente por WhatsApp", "Número, nombre de perfil, identificador de WhatsApp, mensajes, dirección, ubicación y datos del pedido."],
        ["Con Google", "Nombre, correo, foto e identificador de Google. No recibimos tu contraseña de Google."],
        ["Técnicos y de seguridad", "Token de notificaciones, marca y modelo del dispositivo, sesiones, dirección IP, navegador o agente de usuario e intentos de acceso."],
      ])}
      <h3>Lo que envías en chats y comprobantes</h3>
      <p>Según la función, puedes enviar textos, fotos, notas de voz, ubicaciones, documentos, stickers y reacciones. Los comprobantes de pago pueden mostrar nombre, cuenta, valor y fecha.</p>
      ${aviso("Datos sensibles", "No te pedimos datos de salud ni otros datos sensibles. Un pedido a una farmacia o un mensaje podría revelarlos: evita incluir más de lo necesario. No estás obligado a entregar datos sensibles.")}
      <p><strong>No recopilamos</strong> contactos, calendario, SMS, historial de navegación, lista de apps instaladas ni identificador publicitario. No hemos integrado herramientas de analítica publicitaria ni de anuncios en la app.</p>
    `),
    seccion("finalidades", "Para qué los usamos", `
      ${lista([
        "Crear tu cuenta, iniciar sesión y verificar tu correo o identidad con códigos.",
        "Mostrar locales y servicios, ordenarlos por cercanía y gestionar carrito, pedidos y entregas.",
        "Asignar pedidos a domiciliarios y permitir el seguimiento de la entrega.",
        "Comunicar a clientes, aliados, empresas y domiciliarios por chat y WhatsApp.",
        "Enviar notificaciones y correos sobre pedidos, mensajes, seguridad y servicio.",
        "Gestionar reseñas, calificaciones, cuota diaria, comprobantes, liquidaciones y suscripciones.",
        "Prevenir fraude, abuso y accesos indebidos, y atender soporte.",
        "Cumplir la ley y atender autoridades.",
      ])}
      <p>No usamos tus datos para publicidad de terceros.</p>
    `),
    seccion("autorizacion", "Autorización y base legal", `
      <p>Tratamos tus datos con tu autorización previa, expresa e informada, o cuando la ley permite hacerlo sin ella, por ejemplo por orden de autoridad o urgencia. Aplican la Ley 1581 de 2012, el Decreto 1377 de 2013 y el Decreto 1074 de 2015.</p>
      <p>Al crear tu cuenta, usar la app o enviar datos por nuestros canales conforme a los avisos mostrados, autorizas este tratamiento. Puedes revocar la autorización en cualquier momento, salvo cuando exista un deber legal o contractual de conservar los datos.</p>
    `),
    seccion("ubicacion", "Ubicación", `
      ${tabla(["Usuario", "Cuándo", "Para qué"], [
        ["Cliente y aliado", "Solo cuando la app está en uso y das permiso, o cuando guardas tu punto en el mapa", "Mostrar lo que está cerca, fijar tu punto de entrega o de tu local y compartirla en el chat si lo decides."],
        ["Administrador", "Mientras usa el mapa", "Ver su posición y la operación en el mapa."],
        ["Domiciliario", "<strong>También en segundo plano</strong>, mientras está en turno", "Asignar pedidos cercanos, coordinar con la empresa y mostrar la entrega al cliente."],
      ])}
      <h3>Ubicación del domiciliario en segundo plano</h3>
      ${lista([
        "Antes de pedir el permiso, la app explica este uso y solicita tu aceptación.",
        `Se recoge aunque la app esté cerrada o la pantalla apagada, solo mientras estés en turno. En Android verás la notificación permanente «${esc(app.nombreEnApp)} activo».`,
        "Con la app abierta se actualiza al moverte unos 10 metros. En segundo plano, alrededor de cada 30 segundos.",
        "Se detiene al salir de turno o cerrar sesión. Puedes retirar el permiso en los ajustes del teléfono, pero podrías dejar de recibir pedidos.",
        `El historial se borra automáticamente a los ${retencion.historialUbicacionDias} días.`,
      ])}
      <p>La empresa ve tu posición y recorrido. No usamos esta ubicación para publicidad.</p>
      <h3>Enlace de seguimiento</h3>
      <p>El cliente puede recibir un enlace de vigencia limitada, ${esc(retencion.enlaceSeguimiento)}. Quien lo tenga puede ver el nombre y la foto del domiciliario, su posición y recorrido, y el destino. No lo compartas con otras personas.</p>
    `),
    seccion("permisos", "Permisos del teléfono", `
      ${tabla(["Permiso", "Para qué", "Si lo niegas"], [
        ["Ubicación", "Cercanía, puntos en el mapa y entregas", "Puedes fijar el punto a mano en varias funciones."],
        ["Ubicación en segundo plano", "Solo domiciliarios en turno", "El seguimiento se pausa al salir de la app y podrías perder pedidos."],
        ["Notificaciones", "Pedidos y mensajes", "No recibirás avisos."],
        ["Cámara y fotos", "Perfil, chat, local, galería, comprobantes y métodos de pago", "No podrás adjuntar imágenes."],
        ["Micrófono", "Notas de voz, solo cuando grabas", "No podrás grabar audios."],
        ["Archivos", "Adjuntar el documento que elijas en el chat", "No podrás adjuntarlo."],
      ])}
      <p>Puedes cambiar estos permisos en cualquier momento en los ajustes del teléfono.</p>
    `),
    seccion("ia", "Asistente con inteligencia artificial", `
      <p>Una empresa puede activar un asistente para tomar pedidos por <strong>WhatsApp</strong>. Funciona con Claude, de Anthropic. El asistente recibe los mensajes y la ubicación de esa conversación, solo para reunir los datos del pedido.</p>
      ${lista([
        "No se usa en los chats de la app ni en el panel interno.",
        "No crea el pedido por sí solo: te muestra un resumen y tú decides si confirmas, editas o cancelas.",
        "No toma decisiones con efectos legales sobre ti.",
        "Si prefieres no usarlo, no envíes tus datos por ese canal y contacta a la empresa o el local por otro medio.",
      ])}
    `),
    seccion("automatizadas", "Asignación automática y calificaciones", `
      <p>El sistema puede ofrecer pedidos según disponibilidad, turno, cercanía, cola, cuota diaria y reglas de la empresa. Las calificaciones pueden usarse para evaluar el servicio.</p>
      <p>Si crees que una asignación, un bloqueo o una calificación te afectó de forma injusta, puedes pedir revisión humana a la empresa o escribirnos.</p>
    `),
    seccion("publico", "Qué ven otras personas", `
      ${lista([
        "<strong>Reseñas:</strong> son públicas e incluyen tu nombre, estrellas y comentario.",
        "<strong>Locales:</strong> sus datos, fotos, horarios y catálogo son públicos en la app.",
        "<strong>Pedidos:</strong> local, empresa y domiciliario ven lo necesario para atenderlos, como nombre, teléfono y dirección.",
        "<strong>Chats:</strong> los ven los participantes y el personal autorizado de la empresa o del soporte.",
        "<strong>Pedido por WhatsApp:</strong> sale de la app y queda sujeto a las condiciones de WhatsApp y al tratamiento del local.",
      ])}
    `),
    seccion("terceros", "Proveedores y terceros", `
      <p>Exigimos a quienes tratan datos por nuestra cuenta usarlos solo para prestar el servicio y darles una protección igual o equivalente a la de esta política.</p>
      ${tabla(["Proveedor", "Uso", "Datos"], [
        ["Google (Firebase Cloud Messaging, inicio de sesión)", "Notificaciones e inicio de sesión", "Token, contenido de la notificación y datos de la cuenta de Google"],
        ["Apple (servicio de notificaciones)", "Notificaciones en iPhone", "Token y contenido de la notificación"],
        ["Meta (WhatsApp Business)", "Mensajes y formularios de WhatsApp", "Número, perfil y mensajes"],
        ["Anthropic (Claude)", "Asistente de pedidos por WhatsApp, si la empresa lo activa", "Mensajes y datos del pedido de esa conversación"],
        ["Resend", "Correos de verificación y de servicio", "Correo, nombre y contenido del mensaje"],
        ["OpenStreetMap y unpkg", "Mapas y su biblioteca", "IP y zona del mapa consultada"],
        ["Proyecto OSRM", "Cálculo de rutas", "Coordenadas de la ruta e IP"],
        ["Google Maps", "Solo si abres un enlace de mapas", "Lo que indique Google en su política"],
        ["Servidores y almacenamiento", "Base de datos, archivos e imágenes", `Datos del servicio. Proveedor: ${dato("proveedores", "infraestructura")}`],
      ])}
      <p>También podemos entregar datos a autoridades cuando la ley lo exija, o a un sucesor si el negocio cambia de titular, manteniendo estas garantías. <strong>No vendemos datos personales.</strong></p>
    `),
    seccion("internacional", "Transferencias internacionales", `
      <p>Algunos proveedores tratan datos fuera de Colombia, principalmente en Estados Unidos. Hacemos estas transmisiones y transferencias con tu autorización, con contratos o con otras garantías que exige la ley colombiana.</p>
    `),
    seccion("conservacion", "Cuánto tiempo conservamos los datos", `
      ${tabla(["Dato", "Plazo"], [
        ["Historial de ubicación del domiciliario", `${retencion.historialUbicacionDias} días; se borra automáticamente`],
        ["Enlace de seguimiento", `Vence en ${esc(retencion.enlaceSeguimiento)}`],
        ["Sesiones", "Se borran al vencer o revocarse"],
        ["Tokens de notificación", `Se desactivan tras ${retencion.tokensPushInactivosDias} días sin uso o al cerrar sesión`],
        ["Cuenta, perfil, chats y reseñas", `Mientras la cuenta esté activa y hasta ${esc(retencion.generalTrasCierre)} después, salvo que pidas antes su eliminación`],
        ["Registros de seguridad", `Hasta ${esc(retencion.seguridad)}`],
        ["Información contable, tributaria y de pedidos", `${esc(retencion.contable)}, según la obligación legal`],
        ["Copias de respaldo", `Hasta ${esc(retencion.copiasRespaldo)}`],
      ])}
      <p>Cómo pedir el borrado: <a href="./">eliminación de cuenta y datos</a>.</p>
    `),
    seccion("seguridad", "Seguridad", `
      <p>Usamos conexiones cifradas (HTTPS y WSS), contraseñas protegidas con hash, tokens guardados en el almacenamiento seguro del teléfono, separación de datos por empresa, control de permisos por rol, bloqueo ante intentos fallidos y revocación de sesiones.</p>
      <p>Ningún sistema es infalible. Si ocurre un incidente que afecte tus datos, actuaremos para contenerlo y avisaremos a la autoridad y a los afectados cuando corresponda. Reporta cualquier problema a ${correo()}.</p>
    `),
    seccion("derechos", "Tus derechos", `
      <p>Como titular de los datos puedes:</p>
      ${lista([
        "Conocer, actualizar y rectificar tus datos.",
        "Pedir prueba de tu autorización.",
        "Saber cómo se han usado tus datos.",
        "Revocar la autorización o pedir la supresión, si no hay un deber legal o contractual de conservarlos.",
        "Acceder gratis a tus datos.",
        "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), después de haber acudido a nosotros.",
      ])}
      <h3>Cómo ejercerlos</h3>
      <p>Escribe a ${correo()} con tu nombre, documento o dato que te identifique, la solicitud concreta, tu medio de respuesta y los soportes que tengas. Más detalles en <a href="contacto.html#solicitudes">contacto</a>.</p>
      ${tabla(["Trámite", "Plazo máximo"], [
        ["Consulta", `${plazos.consultaDiasHabiles} días hábiles, prorrogables ${plazos.consultaProrrogaDiasHabiles} más con aviso`],
        ["Reclamo (corrección, supresión, revocatoria o incumplimiento)", `${plazos.reclamoDiasHabiles} días hábiles, prorrogables ${plazos.reclamoProrrogaDiasHabiles} más con aviso`],
        ["Reclamo incompleto", `Te pedimos completarlo dentro de ${plazos.subsanarReclamoDiasHabiles} días hábiles. Si pasan 2 meses sin respuesta, se entiende desistido`],
      ])}
    `),
    seccion("menores", "Menores de edad", `
      <p>Las cuentas son solo para mayores de ${edadMinima} años. No buscamos recoger datos de menores. Si descubrimos una cuenta de un menor, o nos la reporta su representante, la cerraremos y eliminaremos sus datos, salvo deber legal de conservarlos.</p>
    `),
    seccion("almacenamiento", "Almacenamiento en tu dispositivo y en este sitio", `
      <p>La app guarda en tu teléfono la sesión, en almacenamiento seguro, y preferencias, tema, carrito y datos temporales. Se borran al cerrar sesión o desinstalar, según el dato.</p>
      <p>Este sitio legal no usa cookies, analítica ni servicios externos.</p>
    `),
    seccion("cambios", "Cambios en esta política", `
      <p>Publicaremos cada cambio aquí con su fecha. Si es importante, lo avisaremos en la app o por correo con al menos ${vigencia.avisoCambiosDias} días de antelación y pediremos una nueva autorización cuando cambie la finalidad.</p>
      <p>Estas políticas rigen desde el ${esc(vigencia.fecha)} y mientras exista la finalidad del tratamiento.</p>
    `),
  ],
};
