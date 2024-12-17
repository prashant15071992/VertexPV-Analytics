document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Logo Rotation
  const logo = document.querySelector(".logo-img"); // Select the logo image by class

  // Add click event listener to toggle 'rotate' class
  logo.addEventListener("click", () => {
    logo.classList.toggle("rotate"); // Add or remove 'rotate' class
  });

  // Carousel
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showSlide(index) {
    const totalItems = carouselItems.length;
    carouselItems.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
    currentIndex = index % totalItems; // Ensure looping
  }

  // Auto-slide every 8 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }, 8000);

  // Show the first slide initially
  showSlide(currentIndex);

  // Scroll Effect for Features Section
  const scrollItems = document.querySelectorAll(".scroll-effect");

  function checkScroll() {
    scrollItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      // Add 'show' class when the item is in the viewport
      if (rect.top < window.innerHeight - 100) {
        item.classList.add("show");
      }
    });
  }

  // Trigger the scroll effect on load and scroll
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run once on page load
});
