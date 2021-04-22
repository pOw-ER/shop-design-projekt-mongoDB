
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

const deleteButton = document.getElementById("delete-button")

deleteButton.addEventListener("click", () => {
  confirm("Are you sure you want to delete this item?")
})
