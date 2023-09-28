//MENU TOGGLE
var menuBar = this.document.getElementById("bar-icon");
var menuTimes = this.document.getElementById("times-icon");
var navbar = this.document.querySelector(".navbar-menu");

menuBar.addEventListener("click", function(){
    navbar.style.transform = "translateY(0)"
})

menuTimes.addEventListener("click", function(){
    navbar.style.transform = "translateY(-100%)"
})

// SET FOOTER YEAR
let curYear = document.getElementById('year');
curYear.innerHTML = new Date().getFullYear();

//ANIMATION FOR ARTICLE HEADER
let articleHeader = document.querySelectorAll(".article-header");

articleHeader.forEach(item => {
    item.addEventListener("mouseover", function(){
        item.firstElementChild.style.transform = 'translateX(0)';
        item.lastElementChild.style.transform = 'translateX(0)';
    })
})

articleHeader.forEach(item=>{
    item.addEventListener("mouseout", function(){
        item.firstElementChild.style.transform = 'translateX(-100%)';
        item.lastElementChild.style.transform = 'translateX(100%)';
    })
})

//STICKY HEADER
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.parentElement.classList.toggle("sticky", this.window.scrollY > 200);
})

