const action = document.querySelector(".action");
const eye = document.querySelector(".eye");

let open = false;
let show = true;

action.addEventListener("click", () => {
  const root = document.documentElement;
  const password = document.querySelector("#password");
  const arrow = document.querySelector("#arrow");
  const check = document.querySelector("#check");
  const times = document.querySelector("#times");

  arrow.classList.add("hide");
  check.classList.add("hide");
  times.classList.add("hide");

  if (open) {
    root.style.setProperty("--color-primary", "dodgerblue");
    root.style.setProperty("--scale-primary", "scaleX(0)");
    root.style.setProperty("--opacity-primary", 0);
    arrow.classList.remove("hide");
    action.dataset.content = "";
  } else {
    if (password && password.value === "db") {
      //check if data from backend is correct

      action.dataset.content = "Welcome 💋";
      root.style.setProperty("--color-primary", "lightseagreen");
      check.classList.remove("hide");
    } else {
      action.dataset.content = "Invalid password";
      root.style.setProperty("--color-primary", "tomato");
      times.classList.remove("hide");
    }

    root.style.setProperty("--scale-primary", "scaleX(1)");
    root.style.setProperty("--opacity-primary", 1);
  }
  open = !open;
});

eye.addEventListener("click", () => {
  const inp = document.querySelector("#password");

  const oEye = eye.querySelector("i#openEye");
  const cEye = eye.querySelector("i#closeEye");

  oEye.classList.add("hide");
  cEye.classList.add("hide");

  if (show) {
    inp.setAttribute("type", "text");
    oEye.classList.remove("hide");
  } else {
    inp.setAttribute("type", "password");
    cEye.classList.remove("hide");
  }
  show = !show;
});
