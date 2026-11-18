import { aviso, c, correo, esc, identificacion, lista, seccion, tarjetas, whatsapp } from "../lib.mjs";

const { app, contacto, edadMinima, vigencia, responsable } = c;
const n = esc(app.nombre);

export default {
  archivo: "terminos.html",
  corto: "Términos",
  titulo: "Términos y condiciones",
  descripcion: `Condiciones de uso de ${app.nombreCompleto} para clientes, aliados, domiciliarios y empresas en Colombia.`,
  intro: `Las reglas para usar ${n}. Las escribimos en lenguaje claro y no reemplazan los derechos que la ley te reconoce.`,
  resumen: `<div class="summary">${tarjetas([
    ["Conectamos, no vendemos", `Los productos y entregas son de cada local o empresa, salvo que ${n} indique otra cosa.`],
    [`Mayores de ${edadMinima}`, "Las cuentas son solo para personas adultas."],
    ["Tus derechos siguen vigentes", "Nada aquí limita los derechos irrenunciables del consumidor."],
  ])}</div>`,
  secciones: [
    seccion("identificacion", "Quiénes somos", `
      <p>${n} es operado por ${identificacion()}. Contacto: ${correo(contacto.correoLegal)} y ${whatsapp()}.</p>
    `),
    seccion("aceptacion", "Aceptación", `
      <p>Al crear una cuenta o usar la app, sus paneles o sus canales aceptas estos términos y las <a href="normas-comunidad.html">normas de la comunidad</a>. El tratamiento de datos se explica en la <a href="politicas.html">política de privacidad</a>. Si no estás de acuerdo, no uses el servicio.</p>
    `),
    seccion("servicio", "Qué es el servicio", `
      <p>${n} es una plataforma tecnológica que permite:</p>
      ${lista([
        "Explorar locales, servicios y productos, y armar un carrito.",
        "Contactar a un local por WhatsApp o, cuando esté habilitado, pedir en la app.",
        "Chatear con empresas y seguir entregas.",
        "Administrar locales, pedidos, domiciliarios, turnos, pagos reportados y atención por WhatsApp.",
      ])}
      <p>Salvo que se indique expresamente, ${n} no fabrica ni vende los productos, no fija sus precios y no presta directamente el transporte. Esas actividades corresponden al local o a la empresa que aparece en cada caso.</p>
    `),
    seccion("cuenta", "Tu cuenta", `
      ${lista([
        `Debes tener al menos ${edadMinima} años y capacidad legal.`,
        "Tus datos deben ser reales y estar actualizados.",
        "Cuida tu contraseña y tus códigos. Avísanos si alguien más entra a tu cuenta.",
        "La cuenta es personal, salvo los usuarios autorizados por una empresa.",
      ])}
      <p>Puedes solicitar su cierre en cualquier momento en <a href="./">eliminación de cuenta</a>.</p>
    `),
    seccion("roles", "Responsabilidades de cada usuario", `
      <h3>Clientes</h3>
      <p>Dan datos de entrega correctos, atienden el pedido, pagan lo acordado y tratan con respeto a locales y domiciliarios.</p>
      <h3>Aliados y locales</h3>
      <p>Responden por sus productos, precios, disponibilidad, calidad, garantías, permisos, facturación, información al consumidor y por los datos que reciben. Deben entregar y mantener actualizados su nombre o razón social, documento de identificación, dirección de notificaciones y teléfonos. Esa información podrá darse a quien compró para presentar una queja y a las autoridades, como exige el artículo 53 de la Ley 1480 de 2011.</p>
      <h3>Empresas de domicilios</h3>
      <p>Responden por su operación, sus domiciliarios, las tarifas y reglas que configuran, el trato a clientes y el uso de los datos que administran.</p>
      <h3>Domiciliarios</h3>
      <p>Deben cumplir las normas de tránsito, tener licencia, seguros y documentos vigentes, cuidar los pedidos y no usar el teléfono de forma peligrosa mientras conducen.</p>
    `),
    seccion("pedidos", "Pedidos y entregas", `
      ${lista([
        "El pedido por WhatsApp se envía desde tu cuenta de WhatsApp al número del local. El acuerdo final se hace con ese local.",
        "Los precios, recargos, tiempos y disponibilidad mostrados pueden cambiar hasta que el local o la empresa los confirme.",
        "Los tiempos de entrega son estimados, salvo que quien vende o entrega se comprometa a un plazo.",
        "Las reclamaciones por producto, garantía, retracto o devolución se dirigen a quien vendió. Podemos ayudarte a identificarlo y contactarlo.",
      ])}
    `),
    seccion("regulados", "Productos con restricciones", `
      ${aviso("Bebidas alcohólicas", `Solo para mayores de ${edadMinima} años. El local y quien entrega deben verificar la edad con un documento y negarse si no se acredita. El exceso de alcohol es perjudicial para la salud.`, "importante")}
      <p><strong>Medicamentos:</strong> solo pueden ofrecerlos establecimientos autorizados, cumpliendo las reglas sobre fórmula médica. ${n} no da consejo médico.</p>
      <p><strong>Está prohibido ofrecer o pedir:</strong> tabaco, cigarrillos electrónicos y vapeadores, drogas ilícitas, sustancias controladas sin autorización, armas, explosivos, productos robados, falsificados o de contrabando, y cualquier bien o servicio ilegal.</p>
    `),
    seccion("domiciliarios", "Condiciones para domiciliarios", `
      ${lista([
        "<strong>Ubicación:</strong> mientras estés en turno se comparte tu ubicación, incluso en segundo plano, como explica la política de privacidad.",
        "<strong>Asignación:</strong> las ofertas pueden hacerse de forma automática según disponibilidad, turno, cercanía, cola y reglas de la empresa.",
        "<strong>Cuota diaria:</strong> si tu empresa la configura, su valor y condiciones los define ella. Puede exigirse un comprobante, y sin aprobación podrías no activarte ese día.",
        "<strong>Calificaciones:</strong> los clientes pueden evaluar el servicio.",
        "<strong>Revisión:</strong> puedes pedir revisión humana de bloqueos, cuotas, liquidaciones o calificaciones que consideres incorrectos.",
      ])}
      <p>La relación entre el domiciliario y la empresa se rige por lo que hayan acordado, por la realidad de esa relación y por las normas colombianas aplicables, incluidas las de trabajo en plataformas digitales de reparto. Estos términos no renuncian a ningún derecho laboral o de seguridad social.</p>
    `),
    seccion("pagos", "Pagos", `
      <p>La app no procesa pagos de pedidos ni guarda datos de tarjetas. El pago se acuerda con el local o la empresa por los medios que ofrezcan, como efectivo o transferencia. Verifica los datos antes de pagar.</p>
      <p>Los comprobantes solo sirven para reportar el pago y deben ser auténticos. Las empresas que contratan ${n} pagan según su plan y condiciones comerciales. La falta de pago puede suspender su acceso.</p>
    `),
    seccion("contenido", "Tu contenido", `
      <p>Sigues siendo dueño de los textos, fotos, audios, reseñas y demás contenido que publiques. Nos das una licencia gratuita, no exclusiva y limitada para alojarlo, mostrarlo y procesarlo solo para operar el servicio, mientras esté publicado y durante los plazos de conservación aplicables.</p>
      <p>Debes tener derecho a publicarlo. Podemos retirar contenido que incumpla estos términos, las <a href="normas-comunidad.html">normas de la comunidad</a> o la ley.</p>
    `),
    seccion("resenas", "Reseñas", `
      <p>Las reseñas deben basarse en una experiencia real, ser respetuosas y no incluir datos personales de terceros. Son públicas y puedes editar o eliminar la tuya. No se permite pagar por reseñas ni publicar reseñas falsas.</p>
    `),
    seccion("uso", "Usos no permitidos", `
      ${lista([
        "Infringir la ley o los derechos de otras personas.",
        "Suplantar identidades, crear pedidos falsos o cometer fraude.",
        "Acosar, amenazar o enviar contenido ilegal o spam.",
        "Atacar, extraer datos masivamente o saltarse las medidas de seguridad.",
        "Hacer ingeniería inversa, salvo lo que permita la ley.",
      ])}
    `),
    seccion("ia", "Asistente con inteligencia artificial", `
      <p>Algunas empresas atienden por WhatsApp con un asistente de IA que reúne datos del pedido. Puede equivocarse: revisa el resumen antes de confirmar. No promete precios ni tiempos, y el pedido solo se crea cuando lo confirmas.</p>
    `),
    seccion("propiedad", "Propiedad intelectual", `
      <p>La app, su software, diseño y marca pertenecen a ${n} o a sus licenciantes. Te damos una licencia personal, limitada, revocable y no transferible para usar la app. Las marcas y fotos de los locales pertenecen a sus titulares.</p>
    `),
    seccion("terceros", "Servicios de terceros", `
      <p>El servicio usa o enlaza servicios como WhatsApp, Google, mapas y tiendas de aplicaciones, que tienen sus propias condiciones. No controlamos esos servicios.</p>
    `),
    seccion("disponibilidad", "Disponibilidad", `
      <p>Trabajamos para mantener el servicio disponible, pero puede haber interrupciones por mantenimiento, conectividad o causas externas. La ubicación y las notificaciones dependen del teléfono, sus permisos y la red. Podemos actualizar funciones y exigir la versión más reciente de la app.</p>
    `),
    seccion("responsabilidad", "Responsabilidad", `
      <p>Respondemos por los servicios que prestamos directamente, conforme a la ley. No respondemos por hechos atribuibles exclusivamente a locales, empresas, domiciliarios, usuarios u otros terceros, ni por fuerza mayor.</p>
      ${aviso("Tus derechos no se limitan", "Nada de estos términos excluye o reduce la responsabilidad que la ley no permite limitar, incluidos los derechos del Estatuto del Consumidor (Ley 1480 de 2011), ni la responsabilidad por dolo o culpa grave.")}
      <p>Quienes usan ${n} para su actividad comercial responden por los reclamos causados por su incumplimiento de estos términos o de la ley.</p>
    `),
    seccion("suspension", "Suspensión y cierre", `
      <p>Podemos limitar o cerrar cuentas por incumplimiento, fraude, riesgo para otras personas, orden de autoridad o falta de pago de una empresa. Cuando sea posible, avisaremos el motivo y podrás pedir revisión en ${correo(contacto.correoLegal)}.</p>
    `),
    seccion("tiendas", "Descarga desde Apple o Google", `
      <p>Estos términos son entre tú y ${n}, no con Apple ni Google. ${n}, y no ellas, responde por la app y su contenido, su mantenimiento y soporte, y las reclamaciones sobre ella, incluidas las de producto, cumplimiento legal, consumo y propiedad intelectual.</p>
      <p>En iPhone puedes usar la app en dispositivos Apple que poseas o controles, según las reglas de uso del App Store. Si la app no cumple una garantía aplicable, puedes avisar a Apple, que podrá reembolsar el precio de compra, si lo hubo; Apple no tiene otra obligación de garantía en la medida que la ley lo permita. Declaras que no estás en un país sujeto a embargo de Estados Unidos ni en sus listas de partes restringidas. Apple y sus filiales son terceros beneficiarios de estos términos y pueden exigir su cumplimiento.</p>
    `),
    seccion("cambios", "Cambios", `
      <p>Publicaremos los cambios en esta página. Los importantes se avisarán con al menos ${vigencia.avisoCambiosDias} días de antelación. Si no estás de acuerdo, puedes dejar de usar el servicio y cerrar tu cuenta.</p>
    `),
    seccion("ley", "Ley aplicable y reclamos", `
      <p>Estos términos se rigen por las leyes de ${esc(responsable.pais)}. Escríbenos primero para intentar resolver cualquier diferencia. Como consumidor puedes acudir a la Superintendencia de Industria y Comercio o a los jueces competentes. Estos términos no te obligan a ir a arbitraje.</p>
      <p>Si una cláusula resulta inválida, las demás siguen vigentes.</p>
    `),
  ],
};
