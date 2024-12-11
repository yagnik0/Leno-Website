document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu :-

  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Video Modal Popup Window:-

  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // Open Modal when clicked
  videoButton.addEventListener("click", function () {
    modal.style.display = "block";

    // Replace the src attribute with the video URL
    videoPlayer.src =
      "https://www.youtube.com/embed/ciBPvFpti6w?si=4zYvscsHKSVu14H8";

    // Close Modal on close button clicked
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
      videoPlayer.src = "";
    });

    // Close Modal on window clicked
    window.addEventListener("click", function () {
      if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});

// Scrolling Navbar

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
