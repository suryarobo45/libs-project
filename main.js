$(document).ready(function () {
  $(".hamburger").click(function () {
    console.log("Hamburger clicked");

    // Check if .blankbox is currently animating
    if ($(".blankbox").is(":animated")) {
      console.log("Animation in progress, skipping");
      return;
    }

    // Toggle the 'active' class on the hamburger
    console.log("Toggling active class");
    $(".hamburger").toggleClass("active");
    
    // Toggle the 'blankbox' to slide open or close
    console.log("Toggling blankbox");
    $(".blankbox").stop().slideToggle(900, function () {
      console.log("SlideToggle complete");
    });
  });
});













// $(document).ready(function () {
//   $("#hamburger.hamburger").click(function () {
//     $(".hamburger").toggleClass("active");
//     $(".blankbox").toggle(500)
//   });
// });

  document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('horizontal-scroll-container');

    if (container) {
        container.addEventListener('wheel', function(e) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });
    }
});
document.getElementById('quickviewlink').addEventListener('click',function(event){
  event.preventDefault();
  setTimeout(function(){
    window.location.reload();
  },3000);
});


  function subscribeNow() {
    var button = document.querySelector('.subscribe-btn');
    button.classList.add('clicked');
    
    // Add your subscription logic or redirect code here
    alert('Subscription logic goes here!');
  }
  
  AOS.init();

  

  

  



 
  