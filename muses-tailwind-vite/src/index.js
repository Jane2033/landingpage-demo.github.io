import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/Avcc73xqeEtr2uOR/scene.splinecode');

/*
gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    lerp: 0.08,
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });
  
  const vw = (coef) => window.innerWidth * (coef / 100);
  const vh = (coef) => window.innerHeight * (coef / 100);
  
  const heroScroller = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: ".hero-header",
      toggleActions: "restart pause reverse none",
      scroller: ".smooth-scroll",
      pin: true,
      start: "top 10%",
      scrub: true,
      end: `${vh(100)}`,
    },
  });
  
  heroScroller
    .to(
      ".ribbon1",
      {
        y: -vh(150),
        xPercent: -150,
      },
      "heroScroll"
    )
    .to(
      ".ribbon2",
      {
        y: vh(150),
        xPercent: 150,
      },
      "heroScroll"
    )
    .to(
      ".ribbon3",
      {
        y: vh(150),
        xPercent: -150,
      },
      "heroScroll"
    )
    .to(
      ".ribbon4",
      {
        y: vh(150),
        xPercent: -150,
      },
      "heroScroll"
    )
    .to(
      ".ribbon5",
      {
        y: -vh(100),
        xPercent: -150,
      },
      "heroScroll"
    )
    .to(
      ".pin-wrapper",
      {
        y: -100,
      },
      "heroScroll"
    );
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

/*
//新增控制項
var dat = new dat.GUI();
var obj ={
  progress: 0, 
  reset(){  
    timeline.restart();
  },  
  gotoAfterFall(){
    timeline.seek("afterFall");
  }
};  
var pcontroller = dat.add(obj,'progress',0,1,0.001).listen();
pcontroller.onChange((v)=>{
  // console.log(v)
  timeline.progress(v);
  timeline.pause(); 
  
});
dat.add(obj,'gotoAfterFall');
dat.add(obj,'reset');


var timeline = new TimelineMax({
  onUpdate: function(){
    // console.log(timeline.progress())
    obj.progress=timeline.progress();
  }
});

timeline.set("#ribbon1",{
  x: -100,
  y: 0,
  rotation: 35, 
})
.set("#ribbon2",{
  x: -100,
  y: 10,
  rotation: -25, 
}) 
.set("#ribbon3",{
  x: -100,
  y: 20,
  rotation: 12, 
})
.set("#ribbon4",{
  x: -100,
  y: 600,
  rotation: 45, 
})
.set("#ribbon5",{
  x: -100,
  y: 1000,
  rotation: 135, 
})


var clipBodyDrop = TweenMax.from("#body",1.5,{
  opacity: 0,
  ease: Power1.easeInOut
})

timeline.add(clipBodyDrop,0)



timeline.to("#ribbon1",1,{
  x: -100,
  y: 0,
})
.to("#ribbon2",1,{
  x: 0,
  y: 10,
}) 
.to("#ribbon3",1,{
  x: 0,
  y: 20,
})
.to("#ribbon4",1,{
  x: 0,
  y: 600,
})
.to("#ribbon5",1,{
  x: 0,
  y: 1000,
})


timeline.add( TweenMax
.from("text",1,{ 
  opacity: 0,
  ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false})
}) ,2)
 
timeline.add( TweenMax
.staggerFrom(".btn",0.5,{
  scale: 0,
  ease: Elastic.easeOut
},0.5)
      ,1)
 

window.addEventListener("scroll",(evt)=>{
  let currentY = window.scrollY;
  let pageHeight = $("html").height()- window.innerHeight;
  let progressValue = currentY/pageHeight;
  console.log(progressValue);
  timeline.progress(progressValue);
  timeline.pause();
});

*/





