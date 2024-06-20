// script.js
gsap.registerPlugin(ScrollTrigger); 

gsap.from(".navbarContainer", { y: -300, duration: 2 });

gsap.fromTo('.home-animation',{
opacity:0,
y:-180
},{
duration:2,
opacity:1,
y:0,
delay:.2,
stagger:{
    amount:.2,
    from:"random",
}
})
gsap.fromTo('.home-banner-text',{
    opacity: 0
    
},{
duration:5,
opacity:1,
x:-100,
})
gsap.fromTo('.buttonFilled',{
    x:-480,
    opacity:0
},{
    opacity:1,
    duration:5,
    x:0,
    ease:'power3.out',
    // onComplete:function(){
    //     console.log("completed");
    // }
})

gsap.to('.test', {
    duration: 2,        // Duration of the rotation
    rotationX: 360,     // Rotate 360 degrees along the y-axis
    repeat: -1,         // Repeat indefinitely
    repeatDelay: 2,     // Delay before repeating the animation
    yoyo: true,         // Reverses the animation
    ease: 'power2.inOut' // Easing function
  });
  gsap.to('.oppo', {
    duration: 0.5,       // Duration of the heartbeat pulse
    scale: 1.1,          // Scale up to 1.2 times the original size
    repeat: -1,          // Repeat indefinitely
    yoyo: true,          // Reverse the animation to create a pulse effect
    ease: 'power1.inOut',// Easing function for smooth animation
    repeatDelay: 0.5     // Delay between each pulse
  });


  const trigger = ScrollTrigger.create({
    trigger: '.home-container03', // Element to watch for visibility
    start: "top bottom", // Start animation when container enters viewport from bottom
    end: "bottom top", // End animation when container leaves viewport from top
    // once: true, // Play animation only once per page load
    onEnter: () => {
      gsap.fromTo(".featuresCard:nth-child(1)",{x:-400}, { x: 0,opacity: 1, duration: 3, ease: "power3.out" })
      gsap.fromTo(".featuresCard:nth-child(2)",{x:400}, { x: 0,opacity: 1, duration: 3, ease: "power3.out" })
      gsap.fromTo(".featuresCard:nth-child(3)",{x:-400}, { x: 0,opacity: 1, duration: 3, ease: "power3.out" })
      gsap.fromTo(".featuresCard:nth-child(4)",{x:400}, { x: 0,opacity: 1, duration: 3, ease: "power3.out" })
    }
  });
