/* ==========================================
   VH4 Aerospace
   Mission Controller v1
========================================== */

const rocket = document.querySelector(".rocket");

const hero = document.querySelector(".hero");

let lastScroll = 0;

window.addEventListener("scroll", ()=>{

    const scroll =
        window.pageYOffset;

    const max =
        document.body.scrollHeight -
        window.innerHeight;

    const progress =
        scroll / max;

    /* ----------------------------
       Rocket Lift
    ----------------------------- */

    rocket.style.transform =
        `translateY(${-progress*600}px)
         rotate(${progress*12}deg)`;

    /* ----------------------------
       Hero Fade
    ----------------------------- */

    hero.style.opacity =
        1-progress*0.6;

});


/* ==========================================
   Smooth Reveal
========================================== */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.15
});

document.querySelectorAll(".section,.card")
.forEach(el=>observer.observe(el));


/* ==========================================
   Animated Numbers
========================================== */

const counters =
document.querySelectorAll(".card h2");

let started=false;

window.addEventListener("scroll",()=>{

if(started) return;

const trigger =
document.querySelector(".stats")
.getBoundingClientRect().top;

if(trigger<window.innerHeight-120){

started=true;

animate();

}

});


function animate(){

animateCounter(
counters[0],
120,
" km");

animateCounter(
counters[1],
2.7,
" min");

}

function animateCounter(el,target,suffix){

let current=0;

const step=
target/80;

const timer=setInterval(()=>{

current+=step;

if(current>=target){

current=target;

clearInterval(timer);

}

if(target<10){

el.innerHTML=
current.toFixed(1)+suffix;

}else{

el.innerHTML=
Math.floor(current)+suffix;

}

},20);

}


/* ==========================================
   Star Twinkle
========================================== */

setInterval(()=>{

document.getElementById("stars")
.style.opacity=
0.75+Math.random()*0.2;

},1800);


/* ==========================================
   Navbar Highlight
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=
sec.offsetTop-150;

if(scrollY>=top){

current=sec.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/* ==========================================
MISSION TIMELINE
========================================== */

const timelineRocket =
document.getElementById("timelineRocket");

const markers =
document.querySelectorAll(".marker");

window.addEventListener("scroll",()=>{

const maxScroll =
document.body.scrollHeight-
window.innerHeight;

const progress =
window.scrollY/maxScroll;

const timelineHeight =
window.innerHeight*.82;

const y =
timelineHeight*(1-progress);

const x =
Math.sin(progress*Math.PI)*42;

timelineRocket.style.transform=
`translate(${x}px,${y}px)
 rotate(${-35+progress*70}deg)`;


/* Marker Highlight */

markers.forEach(m=>m.classList.remove("active"));

if(progress<.15){

document.querySelector(".launch").classList.add("active");

}

else if(progress<.28){

document.querySelector(".maxq").classList.add("active");

}

else if(progress<.42){

document.querySelector(".cutoff").classList.add("active");

}

else if(progress<.60){

document.querySelector(".apogee").classList.add("active");

}

else if(progress<.72){

document.querySelector(".zerog").classList.add("active");

}

else if(progress<.90){

document.querySelector(".entry").classList.add("active");

}

else{

document.querySelector(".landing").classList.add("active");

}

});
