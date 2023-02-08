var menuOpen = document.querySelector(".box__menu");
var menuClose = document.querySelector(".close__menu");

menuToOpen = gsap.timeline();

menuToOpen.to(".md__menu", 0.1, {
    opacity: 1,
    display: "block",

    ease: Power2.easeInOut,
}, "start")

menuToOpen.to(".menu__body", 0.3, {
    opacity: 1,
    display: "block",
    ease: Power2.easeInOut,
    width: "750px",
}, "start")

const mq = window.matchMedia("(max-width: 620px)");

if (mq.matches) {

    menuToOpen.to(".menu__body", 1, {
        opacity: 1,
        display: "block",
        ease: Power2.easeInOut,
        x: 0,
        y: 0,
        Height: "100vh",
        width: "100vw",
    }, "start")

}


menuToOpen.reverse();

menuOpen.addEventListener("click", function () {
    menuToOpen.reversed(!menuToOpen.reversed());
});

menuClose.addEventListener("click", function () {
    menuToOpen.reversed(!menuToOpen.reversed());
});


    let tl = gsap.timeline();

    tl.to('.loading__center', 1, {
        x: "-100%",
        delay:5,
        display:'none',
        ease: Expo.easeInOut,
    })

    tl.from(".box__menu", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");
    
  

    tl.from(".navmenu", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");
    

    tl.from(".a1__logo", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");

    tl.from(".chapter ", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");

    tl.from(".title__h1 ", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");

    tl.from(".video__promotion ", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");

    tl.from(".bg__btn", .5, {
        y: -50,
     ease: Expo.easeInOut,
        display:'none',
        opacity: 0,
    },"-=0.3");

    tl.from(".solo__leveling", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");

    tl.from(".p3__item1", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");
    
    tl.from(".p3__item2", .5, {
        y: -50,
     ease: Expo.easeInOut,
        opacity: 0,
    },"-=0.3");
    
    tl.from(".comp__hero", .5, {
        opacity: 0,
     ease: Expo.easeInOut,
    },"-=0.3");
    

   


    if (window.innerWidth > 560) {
        tl.to(".particle-effect", .3, {
            opacity: 1,
            ease: Linear.easeNone,
            x: 10,
        });
    
        tl.to("#scalle", .3, {
            attr: { scale: 0.0 },
            ease: Power2.easeInOut,
        });
    
        tl.to(".smoke__blue", 2, {
            ease: Power2.easeInOut,
            opacity: 1,
        });

    } else {
        tl.to(".particle-effect", .3, {
            ease: Linear.easeNone,
            opacity: 1,
            x: 10,
        });
    
        tl.to("#scalle", .3, {
            ease: Power2.easeInOut,
            attr: { scale: 0.0 },
        });
    
        tl.to(".smoke__blue", .5, {
            ease: Power2.easeInOut,
            opacity: 1,
        });
    }
    
 

 

    
    
    









const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".menu__nav_link").forEach((el) => {
    el.onmouseover = (event) => {
        let iteration = 0;
        let interval = null;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
});




/*
const cursorInner = document.querySelector(".cursor__inner");
const cursorOuter = document.querySelector(".cursor__outer");

document.addEventListener('mousemove', e => {
    cursorInner.style.top = e.pageY + 'px';
    cursorInner.style.left = e.pageX + 'px';

    cursorOuter.style.top = e.pageY + 'px';
    cursorOuter.style.left = e.pageX + 'px';
})*/

function startAnimation() {
    $(document).ready(function () {

        let loading = $('.loading').wrapInner('<div></div>'),
            min = 20,
            max = 70,
            minMove = 10,
            maxMove = 20;

        startAnimation(loading);

        loading.on('animationend webkitAnimationEnd oAnimationEnd', 'span:last-child', e => {
            startAnimation(loading);
        });

        //Set CSS vars & generate spans if needed
        function setCSSVars(elem, min, max, minMove, maxMove) {
            let width = Math.ceil(elem.width()),
                text = elem.text();
            for (let i = 1; i < width; i++) {
                let num = Math.floor(Math.random() * (max - min + 1)) + min,
                    numMove = Math.floor(Math.random() * (maxMove - minMove + 1)) + minMove,
                    dir = (i % 2 == 0) ? 1 : -1,
                    spanCurrent = elem.find('span:eq(' + i + ')'),
                    span = spanCurrent.length ? spanCurrent : $('<span />');
                span.css({
                    '--x': i - 1 + 'px',
                    '--move-y': num * dir + 'px',
                    '--move-y-s': ((i % 2 == 0) ? num * dir - numMove : num * dir + numMove) + 'px',
                    '--delay': i * 10 + 'ms'
                });
                if (!spanCurrent.length) {
                    elem.append(span.text(text));
                }
            }
        }

        //Start animation
        function startAnimation(elem) {
            elem.removeClass('start');
            setCSSVars(elem, min, max, minMove, maxMove);
            void elem[0].offsetWidth;
            elem.addClass('start');
        }

    });

}

startAnimation()


