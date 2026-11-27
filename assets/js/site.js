// ===== CONFIGURAÇÃO =====
// Número de WhatsApp com indicativo, só números (ex.: 351912345678)
const WHATSAPP = "351968202794";

// Cada link com data-wa="mensagem" abre o WhatsApp com essa mensagem já escrita.
document.querySelectorAll("[data-wa]").forEach((a) => {
  const msg = a.getAttribute("data-wa") || "Olá Joana!";
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// ===== PAGAMENTOS (Stripe / Klarna) =====
// Quando os links estiverem prontos, cole-os aqui. Os botões só aparecem no site
// quando o link correspondente estiver preenchido.
const PAY_LINKS = {
  "inscricao": "",   // Inscrição 200€
  "grupo": "",       // Formação em grupo · Iniciantes
  "individual": "",  // Formação individual · Iniciantes
  "masterclass": "", // Masterclass Profissionais
  "sinal": "",       // Sinal para marcação de tratamento (opcional)
};
document.querySelectorAll("[data-pay]").forEach((a) => {
  const url = PAY_LINKS[a.getAttribute("data-pay")];
  if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; a.hidden = false; }
  else { a.hidden = true; }
});

// Esconde o botão flutuante do WhatsApp quando já há botões de WhatsApp à vista
// (secção final, "Onde estamos" e rodapé), para não tapar texto nem botões.
(() => {
  const fab = document.querySelector(".wa-float");
  if (!fab || !("IntersectionObserver" in window)) return;
  const zones = document.querySelectorAll(".bg-olive, #visita, .site-footer, .hero");
  const visible = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    fab.classList.toggle("off", visible.size > 0);
  }, { threshold: 0.01 });
  zones.forEach((z) => io.observe(z));
})();
