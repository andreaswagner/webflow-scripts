import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "power3"});


  gsap.set(".b-card", {y: -100});

ScrollTrigger.batch(".b-card", {
  //interval: 0.1, // time window (in seconds) for batching to occur. 
  //batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
  // you can also define things like start, end, etc.
});


// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".b-card", {y: 0}));

  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      markers:false,
      trigger: ".a-card-trigger",
      pin: false,   // pin the trigger element while active
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=450", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 5}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
  });

// add animations and labels to the timeline
tl.addLabel("start")
  .from(".a-card:nth-child(1)", {x: -60, autoAlpha: 0})
  .from(".a-card:nth-child(2)", {y: -60, autoAlpha: 0},"<0.1")
  .from(".a-card:nth-child(3)", {x: 60, autoAlpha: 0},"<0.1")
  .from(".a-card:nth-child(4)", {x: -60, autoAlpha: 0},"<0.1")
  .from(".a-card:nth-child(5)", {y: 60, autoAlpha: 0},"<0.1")
  .from(".a-card:nth-child(6)", {x: 60, autoAlpha: 0},"<0.1")

  .addLabel("color")
  .from(".a-card:nth-child(1)", {backgroundColor: "#333"})
  .addLabel("spin")
  .to(".a-card:nth-child(1)", {rotation: 0})
  .addLabel("end");

  /*
  gsap.set($(".a-card:nth-child(1)"), {
    opacity: 0,
    x: -100,
    scale: 1.1,
  });

  gsap.set($(".a-card:nth-child(2)"), {
    opacity: 0,
    y: -100,
    //x: -100,
    scale: 1.1,
  });
  gsap.set($(".a-card:nth-child(3)"), {
    opacity: 0,
    x: 100,
    //x: -100,
    scale: 1.1,
  });

  // gsap.set($(".a-card :nth-child(2)"), {

  //   x: 25,
  // });
  // gsap.set($(".a-card :nth-child(3)"), {

  //   x: 25,
  // });

  ScrollTrigger.batch($(".a-card"), {
    markers: true,
    trigger: ".a-card-trigger",
    scrub: true,
   // toggleActions: "play restart play restart",
    onEnter: (elements, triggers) => {
      gsap.to(elements, {opacity: 1, x:0, y:0, scale:1, stagger: 0.15,ScrollTrigger:});
      console.log(elements.length, "elements entered");
    },
    onLeave: (elements, triggers) => {
      gsap.to(elements, {opacity: 0, x:0, y:0, scale:1,  stagger: 0.15});
      console.log(elements.length, "elements left");
    }
  //   onEnter: (batch) => {
  //     batch.forEach((card.children(), index) =>
  //       gsap.to(card, {
  //         ease: Power4.easeOut,
  //         opacity: 1,
  //         x: 0,
  //         y: 0,
  //         scale: 1,
          
  //         stagger: {
            
  //           amount: 0.2,
  //           grid: "auto",
  //           from: "0", //[1, 0.5] would be right center, [0.5, 1] would be center bottom, etc. Any decimal will work!
  //         },
  //         delay: index * 0.2,
  //       })
  //     );
  //   },
    
  });
  */
});
