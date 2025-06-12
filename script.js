window.addEventListener("scroll", () => {
  //navLink class control
  let navLinks = document.querySelectorAll(".nav-link a");
  let sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    let scroll = window.scrollY;
    let offset = section.offsetTop - 140;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (scroll >= offset && scroll < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`.nav-link a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  //navbar scroll control
  let nav = document.querySelector("nav");
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
});

//mobile menu control

let close = document.querySelector(".close");
let menu = document.querySelector(".open");
let navbar = document.querySelector(".nav-link");

menu.addEventListener("click", () => {
  navbar.style.display = "block";
  menu.style.display = "none";
  close.style.display = "inline-block";
});

close.addEventListener("click", () => {
  navbar.style.display = "none";
  menu.style.display = "inline-block";
  close.style.display = "none";
});

//dymamic projects
let projectList = [
  {
    img: "./images/p2.png",
    title: "Pure Aura 電商購物平台",
    des: "Vite 整合 Vue 專案，主題發想、架構規劃、畫面構思與前後台切版串接實作",
    link: "https://peihsuanlai.github.io/pure-aura/#/",
  },
  {
    img: "./images/p3.png",
    title: "美食糾察隊",
    des: "網站架構規劃、線稿繪製、Figma 設計稿製作與切版製作",
    link: "https://foodies-team.github.io/foodies/index.html",
  },
  {
    img: "./images/p1.png",
    title: "7tao 活動售票網",
    des: "RWD 網站切版實作，具視差滾動與輪播效果",
    link: "https://peihsuanlai.github.io/7tao/",
  },
  {
    img: "./images/p4.jpg",
    title: "Meal Recipe",
    des: "串接 Meals DB 獲得餐點資訊，可搜尋特定餐點食譜或隨機獲得餐點食譜",
    link: "https://peihsuanlai.github.io/meal-recipe/",
  },
  {
    img: "./images/p5.jpg",
    title: "圖片搜尋網",
    des: "串接 Pexels API 獲取圖庫資源，可搜尋下載高畫質圖片",
    link: "https://peihsuanlai.github.io/images-for-inspiration/",
  },
  {
    img: "./images/p6.jpg",
    title: "Team Member Allocation",
    des: "根據匯入資料進行動態調整，能更清楚掌握團隊成員的調動",
    link: "https://peihsuanlai.github.io/teammember-allocation/",
  },
];

window.addEventListener("load", () => {
  let projects = document.querySelector(".projects");
  projects.innerHTML = "";

  projectList.forEach((projectContent) => {
    let singleProject = document.createElement("article");
    singleProject.classList.add("project");
    singleProject.innerHTML = ` 
    <img src="${projectContent.img}" alt="project-screenshot">
<div class="project-shadow">
  <h4>${projectContent.title}</h4>
  <p>${projectContent.des}</p>
  <a href=${projectContent.link}><i class="fa fa-link"></i></a>
</div>`;
    projects.appendChild(singleProject);
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
