document.addEventListener("mousedown", (e) => {
  const target = e.target;
  const style = window.getComputedStyle(target);
  const x = style.getPropertyValue("--ripple-x");
  const y = style.getPropertyValue("--ripple-y");
  if (x && y) {
    const targetPos = target.getBoundingClientRect();
    target.style.setProperty("--ripple-x", `calc(${e.clientX - targetPos.left}px - 5%)`);
    target.style.setProperty("--ripple-y", `calc(${e.clientY - targetPos.top}px - 50%)`);
  }
});

document.body.addEventListener(
  "focus",
  (e) => {
    const el = e.target.closest(".menu");
    if (el) {
      const popover = el.querySelectorAll("[popover]")[0];
      const elPos = el.getBoundingClientRect();
      const pos = popover.getBoundingClientRect();
      if (elPos.bottom + pos.height * 1.333 > window.innerHeight) {
        popover.style.top = "auto";
        popover.style.bottom = "100%";
      } else {
        popover.style.top = "100%";
        popover.style.bottom = "auto";
      }
    }
  },
  true
);
