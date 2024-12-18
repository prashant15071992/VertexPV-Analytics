document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Logo Rotation
  const logo = document.querySelector(".logo-img"); // Select the logo image

  // Add 'bounce' class to start the bounce animation every 5 seconds
  setInterval(() => {
    logo.classList.toggle("bounce");
  }, 5000);
  // Select all links with 'coming-soon' class
  const comingSoonLinks = document.querySelectorAll(".coming-soon");
  const modal = document.getElementById("comingSoonModal");
  const closeBtn = document.querySelector(".close-btn");

  // Add click event to each 'coming-soon' link
  comingSoonLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      modal.style.display = "flex"; // Show the modal
    });
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
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
