// Start Show Menu
const btnMenu = document.querySelector(".btn-menu");
const header = document.querySelector("header");
const listMenu = document.querySelector(".mobile-nav .lists");
const transLayer = document.querySelector("#header-layer");

listMenu ? (listMenu.style.top = header.clientHeight + "px") : "";

// Menu toggle functions
const toggleMenu = (isOpen) => {
  btnMenu.classList.toggle("show", isOpen);
  listMenu.classList.toggle("toggle-lists", isOpen);
  header.style.background = isOpen ? "#FFF" : getBackgroundOpacity();
  toggleTransLayer(isOpen);
};

const toggleTransLayer = (isVisible) => {
  transLayer.style.display = isVisible ? "block" : "none";
};

const getBackgroundOpacity = () => {
  return window.pageYOffset < 100 ? "rgba(255, 255, 255, 0.43)" : "";
};

// Event listeners
btnMenu.addEventListener("click", () => {
  const isOpen = !btnMenu.classList.contains("show");
  toggleMenu(isOpen);
});

transLayer.addEventListener("click", () => toggleMenu(false));

// end Show Menu

// get position elemant in page

const positionElement = (targetElement) => {
  const rect = targetElement.getBoundingClientRect();
  let targetX = rect.left + window.scrollX;
  let targetY = rect.top + window.scrollY;
  return { targetX, targetY };
};

// start Scroll Down

const scrollDownBeforeElement = (btn, scrollX, scrollY) => {
  btn.onclick = () => window.scrollTo(scrollX, scrollY);
};
const scrollDownBtn = document.querySelector(".icon-down");
const seoulFashion = document.querySelector(".note");
let { XAxis, YAxis } = positionElement(seoulFashionElement);
YAxis -= 80;
scrollDownBeforeElement(scrollDownBtn, XAxis, YAxis);

// end Scroll Down

// start  toggle nav

const navLinks = document.querySelectorAll(".link-list");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
    if (window.pageYOffset <= 1200) {
      toggleMenu(false);
    }
  });
});

// end  toggle nav

window.onscroll = () => {
  const scrolledPast100 = window.pageYOffset >= 100;
  header.style.background = scrolledPast100
    ? "#FFF"
    : "rgba(255, 255, 255, 0.43)";
};

// start  slider
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  scroll: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="special-chr ' +
        className +
        '">0' +
        (index + 1) +
        "</span>"
      );
    },
  },
});

// end  slider
