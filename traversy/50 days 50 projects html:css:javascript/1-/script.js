const panels = document.querySelectorAll(".panels");

function removeIt() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeIt();
    panel.classList.add("active");
  });
});

//document.querySelector("body.addEventListener("click", () => {
//    removeIt();
//})
