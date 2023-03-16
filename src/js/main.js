/******************************************************************************
 * Navbar
 ******************************************************************************/
const navMenu = document.getElementById("tl-nav-menu");
const navButtonToggle = document.getElementById("tl-nav-button-toggle");
const navClose = document.getElementById("tl-nav-menu-close");
const navMenuItemLink = document.querySelectorAll(".tl-nav-menu-item-link")

/////////////////////////////////////////////////////////////
/// Toggle menu
navButtonToggle.addEventListener("click", ()=>{
    if (navMenu.classList.contains("show-menu")) {
        navMenu.classList.remove("show-menu");
    } else {
        navMenu.classList.add("show-menu");
    }
});

/////////////////////////////////////////////////////////////
/// Close menu
navClose.addEventListener("click", ()=>{
    navMenu.classList.remove("show-menu");
});
navMenuItemLink.forEach(link => {
    link.addEventListener("click", () => {
        const navMenu = document.getElementById("tl-nav-menu");
        navMenu.classList.remove("show-menu");
    });
});

/////////////////////////////////////////////////////////////
/// Activate link after scrolling
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(currentSection =>{
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 50;
        const sectionId = currentSection.getAttribute("id");

        if ((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
            document.querySelector(".tl-nav-menu a[href*=" + sectionId + "]").classList.add("tl-nav-menu-item-link-active");
        } else {
            document.querySelector(".tl-nav-menu a[href*=" + sectionId + "]").classList.remove("tl-nav-menu-item-link-active");
        }
    })
})

/////////////////////////////////////////////////////////////
/// Dark theme
const themeButton = document.getElementById("tl-nav-button-change-theme");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

/////////////////////////////////////////////////////////////
/// Header not top
window.addEventListener("scroll", () => {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) {
        nav.classList.add("tl-header-not-top");
    } else {
        nav.classList.remove("tl-header-not-top");
    }
});

/******************************************************************************
 * Skills
 ******************************************************************************/
const skillsContent = document.querySelectorAll(".tl-skills-content");
const skillsHeaders = document.querySelectorAll(".tl-skills-head");
skillsHeaders.forEach(skillHeader => {
    skillHeader.addEventListener("click", () => {
        const defaultParentClass = skillHeader.parentNode.className;

        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = "tl-skills-content tl-skills-close";
        }
        
        if (defaultParentClass === "tl-skills-content tl-skills-close") {
            skillHeader.parentNode.className = "tl-skills-content tl-skills-open";
        }
    });
});



//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("Portfolio Swiper is working!")














/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
  }
  window.addEventListener("scroll", scrollUp)



/*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll("[data-target]"),
//       tabContents = document.querySelectorAll("[data-content]")

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {
//     console.log("click disparado")
//     const target = document.querySelector(tab.dataset.target)

//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove("qualification__active")
//     })
//     target.classList.add("qualification__active")

//     tabs.forEach(tab => {
//       tab.classList.remove("qualification__active")
//     })
//     tab.classList.add("qualification__active")
//   })
// })


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    /* mousewheel: true,
    keyboard: true, */
  });






