// ===== CONFIGURAÇÃO =====
// Número de WhatsApp com indicativo, só números (ex.: 351912345678)
const WHATSAPP = "351XXXXXXXXX";

// Cada link com data-wa="mensagem" abre o WhatsApp com essa mensagem já escrita.
document.querySelectorAll("[data-wa]").forEach((a) => {
  const msg = a.getAttribute("data-wa") || "Olá Joana!";
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
