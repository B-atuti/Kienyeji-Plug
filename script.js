// Product data

const productData = [
  { name: 'Managu', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://i0.wp.com/healthwise.co.ke/wp-content/uploads/2024/10/Healthwise-Managu.jpg?w=800&ssl=1' },
  { name: 'Managu & Terere', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://i0.wp.com/healthwise.co.ke/wp-content/uploads/2024/06/Healthwise-Sylvias-Basket-organic-terereamaranth.jpg?fit=800%2C800&ssl=1' },
  { name: 'Kunde', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://th.bing.com/th/id/OIP.T0YxDUPucPiAdva5aPxKUgHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7' },
  { name: 'Saga', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'data:image/jpeg;base64,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' },
  { name: 'Saga & Terere', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/sagr-herb-2D184E13-264D-4325-8822-798DAFA02268.jpg' },
  { name: 'Terere', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/terere-19004B2B-1848-4709-9A5C-25420800685C.jpg' },
  { name: 'Mrenda', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/mrenda-95B589D1-A8F6-43AF-8B49-EE278F1C496D.jpg' },
  { name: 'Mrenda Mixed with Pumpkin leaves', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/mrenda-95B589D1-A8F6-43AF-8B49-EE278F1C496D.jpg' },
  { name: 'Plain Pumpkin leaves', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/kahurura-661914F5-DE73-44BC-9D68-E935A91050EC.jpg' },
  { name: 'Kunde & Mrenda', type: 'Pre-cooked', price: '1000g: 350 KES / 500g: 200 KES', img: 'https://maishaafricausa.com/images/products_details/fresh_vegetables/mchicha.jpg' },
  { name: 'Managu', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/managu-0E192E95-E176-4162-B76F-6648E42FF156.jpg' },
  { name: 'Amaranth', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/terere-19004B2B-1848-4709-9A5C-25420800685C.jpg' },
  { name: 'Kunde', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/kunde-sagetti-1D1C1BB8-0A20-40E8-95EE-91408ACC5394.jpg' },
  { name: 'Saga', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://www.nyongesasande.com/wp-content/uploads/2024/03/r-l8kaSfArDu9n2Fr7XnlKRxPMN2njNXXf1TVTsO6v07soSGVCQBG11TcHN-HiLyg-ow526-h296-rw.webp' },
  { name: 'Shredded cabbage', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://static.vecteezy.com/system/resources/previews/000/810/811/large_2x/shredded-cabbage-photo.jpg' },
  { name: 'Terere', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://i0.wp.com/healthwise.co.ke/wp-content/uploads/2024/10/Healthwise-terereamaranth.jpg?w=800&ssl=1' },
  { name: 'Mrenda', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLULc_n6L95ZSgq6zUKJG4fk3R0XNog6SR4OKyAHOCTs-BegFu50iFEe9DL15DYi2vto&usqp=CAU' },
  { name: 'Kales', type: 'Dried', price: '100g: 500 KES / 50g: 300 KES', img: 'https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/sukuma-wiki-6476786C-26B6-4841-912C-98F400AC8A55.jpg' },
];

// Add this after your product arrays and before the DOMContentLoaded event listener
function filterProducts(searchTerm) {
    const allProducts = productData;
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear existing products
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="no-results">No products found</div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <p class="product-price">${product.price}</p>
                <a href="https://wa.me/254768611821?text=I'm interested in ${product.name}" class="product-btn">Order Now</a>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  // WhatsApp integration
  const whatsappNumbers = ['+254712563818', '+254719346751'];
  const whatsappMessage = encodeURIComponent('Hello, I would like to inquire about your Kienyeji vegetables.');
  
  function openWhatsApp() {
    const url = `https://wa.me/${whatsappNumbers[0]}?text=${whatsappMessage}`;
    window.open(url, '_blank');
  }

  // WhatsApp button click handlers
  document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
    e.preventDefault();
    openWhatsApp();
  });

  document.getElementById('floating-whatsapp').addEventListener('click', openWhatsApp);

  // Hero slider logic
  const slides = document.querySelectorAll('.hero-slider .slide');
  const prevBtn = document.querySelector('.hero-slider .prev');
  const nextBtn = document.querySelector('.hero-slider .next');
  const dotsContainer = document.querySelector('.hero-slider .slider-dots');
  let currentSlide = 0;
  let sliderInterval;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === idx ? '1' : '0';
      slide.style.zIndex = i === idx ? '2' : '1';
      if (dotsContainer.children[i]) {
        dotsContainer.children[i].classList.toggle('active', i === idx);
      }
    });
    currentSlide = idx;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function startSlider() {
    sliderInterval = setInterval(nextSlide, 4000);
  }

  function stopSlider() {
    clearInterval(sliderInterval);
  }

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      showSlide(i);
      stopSlider();
      startSlider();
    });
    dotsContainer.appendChild(dot);
  });

  // Initialize slider
  showSlide(0);
  startSlider();

  // Button events
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlider();
    startSlider();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopSlider();
    startSlider();
  });

  // Pause on hover
  const heroSlider = document.querySelector('.hero-slider');
  heroSlider.addEventListener('mouseenter', stopSlider);
  heroSlider.addEventListener('mouseleave', startSlider);

  // Product grid population
  function populateProductGrid() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    productData.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" class="product-img">
        <div class="product-info">
          <div class="product-title">${prod.name}</div>
          <p class="product-type">${prod.type}</p>
          <div class="product-price">${prod.price}</div>
          <a href="#" class="product-btn" onclick="inquireProduct('${prod.name}');return false;">Add to cart</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Product inquiry function
  window.inquireProduct = function(productName) {
    const message = encodeURIComponent(`Hello, I would like to inquire about ${productName} from Kienyeji Plug.`);
    const url = `https://wa.me/${whatsappNumbers[0]}?text=${message}`;
    window.open(url, '_blank');
  };

  // Initialize product grid
  populateProductGrid();

  // Search functionality
  const searchForm = document.querySelector('.hero-search');
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input').value.toLowerCase();
    const filteredProducts = productData.filter(prod => 
      prod.name.toLowerCase().includes(searchTerm) || 
      prod.type.toLowerCase().includes(searchTerm)
    );
    
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      grid.innerHTML = '<p class="no-results">No products found matching your search.</p>';
      return;
    }
    
    filteredProducts.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" class="product-img">
        <div class="product-info">
          <div class="product-title">${prod.name}</div>
          <p class="product-type">${prod.type}</p>
          <div class="product-price">${prod.price}</div>
          <a href="#" class="product-btn" onclick="inquireProduct('${prod.name}');return false;">Add to cart</a>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  // Add search functionality
  const searchInput = document.getElementById('productSearch');
  searchInput.addEventListener('input', (e) => {
      filterProducts(e.target.value);
  });

  // Initial population of products
  filterProducts('');
}); 