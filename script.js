// -- ------------------scroll reveal------------------------- --
ScrollReveal({
      //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 100
 });
 ScrollReveal().reveal('.textContainer, .heading',{origin: 'top'} );
 ScrollReveal().reveal('.imgContainer, .imgContainer2, .servicesContainer, .portfolioContainer',{origin: 'bottom'} );
 ScrollReveal().reveal('.textContainer h1',{origin: 'left'} );
 

//   ------------------type js------------------------- 
const typed = new Typed('.element', {
    strings: ['Frontend Developer','Learning ReactJs'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });