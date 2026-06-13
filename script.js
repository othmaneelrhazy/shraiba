// ====== Store Configuration ======
const WHATSAPP_NUMBER = "212688812627"; // ← ضع رقم الواتساب الخاص بك هنا

// ====== Product Data (10 products) ======
const products = [
  { id: 1,  name: "طاجين فخاري آسفي مزخرف",   desc: "طاجين تقليدي مصنوع يدويًا بزخارف أمازيغية أصيلة، مثالي للطبخ والتقديم.", price: 249, oldPrice: 349, rating: "4.9", sold: 1240, badge: "الأكثر مبيعًا" },
  { id: 2,  name: "إناء فخاري كبير للديكور",   desc: "إناء أرضي بلمسة تراثية، يضيف دفئًا مغربيًا لأي ركن في منزلك.",          price: 399, oldPrice: 520, rating: "4.8", sold: 860 },
  { id: 3,  name: "طقم أكواب فخارية (6 قطع)", desc: "أكواب يدوية بألوان ترابية دافئة، مثالية للشاي والقهوة.",                price: 179, oldPrice: 240, rating: "4.9", sold: 2100, badge: "عرض خاص" },
                       price: 189, oldPrice: 250, rating: "4.7", sold: 480 },
];

// ====== Helpers ======
const formatPrice = (p) => `${p} درهم`;

const waLink = (product) => {
  const msg = `مرحبًا 👋 أريد طلب: ${product.name} بسعر ${formatPrice(product.price)} 🏺`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

// ====== Render Products ======
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products
    .map(
      (p) => `
    <article class="card">
      <div class="card__media">
        <img src="https://picsum.photos/seed/pottery-${p.id}/400/400" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__meta">
          <span>★ ${p.rating}</span>
          <span class="sold">| تم بيع +${p.sold}</span>
        </div>
        <div class="card__pricing">
          <span class="card__price">${formatPrice(p.price)}</span>
          <span class="card__old">${formatPrice(p.oldPrice)}</span>
        </div>
        <a class="card__wa" href="${waLink(p)}" target="_blank" rel="noopener">
          اطلب عبر واتساب 💬
        </a>
      </div>
    </article>`
    )
    .join("");
}

// ====== Scroll Reveal Animation ======
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".card").forEach((card) => observer.observe(card));
}

// ====== Smooth Scroll for Anchors ======
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initReveal();
  initSmoothScroll();
});
