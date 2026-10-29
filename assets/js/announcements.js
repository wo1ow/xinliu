(() => {
  const root = document.getElementById("xinliu-announcements");
  if (!root) return;
  const slides = root.querySelectorAll(".announcement-slide");
  const prev = root.querySelector("#announcement-prev");
  const next = root.querySelector("#announcement-next");
  let index = 0;

  if (slides.length === 0) return;

  function showAnnouncement() {
    slides.forEach((slide, position) => {
      slide.hidden = position !== index;
    });

    prev.disabled = index === slides.length - 1;
    next.disabled = index === 0;
  }

  prev.addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
      showAnnouncement();
    }
  });

  next.addEventListener("click", () => {
    if (index > 0) {
      index--;
      showAnnouncement();
    }
  });

  showAnnouncement();
})();
