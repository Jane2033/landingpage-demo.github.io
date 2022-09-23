        gsap.registerPlugin(ScrollTrigger);

        import LocomotiveScroll from 'locomotive-scroll';

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            smooth: true,
            lerp: 0.08,
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#smooth-scroll", {
            scrollTop(value) {
              return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
              return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            pinType: document.querySelector("#smooth-scroll").style.transform ? "transform" : "fixed",
        });


        var tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
              trigger: ".pin-wrapper",
              scroller: "#smooth-scroll",
              scrub: true,
              pin: true,
              start: "top top",
              end: "+=100%",
              onUpdate() {
                console.log("Update")
              }
            }
          });
        
        tl.from("#ribbon1", {
            scale: 0.3, 
        })
          .from("#ribbon2", {
            x: -400,
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
/*  

        const vw = (coef) => window.innerWidth * (coef / 100);
        const vh = (coef) => window.innerHeight * (coef / 100);

        const heroScroller = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: ".hero-header.hw1",
            scroller: ".smooth-scroll",
            pin: ".pin-wrapper",
            start: "top 10%",
            scrub: true,
            end: `${vh(100)}`,
        },
        });

        heroScroller
        .to(
            [".hero-header.hw1", ".hero-header.hw3"],
            {
            scale: 2,
            y: vh(150),
            xPercent: -150,
            },
            "heroScroll"
        )
        .to(
            ".hero-header.hw2",
            {
            scale: 2,
            y: vh(150),
            xPercent: 150,
            },
            "heroScroll"
        )
        .to(
            "#heroImage",
            {
            scaleY: 2.5,
            },
            "heroScroll"
        )
        .to(
            "#heroImage .image",
            {
            scaleX: 2.5,
            xPercent: 50,
            },
            "heroScroll"
        );

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();


gsap.from(".jump", {duration: 1, opacity:0, y: 150});
gsap.from(".circle", {duration: 1, opacity:0, x: -150});
gsap.from(".topright", {duration: 1, opacity:0, x: 150});
gsap.from(".bottomleft", {duration: 1, opacity:0, y: 150});
gsap.from(".title", {duration: 1, opacity:0, y: -150});
gsap.from("header", {duration: 1, opacity:0});



gsap.from(".section-1", {
    scrollTrigger: {
        trigger: '.section-1',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#products", {
    scrollTrigger: {
        trigger: '#products',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-sm", {
    scrollTrigger: {
        trigger: '#ootd-sm',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-1", {
    scrollTrigger: {
        trigger: '#ootd-1',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-2", {
    scrollTrigger: {
        trigger: '#ootd-2',
        start: "25% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-3", {
    scrollTrigger: {
        trigger: '#ootd-3',
        start: "10% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});

gsap.from("#ootd-4", {
    scrollTrigger: {
        trigger: '#ootd-4',
        start: "10% bottom"
    },
    duration: 2, 
    y: 150, 
    opacity: 0
});*/