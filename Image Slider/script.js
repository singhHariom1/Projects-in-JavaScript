addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    nextBtn.addEventListener("click", () => {
        slides[currentIndex].classList.remove("active")
        currentIndex = (currentIndex + 1) % slides.length // Move to next
        slides[currentIndex].classList.add("active")
    })

    prevBtn.addEventListener("click", () => {
        slides[currentIndex--].classList.remove("active")
        currentIndex = (currentIndex - 1 + slides.length) % slides.length // Move to previous
        slides[currentIndex].classList.add("active")
    })

})
