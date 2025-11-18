const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

const updateSlide = () => {
  if (slides) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
};

nextBtn?.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateSlide();
});

prevBtn?.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    if (lightbox && lightboxImg) {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    }
  });
});

closeBtn?.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
