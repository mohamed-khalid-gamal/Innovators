document.addEventListener("DOMContentLoaded", function () {
  // Toggle FAQ answers
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".circle-icon");

      // If it's a back icon, don't toggle
      if (this.querySelector(".back-icon")) {
        return;
      }

      // Toggle current item
      faqItem.classList.toggle("active");
      answer.classList.toggle("show");

      // Close other open items
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          const otherItem = otherQuestion.parentElement;
          const otherAnswer = otherQuestion.nextElementSibling;

          if (otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            otherAnswer.classList.remove("show");
          }
        }
      });
    });
  });
});
