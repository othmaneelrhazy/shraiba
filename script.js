const products = [
  {
    name: "قنينة فخارية طبيعية 1.5 لتر مع كأس",
    price: "139 درهم",
    image: "images/product1.jpg",
    description: "طين طبيعي 100% يحافظ على الماء بطعم طبيعي ومنعش.",
    badge: "الأكثر مبيعاً"
  },

  {
    name: "قنينة فخارية طبيعية 1 لتر مع كأس",
    price: "125 درهم",
    image: "images/product2.jpg",
    description: "حجم عملي للاستعمال اليومي وحفظ الماء طبيعياً.",
    badge: "جديد"
  },

  {
    name: "طين خام أحمر طبيعي",
    price: "100 درهم للكيلو",
    image: "images/product3.jpg",
    description: "طين خام طبيعي للاستعمالات الفخارية والتشكيل اليدوي.",
    badge: "طبيعي 100%"
  },

  {
    name: "منتج جديد قريباً",
    price: "سيتم الإعلان قريباً",
    image: "images/soon.jpg",
    description: "منتج جديد قيد الإضافة.",
    badge: "قريباً"
  },

  {
    name: "منتج جديد قريباً",
    price: "سيتم الإعلان قريباً",
    image: "images/soon.jpg",
    description: "منتج جديد قيد الإضافة.",
    badge: "قريباً"
  },

  {
    name: "منتج جديد قريباً",
    price: "سيتم الإعلان قريباً",
    image: "images/soon.jpg",
    description: "منتج جديد قيد الإضافة.",
    badge: "قريباً"
  }
];

const phone = "212688812627";

const productGrid = document.getElementById("productGrid");

productGrid.innerHTML = products.map(product => `
<div class="product-card">

  <div class="product-image">
    <img src="${product.image}" alt="${product.name}">
    <span class="product-badge">${product.badge}</span>
  </div>

  <div class="product-content">
    <h3>${product.name}</h3>

    <p>${product.description}</p>

    <div class="product-footer">
      <span class="price">${product.price}</span>

      <a
        href="https://wa.me/${phone}?text=${encodeURIComponent('السلام عليكم، أريد طلب: ' + product.name)}"
        target="_blank"
        class="btn-order"
      >
        اطلب الآن
      </a>
    </div>
  </div>

</div>
`).join("");
