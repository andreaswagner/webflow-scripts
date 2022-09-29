import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "power3"});

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
    markers: false,
    trigger: this.parent,
    scrub: true,
   // toggleActions: "play restart play restart",
    onEnter: (elements, triggers) => {
      gsap.to(elements, {opacity: 1, x:0, y:0, scale:1, stagger: 0.15});
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
});
