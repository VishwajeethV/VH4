// ======================================================
// VH4 Aerospace
// script.js
// Part 1
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    //--------------------------------------------------
    // Elements
    //--------------------------------------------------

    const sections = document.querySelectorAll(".panel");

    const dots = document.querySelectorAll(".scroll-dots span");

    const navLinks = document.querySelectorAll("nav a");

    //--------------------------------------------------
    // Add fade class automatically
    //--------------------------------------------------

    sections.forEach(section => {

        section.classList.add("fade");

    });

    //--------------------------------------------------
    // Fade Observer
    //--------------------------------------------------

    const fadeObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.20

    });

    sections.forEach(section=>{

        fadeObserver.observe(section);

    });

    //--------------------------------------------------
    // Active Navigation
    //--------------------------------------------------

    const sectionObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const id = entry.target.id;

            //------------------------------

            navLinks.forEach(link=>{

                link.classList.remove("active");

                if(link.getAttribute("href")==="#" + id){

                    link.classList.add("active");

                }

            });

            //------------------------------

            dots.forEach(dot=>dot.classList.remove("active"));

            sections.forEach((section,index)=>{

                if(section.id===id){

                    if(dots[index]){

                        dots[index].classList.add("active");

                    }

                }

            });

        });

    },{

        threshold:.55

    });

    sections.forEach(section=>{

        sectionObserver.observe(section);

    });

    //--------------------------------------------------
    // Scroll Dots
    //--------------------------------------------------

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            sections[index].scrollIntoView({

                behavior:"smooth"

            });

        });

    });

    //--------------------------------------------------
    // Navbar Smooth Scroll
    //--------------------------------------------------

    navLinks.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target=document.querySelector(

                link.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    //--------------------------------------------------
    // Counter Animation
    //--------------------------------------------------

    const counters=document.querySelectorAll(".counter");

    function animateCounter(counter){

        const finalText=counter.innerText;

        const number=parseInt(finalText);

        if(isNaN(number)) return;

        let value=0;

        const step=Math.max(1,

            Math.ceil(number/80)

        );

        const timer=setInterval(()=>{

            value+=step;

            if(value>=number){

                value=number;

                clearInterval(timer);

            }

            counter.innerText=value+

            (finalText.includes("+")?"+":"");

        },18);

    }

    const counterObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });

    //--------------------------------------------------
    // Progress Bars
    //--------------------------------------------------

    const progressBars=document.querySelectorAll(".value");

    progressBars.forEach(bar=>{

        bar.dataset.width=

        getComputedStyle(bar).width;

        bar.style.width="0px";

    });

    const progressObserver=

    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.transition=

                "width 1.6s ease";

                entry.target.style.width=

                entry.target.dataset.width;

            }

        });

    },{

        threshold:.5

    });

    progressBars.forEach(bar=>{

        progressObserver.observe(bar);

    });

});

// ======================================================
// VH4 Aerospace
// script.js
// Part 1
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    //--------------------------------------------------
    // Elements
    //--------------------------------------------------

    const sections = document.querySelectorAll(".panel");

    const dots = document.querySelectorAll(".scroll-dots span");

    const navLinks = document.querySelectorAll("nav a");

    //--------------------------------------------------
    // Add fade class automatically
    //--------------------------------------------------

    sections.forEach(section => {

        section.classList.add("fade");

    });

    //--------------------------------------------------
    // Fade Observer
    //--------------------------------------------------

    const fadeObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.20

    });

    sections.forEach(section=>{

        fadeObserver.observe(section);

    });

    //--------------------------------------------------
    // Active Navigation
    //--------------------------------------------------

    const sectionObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const id = entry.target.id;

            //------------------------------

            navLinks.forEach(link=>{

                link.classList.remove("active");

                if(link.getAttribute("href")==="#" + id){

                    link.classList.add("active");

                }

            });

            //------------------------------

            dots.forEach(dot=>dot.classList.remove("active"));

            sections.forEach((section,index)=>{

                if(section.id===id){

                    if(dots[index]){

                        dots[index].classList.add("active");

                    }

                }

            });

        });

    },{

        threshold:.55

    });

    sections.forEach(section=>{

        sectionObserver.observe(section);

    });

    //--------------------------------------------------
    // Scroll Dots
    //--------------------------------------------------

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            sections[index].scrollIntoView({

                behavior:"smooth"

            });

        });

    });

    //--------------------------------------------------
    // Navbar Smooth Scroll
    //--------------------------------------------------

    navLinks.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target=document.querySelector(

                link.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    //--------------------------------------------------
    // Counter Animation
    //--------------------------------------------------

    const counters=document.querySelectorAll(".counter");

    function animateCounter(counter){

        const finalText=counter.innerText;

        const number=parseInt(finalText);

        if(isNaN(number)) return;

        let value=0;

        const step=Math.max(1,

            Math.ceil(number/80)

        );

        const timer=setInterval(()=>{

            value+=step;

            if(value>=number){

                value=number;

                clearInterval(timer);

            }

            counter.innerText=value+

            (finalText.includes("+")?"+":"");

        },18);

    }

    const counterObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });

    //--------------------------------------------------
    // Progress Bars
    //--------------------------------------------------

    const progressBars=document.querySelectorAll(".value");

    progressBars.forEach(bar=>{

        bar.dataset.width=

        getComputedStyle(bar).width;

        bar.style.width="0px";

    });

    const progressObserver=

    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.transition=

                "width 1.6s ease";

                entry.target.style.width=

                entry.target.dataset.width;

            }

        });

    },{

        threshold:.5

    });

    progressBars.forEach(bar=>{

        progressObserver.observe(bar);

    });

});
