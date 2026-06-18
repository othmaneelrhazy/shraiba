// ====== Store Configuration ======
const WHATSAPP_NUMBER = "212688812627"; // ← ضع رقم الواتساب الخاص بك هنا

// ====== Product Data (10 products) ======
const products = [
  { id: 1,  name: "قنينة شرايبة الفخارية مع كوب", desc: "اشرب الماء كما كان يشرب أجدادك — من طين طبيعي 100% بدون أي مواد كيماوية. تحمل لتر كامل وتبرّد الماء بشكل طبيعي. شكل قنينة لوسيور المحبوبة، بروح فخارية أصيلة.", price: 120, oldPrice: 160, rating: "5.0", sold: 47, badge: "الأكثر مبيعًا", img: "https://blogger.googleusercontent.com/img/a/AVvXsEgznuUP_4ikC26WELPmY_7jyDuOXLiM1mEjRp-K6PttHuFzag0J323hNcpv_gO4nAkw_9pLWd2E133NM6BH6jnXh7HIEGzx7D9KJgWZtvr2-cF2D7zgSzj6XE9k2p7X64OluP92EWX1sWjYRMYxzKm9Wnk0sabfjprKyEkKfDIEFRdpnIl8wFCo-TakH1zQ" },
  { id: 2,  name: "قنينة الطين الكبيرة — لتر ونص", desc: "بدون ثلاجة، بدون كهرباء، بدون بلاستيك — الطين يبرّد الماء بشكل طبيعي كما كان أجدادنا. تحمل لتراً ونصف، آمنة 100%، خرجت من الفرن على 950 درجة.", price: 139, oldPrice: 180, rating: "4.9", sold: 23, badge: "جديد", img: "https://blogger.googleusercontent.com/img/a/AVvXsEhGGfaKuf_WaOEHGF7ZcbYajZA7eAg9ORINCi9ShaasIWGT-7nutoI7A2MkaKmWtqhgm73HJ5_hZrS4WS_TK348LqEMDWrSyevvJ6JlGSW5-qI5PyrhESvac8bSm-Vx-2isckCGrKAr8YLoDw1dJPUb-xQ2hMehE97-T13mdBUnPRIxYu8PgEwskt0VDZXo" },
  { id: 3,  hidden: true, name: "طقم أكواب فخارية (6 قطع)", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 4,  hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 5,  hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 6,  hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 7,  hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 8,  hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 9,  hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
  { id: 10, hidden: true, name: "قريباً", desc: "", price: 0, oldPrice: 0, rating: "5.0", sold: 0 },
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
    .filter(p => !p.hidden)
    .map(
      (p) => `
    <article class="card">
      <div class="card__media">
        <img src="${p.img || `https://picsum.photos/seed/pottery-${p.id}/400/400`}" alt="${p.name}" loading="lazy" />
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
