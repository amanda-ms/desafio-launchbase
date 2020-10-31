const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");

for (let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");
    const postId = card.getAttribute("id");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://blog.rocketseat.com.br/${postId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});

const maximizeModal = modalOverlay.querySelector(".maximize-modal");

maximizeModal.addEventListener("click", function () {
  if (modal.classList.contains("maximize")) {
    modal.classList.remove("maximize");
  } else {
    modal.classList.add("maximize");
  }
});
