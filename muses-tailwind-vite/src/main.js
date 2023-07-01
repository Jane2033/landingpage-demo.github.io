let bgImage = document.querySelector('#bgImage');

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(bgImage,
    {
        clipPath: 'circle(5% at 77% 40%)'
    },
    {
        clipPath: 'circle(75% at 50% 50%)',
        ease: 'none',
        scrollTrigger: {
            trigger: bgImage,
            scrub: 1,
            start: 'top center',
            end: 'top center-=300',
        }
    },
)