// ====== Store Configuration ======
const WHATSAPP_NUMBER = "212688812627"; // ← ضع رقم الواتساب الخاص بك هنا

// ====== Product Data (10 products) ======
const products = [
  {
    id: 1,
    name: "قنينة فخارية مع كوب",
    desc: "اشرب الماء كما كان يشرب أجدادك — من طين طبيعي 100% بدون أي مواد كيماوية. تحمل لتر كامل وتبرّد الماء بشكل طبيعي. شكل قنينة لوسيور المحبوبة، بروح فخارية أصيلة.",
    fullDesc: "قنينة فخارية مصنوعة يدوياً من طين طبيعي 100% بدون أي مواد كيماوية أو إضافات. مستوحاة من شكل قنينة لوسيور المغربية المحبوبة، حُوِّلت إلى تحفة فخارية أصيلة.\n\n✅ تحمل لتراً كاملاً من الماء\n✅ تبرّد الماء بشكل طبيعي بدون ثلاجة\n✅ آمنة تماماً — طين طبيعي خرج من الفرن على 950 درجة\n✅ مع كوب فخاري مميز\n✅ توصيل لجميع مدن المغرب",
    price: 120, oldPrice: 160, rating: "5.0", sold: 47, badge: "الأكثر مبيعًا",
    img: "images/product1-1.jpg",
    images: ["images/product1-1.jpg","images/product1-2.jpg","images/product1-3.jpg"]
  },
  {
    id: 2,
    name: "قنينة الطين الكبيرة — لتر ونص",
    desc: "بدون ثلاجة، بدون كهرباء، بدون بلاستيك — الطين يبرّد الماء بشكل طبيعي كما كان أجدادنا. تحمل لتراً ونصف، آمنة 100%، خرجت من الفرن على 950 درجة.",
    fullDesc: "قنينة فخارية كبيرة مصنوعة من طين مغربي طبيعي 100%، مستوحاة من شكل القنينة الزجاجية الكلاسيكية.\n\n✅ تحمل لتراً ونصف من الماء\n✅ تبرّد الماء طبيعياً — الطين يتنفس ويعطي الماء طعماً نقياً\n✅ مصنوعة يدوياً وحُرقت في الفرن على 950 درجة مئوية\n✅ آمنة تماماً للاستخدام اليومي\n✅ توصيل لجميع مدن المغرب شامل في السعر",
    price: 139, oldPrice: 180, rating: "4.9", sold: 23, badge: "جديد",
    img: "images/product2-1.jpg",
    images: ["images/product2-1.jpg","images/product2-2.jpg","images/product2-3.jpg"]
  },
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
        <a class="card__details" href="product.html?id=${p.id}">
          🔍 تفاصيل المنتج
        </a>
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
