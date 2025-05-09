document.addEventListener("DOMContentLoaded", () => {
  // YouTube video modal code
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const iframe = modal.querySelector("iframe");
  const closeBtn = modal.querySelector(".close-btn");
  const openBtns = document.querySelectorAll(".openVideo");

  function extractVideoID(url) {
    const patterns = [
      /youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      /v=([a-zA-Z0-9_-]{11})/,
    ];
    for (const re of patterns) {
      const m = url.match(re);
      if (m) return m[1];
    }
    return null;
  }

  document.querySelectorAll(".video-card").forEach((card) => {
    const btn = card.querySelector(".openVideo");
    const url = btn.dataset.youtube;
    const id = extractVideoID(url);
    if (!id) return;
    const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    const img = card.querySelector(".card-thumb img");
    if (img) {
      img.src = thumb;
      img.alt = `Thumbnail for video ${id}`;
    }
  });

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = btn.dataset.youtube;
      const videoID = extractVideoID(url);
      if (!videoID) {
        return alert("رابط الفيديو غير صحيح!");
      }
      iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0`;
      overlay.style.display = "flex";
    });
  });

  function closeModal() {
    iframe.src = "";
    overlay.style.display = "none";
  }
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
});
