// =============================================================================
// VARIABLES DEL SITIO LEGAL
//
// Este es el único archivo que hay que tocar para cambiar nombres, datos de
// contacto, plazos, fechas o colores. Después de editarlo, ejecuta:
//
//     node build.mjs
//
// Un campo vacío ("") se publica como «[Pendiente: …]» resaltado y el build lo
// lista en la consola. Completa esos campos antes de enviar la app a las tiendas.
// =============================================================================

export const config = {
  // --- Aplicación ------------------------------------------------------------
  app: {
    nombre: "Domik",
    nombreCompleto: "Domik - Pide Fácil",
    lema: "Pide Fácil",
    // Deben coincidir con la ficha publicada en cada tienda.
    desarrolladorPlay: "MBR Soft",
    paqueteAndroid: "com.appdomi",
    bundleIos: "com.appdomi",
    urlPlay: "https://play.google.com/store/apps/details?id=com.appdomi",
    urlAppStore: "", // Déjalo vacío hasta publicar en App Store (no se muestra).
  },

  // --- Responsable del tratamiento (datos legales) ---------------------------
  // Son obligatorios en la política: identifican a quien responde legalmente.
  responsable: {
    nombreLegal: "", // Razón social o nombre completo de la persona natural.
    tipoDocumento: "", // Por ejemplo: NIT o C.C.
    numeroDocumento: "",
    direccion: "",
    ciudad: "",
    pais: "Colombia",
  },

  // --- Canales de contacto ---------------------------------------------------
  contacto: {
    correoSoporte: "saasagente@gmail.com",
    correoPrivacidad: "saasagente@gmail.com",
    correoLegal: "saasagente@gmail.com",
    // Solo dígitos, con indicativo de país.
    whatsappSoporte: "573144295049",
    horario: "lunes a viernes, de 8:00 a. m. a 6:00 p. m. (hora de Colombia)",
  },

  // --- Sitio -----------------------------------------------------------------
  sitio: {
    url: "https://politicas.millerrivera.com", // Sin barra final.
    idioma: "es-CO",
  },

  // --- Vigencia --------------------------------------------------------------
  vigencia: {
    version: "2.0",
    fecha: "18 de noviembre de 2026",
    fechaIso: "2026-11-18",
    avisoCambiosDias: 15, // Antelación con la que se avisan cambios importantes.
  },

  // --- Edad ------------------------------------------------------------------
  edadMinima: 18,

  // --- Plazos de atención ----------------------------------------------------
  // Consultas y reclamos: los máximos de los artículos 14 y 15 de la Ley 1581.
  plazos: {
    consultaDiasHabiles: 10,
    consultaProrrogaDiasHabiles: 5,
    reclamoDiasHabiles: 15,
    reclamoProrrogaDiasHabiles: 8,
    subsanarReclamoDiasHabiles: 5,
    eliminacionDiasCalendario: 30,
    reporteContenidoHoras: 24,
  },

  // --- Conservación de datos -------------------------------------------------
  // Las tres primeras reflejan lo que hace hoy el backend. Si cambian allá,
  // cámbialas aquí. Las demás son compromisos que la operación debe cumplir.
  retencion: {
    historialUbicacionDias: 90,
    tokensPushInactivosDias: 30,
    enlaceSeguimiento: "alrededor de 1 hora",
    generalTrasCierre: "12 meses",
    seguridad: "12 meses",
    copiasRespaldo: "90 días",
    contable: "hasta 10 años",
  },

  // --- Proveedores que no se pueden deducir del código -----------------------
  proveedores: {
    infraestructura: "", // Empresa y país donde están los servidores.
  },

  // --- Marca (mismos valores que la app) -------------------------------------
  marca: {
    primario: "#D93A2B",
    primarioFuerte: "#B92A1E", // Enlaces y botones sobre fondo claro.
    primarioOscuro: "#FF6F66", // Enlaces sobre fondo oscuro.
  },
};
