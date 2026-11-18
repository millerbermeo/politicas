// Mejoras opcionales: las páginas se leen completas sin este archivo.
(() => {
  const root = document.documentElement;
  const marcarScroll = () => root.classList.toggle("is-scrolled", window.scrollY > 8);
  marcarScroll();
  window.addEventListener("scroll", marcarScroll, { passive: true });

  // El índice arranca cerrado en móvil para llevar directo al contenido.
  const toc = document.querySelector(".toc");
  if (toc && window.matchMedia("(max-width: 63.99rem)").matches) toc.open = false;
  toc?.addEventListener("click", (e) => {
    if (e.target.closest("a") && window.matchMedia("(max-width: 63.99rem)").matches) toc.open = false;
  });

  // Cierra el menú al tocar fuera o pulsar Escape.
  const menu = document.querySelector(".nav-menu");
  document.addEventListener("click", (e) => {
    if (menu?.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu?.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });

  // Resalta en el índice la sección que se está leyendo.
  const enlaces = new Map(
    [...document.querySelectorAll(".toc a")].map((a) => [a.getAttribute("href").slice(1), a]),
  );
  if (!enlaces.size || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        for (const a of enlaces.values()) {
          a.classList.remove("is-active");
          a.removeAttribute("aria-current");
        }
        const activo = enlaces.get(entrada.target.id);
        activo?.classList.add("is-active");
        activo?.setAttribute("aria-current", "true");
      }
    },
    { rootMargin: "-15% 0px -75% 0px" },
  );
  document.querySelectorAll(".prose section[id]").forEach((s) => observer.observe(s));
})();
