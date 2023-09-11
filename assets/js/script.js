// Preloader

function PageLoad() {
  $("body").removeClass("hidden");
  TweenMax.to($(".preloader-text"), 1, {
    force3D: true,
    opacity: 1,
    y: 0,
    delay: 0.2,
    ease: Power3.easeOut,
  });

  var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 500) % 50) * 70;

  // Percentage Increment Animation
  var PercentageID = $("#precent"),
    start = 1,
    end = 100,
    durataion = time;
  animateValue(PercentageID, start, end, durataion);

  function animateValue(id, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

    var timer = setInterval(function () {
      current += increment;
      $(obj).text(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  // Fading Out Loadbar on Finised
  setTimeout(function () {
    TweenMax.to($(".percentage, .inner"), 0.7, {
      force3D: true,
      opacity: 0,
      yPercent: -101,
      ease: Power3.easeInOut,
    });
    TweenMax.to($(".preloader-wrap"), 0.7, {
      force3D: true,
      yPercent: -150,
      delay: 0.2,
      ease: Power3.easeInOut,
    });
  }, time);
}
$(document).ready(function () {
  // preloder
  PageLoad();

  // change-navigation-color
  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $(".navbar").addClass("nav__color__change");
    } else {
      $(".navbar").removeClass("nav__color__change");
    }
  });

  // Smooth scrolling
  var scrollLink = $(".scroll");
  scrollLink.click(function (e) {
    let elem = $(this.hash);
    if (elem.length) {
      e.preventDefault();
      $("body,html").animate(
        {
          scrollTop: elem.offset().top,
        },
        1000
      );
    }
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // service slider
  $(".service__slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  // skill count
  $(".skill__progress").waypoint(
    function () {
      $(".progress-value span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 3000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      $(".skill__progress_item").addClass("js-animation");
      this.destroy();
    },
    { offset: "80%" }
  );

  // Testimonial slider
  $(".testimonial__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  // Modal Popup
  $(".popup-button").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  var portfolioGrid = $(".portfolio-item-grid").masonry({
    itemSelector: ".portfolio-item",
  });

  portfolioGrid.imagesLoaded().progress(function () {
    portfolioGrid.masonry("layout");
  });

  // blob animation
  var tl = new TimelineMax({
    yoyo: true,
    repeat: -1,
  });
  tl.to(".blob", 3, {
    attr: {
      d:
        "M470.3 133c45.8 42.5 75.3 104.8 60.3 152-15 47.3-74.4 79.6-120.2 110.7-45.8 31.2-78.1 61.3-116.5 67.4-38.4 6.1-83-11.7-110.2-42.8-27.1-31.2-36.9-75.8-44.7-128.1-7.8-52.3-13.5-112.4 13.6-154.9 27.2-42.5 87.3-67.4 148.5-68.5 61.1-1 123.4 21.7 169.2 64.2z",
    },
  })
    .to(".blob", 3, {
      attr: {
        d:
          "M452.9 141.3c41.2 47 67.6 102.8 56.3 147.4-11.3 44.5-60.4 77.8-101.6 120.6-41.1 42.8-74.4           95.3-117.3 104.9-42.9 9.7-95.4-23.4-122.1-66.2-26.7-42.9-27.4-95.4-32.6-153.2-5.2-57.7-14.8-120.7 11.9-167.7 26.6-47 89.6-78 149-74.5 59.4 3.5 115.2 41.7 156.4 88.7z",
      },
    })
    .to(".blob", 3, {
      attr: {
        d:
          "M423.5 172.8c30.2 33.9 43.8 80.5 42.9 126.3-.9 45.7-16.5 90.5-46.7 113.1-30.1 22.7-74.9 23.3-124.8 28.3-49.8 5.1-104.7 14.7-146.6-8-41.8-22.7-70.6-77.6-57.8-119.8 12.7-42.2 66.9-71.6 108.7-105.5 41.9-33.8 71.3-72 109.4-80.6 38.1-8.6 84.7 12.4 114.9 46.2z",
      },
    })
    .to(".blob", 3, {
      attr: {
        d:
          "M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z",
      },
    });
});





// Script for handling video modal in the hero section

$(document).ready(function() {
  
  // Gets the video src from the data-src on each button
  
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  
    
    
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
      
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  
  })
    
  
  
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      callPlayer('yt-player', 'stopVideo');
  }) 
  


  // Phone number restrictions in form

  const phoneNumberInput = document.getElementById("phoneNumber");
  
      phoneNumberInput.addEventListener("input", function (event) {
          // Remove any non-numeric characters and limit the length to 12 characters
          const formattedPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 12);
  
          // Format the phone number as XXX-XXX-XXXX
          const formatted = formattedPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  
          // Update the input value with the formatted phone number
          event.target.value = formatted;
      });
  
      phoneNumberInput.addEventListener("keydown", function (event) {
          // Allow only numeric digits, backspace, and dash (-)
          if (!(event.key.match(/^\d$/) || event.key === "Backspace" || event.key === "-")) {
              event.preventDefault();
          }
      });
    });


    $(document).ready(function() {
      $('.logo-carousel').slick({
        slidesToShow: 5,
        speed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
		    cssEase: 'linear',
        arrows: true,
        infinite: true,
        centerMode: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    });



    function loadYouTubeVideo() {
      const videoId = "VIDEO_ID"; // Replace with your actual video ID
      const player = new YT.Player("youtube-video", {
        videoId: videoId,
        events: {
          // You can add event handlers here if needed
        },
      });
    }
  
    // Function to stop the YouTube video
    function stopYouTubeVideo() {
      const player = document.getElementById("youtube-video");
      player.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  
    // Listen for the modal close event
    const modal = document.getElementById("video-modal");
    const button = document.getElementById('modal-button');
    const closeButton = document.querySelector(".close-modal");
    
    modal.addEventListener("click", function(event) {
      if (event.target === modal || event.target === closeButton) {
        stopYouTubeVideo();
        modal.style.display = "none";
      }
    });
  
    // Load the YouTube video when the modal is opened
    modal.addEventListener("show.bs.modal", function () {
      loadYouTubeVideo();
    });

    button.addEventListener("click", openModal);

    function openModal() {
      modal.style.display = "block";
    }