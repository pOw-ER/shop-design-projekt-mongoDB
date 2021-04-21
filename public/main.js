
function openMenu() {
  let menu = document.getElementById("menu-list");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function closeMenu() {
  let menu = document.getElementById("menu-list");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
}
