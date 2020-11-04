const target = document.getElementById("target");
const menuclose = document.getElementById("menuclose");
const koumoku1 = document.getElementById("koumoku1");
const koumoku2 = document.getElementById("koumoku2");
const koumoku3 = document.getElementById("koumoku3");
const koumoku4 = document.getElementById("koumoku4");
const koumoku5 = document.getElementById("koumoku5");
const koumoku6 = document.getElementById("koumoku6");
const koumoku10 = document.getElementById("koumoku10");
const koumoku20 = document.getElementById("koumoku20");
const koumoku30 = document.getElementById("koumoku30");
const koumoku40 = document.getElementById("koumoku40");
const koumoku50 = document.getElementById("koumoku50");
const koumoku1close = document.getElementById("koumoku1close");
const koumoku2close = document.getElementById("koumoku2close");
const koumoku3close = document.getElementById("koumoku3close");
const koumoku4close = document.getElementById("koumoku4close");
const koumoku5close = document.getElementById("koumoku5close");
const koumoku6close = document.getElementById("koumoku6close");
const moku10 = document.getElementById("moku10");
const moku20 = document.getElementById("moku20");
const moku30 = document.getElementById("moku30");
const moku40 = document.getElementById("moku40");
const moku50 = document.getElementById("moku50");

const back = document.getElementById("back");
const n = 200;
const topback = document.getElementById("topback");
const huwamenu = document.getElementById("huwamenu");

window.addEventListener("scroll", function() {
    if(scrollY > n) {
        topback.classList.add("scrollanime");
        huwamenu.classList.add("scrollanime");
    } else {
        topback.classList.remove("scrollanime");
        huwamenu.classList.remove("scrollanime");
    }
});

topback.addEventListener("click", function() {
   anime({                               //animeライブラリここから
        targets: "html, body",
        scrollTop: 0,
        dulation: 600,
        easing: 'easeOutCubic',
    });  
});

huwamenu.addEventListener("click", () => {
    menuclose.classList.add("mopen");
        target.textContent = "閉じる";
        target.classList.add("poji");
        back.classList.add("backy");
});

target.addEventListener("click", function() {
    if(menuclose.className === "mclose") {
        menuclose.classList.add("mopen");
        target.textContent = "閉じる";
        target.classList.add("poji");
        back.classList.add("backy");
        
    } else {
        menuclose.classList.remove("mopen");
        target.textContent = "menu";
        target.classList.remove("poji");
        back.classList.remove("backy");
    }
  });  
back.addEventListener("click", function() {
    menuclose.classList.remove("mopen");
        target.textContent = "menu";
        target.classList.remove("poji");
        back.classList.remove("backy"); 
});

koumoku1.addEventListener("click", function() {
   koumoku1close.classList.toggle("kopen"); 
});
koumoku2.addEventListener("click", function() {
   koumoku2close.classList.toggle("kopen"); 
});
koumoku3.addEventListener("click", function() {
   koumoku3close.classList.toggle("kopen"); 
});
koumoku4.addEventListener("click", function() {
   koumoku4close.classList.toggle("kopen"); 
});
koumoku5.addEventListener("click", function() {
   koumoku5close.classList.toggle("kopen"); 
});
koumoku6.addEventListener("click", function() {
   koumoku6close.classList.toggle("kopen"); 
});
koumoku10.addEventListener("click", function() {
   moku10.classList.toggle("m20"); 
});
koumoku20.addEventListener("click", function() {
   moku20.classList.toggle("m20"); 
});
koumoku30.addEventListener("click", function() {
   moku30.classList.toggle("m20"); 
});
koumoku40.addEventListener("click", function() {
   moku40.classList.toggle("m20"); 
});
koumoku50.addEventListener("click", function() {
   moku50.classList.toggle("m20"); 
});