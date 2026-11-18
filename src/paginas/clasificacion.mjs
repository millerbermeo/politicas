import { aviso, c, esc, lista, seccion, tabla, tarjetas } from "../lib.mjs";

const { app, edadMinima } = c;
const NO = "No";

export default {
  archivo: "clasificacion-contenido.html",
  corto: "Clasificación",
  titulo: "Clasificación de contenido",
  descripcion: `Público objetivo y declaración de contenido de ${app.nombreCompleto} para Google Play (IARC) y App Store.`,
  intro: `A quién va dirigida ${esc(app.nombre)} y qué contenido puede encontrarse en ella.`,
  resumen: `<div class="summary">${tarjetas([
    ["Público objetivo", `Personas de ${edadMinima} años o más.`],
    ["Contenido de usuarios", "Chat, fotos, audios y reseñas."],
    ["Productos restringidos", `Algunos locales pueden vender alcohol, solo a mayores de ${edadMinima}.`],
  ])}</div>`,
  secciones: [
    seccion("publico", "Público objetivo", `
      <p>${esc(app.nombre)} no está dirigida a niños ni adolescentes. Las cuentas son para mayores de ${edadMinima} años, según los <a href="terminos.html#cuenta">términos</a>.</p>
      ${aviso("La clasificación la asigna cada tienda", "Google Play la obtiene de IARC y Apple la calcula según el cuestionario. Esta página recoge las respuestas de referencia, no un certificado.")}
    `),
    seccion("contenido", "Qué puede contener", `
      ${lista([
        "Catálogos de restaurantes, tiendas, supermercados, farmacias, licorerías y otros comercios.",
        "Chat con texto, fotos, audios, ubicación, stickers y reacciones.",
        "Reseñas públicas, y fotos y descripciones publicadas por locales.",
        "Ubicación compartida para coordinar entregas.",
      ])}
      <p>No contiene apuestas, juegos de azar, violencia, contenido sexual, anuncios ni compras dentro de la app. El contenido publicado por usuarios se rige por las <a href="normas-comunidad.html">normas de la comunidad</a>.</p>
    `),
    seccion("google", "Google Play: cuestionario IARC", `
      <p>Categoría sugerida: <strong>Utilidad, productividad, comunicación u otra</strong>.</p>
      ${tabla(["Pregunta", "Respuesta"], [
        ["Violencia, miedo o sangre", NO],
        ["Contenido sexual o desnudos", NO],
        ["Lenguaje ofensivo creado por la app", NO],
        ["Drogas ilegales", NO],
        ["Referencia o venta de alcohol", "Sí: venta por locales, solo para adultos"],
        ["Referencia o venta de tabaco", "No: está prohibido en la plataforma"],
        ["Apuestas o simulación de apuestas", NO],
        ["Los usuarios pueden interactuar o comunicarse", "Sí"],
        ["Los usuarios pueden compartir contenido", "Sí"],
        ["Se comparte la ubicación con otros usuarios", "Sí"],
        ["Compra de bienes físicos o digitales", "Sí, bienes físicos, acordados con el local fuera de la app"],
        ["Público objetivo en Play Console", `${edadMinima} años o más`],
        ["Anuncios", NO],
      ])}
    `),
    seccion("apple", "App Store: cuestionario de edad", `
      ${tabla(["Elemento", "Respuesta"], [
        ["Controles parentales", NO],
        ["Verificación de edad en la app", NO],
        ["Acceso web sin restricciones", "No: solo enlaces concretos"],
        ["Contenido generado por usuarios", "Sí"],
        ["Mensajería y chat", "Sí"],
        ["Redes sociales", NO],
        ["Publicidad", NO],
        ["Alcohol, tabaco o drogas", "Frecuente: algunos locales venden alcohol (corresponde a 18+)"],
        ["Información médica o de tratamiento", "No: las farmacias solo muestran catálogo"],
        ["Temas de salud o bienestar", NO],
        ["Lenguaje soez, terror o temas maduros", NO],
        ["Contenido sexual o desnudos", NO],
        ["Violencia o armas", NO],
        ["Apuestas, concursos o cajas de botín", NO],
      ])}
      <p>Con estas respuestas, la clasificación esperada en App Store es <strong>18+</strong>, coherente con la edad mínima de la app. La calcula Apple.</p>
    `),
    seccion("familias", "Padres y cuidadores", `
      <p>Si crees que un menor tiene una cuenta o recibió productos restringidos, <a href="contacto.html#reportar">repórtalo</a>. Cerraremos la cuenta y revisaremos el caso.</p>
    `),
  ],
};
