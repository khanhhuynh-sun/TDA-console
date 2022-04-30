const navItems = document.querySelectorAll(".aside__navigation-item");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    navItems[i].classList.add("active");
  });
}
