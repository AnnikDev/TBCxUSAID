const allQuestions = document.querySelectorAll(".questions");

allQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const isActive = question.classList.contains("active");

    allQuestions.forEach((q) => {
      q.classList.remove("active");

      q.childNodes[1].childNodes[1].classList.remove("ri-arrow-up-s-line");
      q.childNodes[1].childNodes[1].classList.add("ri-arrow-down-s-line");
    });

    if (!isActive) {
      question.classList.add("active");

      const icon = question.childNodes[1].childNodes[1];
      icon.classList.remove("ri-arrow-down-s-line");
      icon.classList.add("ri-arrow-up-s-line");
    }
  });
});

window.addEventListener("scroll", () => {
    var headerContainer = document.getElementsByClassName("header-container")[0];
  
    if (window.scrollY > 1) {
      headerContainer.style.opacity = "0.90";
    } else {
      headerContainer.style.opacity = "1";
    }
  });

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-item");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function startCarouselTimer() {
  setInterval(() => {
    plusSlides(1);
  }, 3000);
}

startCarouselTimer();