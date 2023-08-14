// 메뉴 기능
const nav = document.querySelector(".nav");
const btMenu = document.querySelector(".bt-menu");
const navClose = document.querySelector(".nav-close");

// 펼치기
btMenu.addEventListener("click", function(){
    // 클래스를 nav에 추가.
    nav.classList.add("nav-active");
});
// 닫기
navClose.addEventListener("click", function(){
    nav.classList.remove("nav-active");
})
// nav를 벗어나도 없어지게 함.
nav.addEventListener("mouseleave", function(){
    nav.classList.remove("nav-active");
})