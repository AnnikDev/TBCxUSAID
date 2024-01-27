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