const openBtn = document.querySelector(".btn-open");
const modalBox = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".btn-close");
const overlay = document.querySelector(".overlay");
openBtn.addEventListener("click", () => {
  modalBox.classList.add("show");
});

closeBtn.forEach((cbtn) => {
  cbtn.addEventListener("click", () => {
    modalBox.classList.remove("show");
  });
});
overlay.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target === overlay) {
    modalBox.classList.remove("show");
  }
});
