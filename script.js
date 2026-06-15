// ====== Store Configuration ======
const WHATSAPP_NUMBER = "212688812627"; // ← ضع رقم الواتساب الخاص بك هنا

// ====== Product Data (10 products) ======
const products = [
  { id: 1,  name: "طاجين فخاري آسفي مزخرف",   desc: "طاجين تقليدي مصنوع يدويًا بزخارف أمازيغية أصيلة، مثالي للطبخ والتقديم.", price: 249, oldPrice: 349, rating: "4.9", sold: 1240, badge: "الأكثر مبيعًا" },
  { id: 2,  name: "إناء فخاري كبير للديكور",   desc: "إناء أرضي بلمسة تراثية، يضيف دفئًا مغربيًا لأي ركن في منزلك.",          price: 399, oldPrice: 520, rating: "4.8", sold: 860 },
  { id: 3,  name: "طقم أكواب فخارية (6 قطع)", desc: "أكواب يدوية بألوان ترابية دافئة، مثالية للشاي والقهوة.",                price: 179, oldPrice: 240, rating: "4.9", sold: 2100, badge: "عرض خاص" },
  { id: 4,  name: "صحن تقديم فخاري مزخرف",    desc: "صحن واسع بنقوش فاسية تقليدية لتقديم أشهى الأطباق.",                     price: 149, oldPrice: 199, rating: "4.7", sold: 730 },
  { id: 5,  name: "مزهرية فخارية عصرية",       desc: "مزهرية بتصميم عصري وروح تقليدية، صناعة حرفية متقنة.",                   price: 219, oldPrice: 290, rating: "4.8", sold: 540 },
  { id: 6,  name: "قِدر فخاري للطبخ البلدي",   desc: "قدر صحي للطبخ البطيء يحافظ على نكهة الأطباق المغربية الأصيلة.",          price: 279, oldPrice: 360, rating: "4.9", sold: 980 },
  { id: 7,  name: "طقم زبادي فخارية (4 قطع)",  desc: "زبادي صغيرة للحساء والحريرة بلمسة يدوية فريدة.",                        price: 129, oldPrice: 175, rating: "4.6", sold: 1500, badge: "جديد" },
  { id: 8,  name: "مبخرة فخارية تقليدية",      desc: "مبخرة مزخرفة يدويًا لعطور البخور المغربي الفاخر.",                       price: 99,  oldPrice: 140, rating: "4.7", sold: 650 },
  { id: 9,  name: "إبريق ماء فخاري (الغرّاف)",  desc: "إبريق تقليدي يحافظ على برودة الماء بشكل طبيعي.",                        price: 159, oldPrice: 210, rating: "4.8", sold: 1120 },
  { id: 10, name: "طبق فواكه فخاري مرتفع",     desc: "طبق أنيق بقاعدة مرتفعة لتقديم الفواكه والحلويات.",                       price: 189, oldPrice: 250, rating: "4.7", sold: 480 },
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
