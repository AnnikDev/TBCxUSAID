const allQuestions = document.querySelectorAll(".questions");

allQuestions.forEach((questions) => {
    questions.addEventListener("click", () => {
        questions.classList.toggle("active");
    });
});

console.log(allQuestions)