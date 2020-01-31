$(document).ready(function() {
  $(".slider__button--next").on("click", getNext);
  $(".slider__button--prev").on("click", getNext);
});

(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  /*  
  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];

    next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);
  } */
  /*
  function getNext() {
    // TODO
    items[slide].classList.remove("active");
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    items[slide].classList.add("active");
  }
*/
  function getNext() {
    // TODO
    $(".slider__photo")
      .eq(0)
      .removeClass("active");
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    $(".slider__photo")
      .eq(0)
      .addClass("active");
  }

  function getPrev() {
    // TODO
    $(".slider__photo")
      .eq(0)
      .removeClass("active");
    if (slide === 0) {
      slide = items.length - 1;
    } else {
      slide--;
    }
    $(".slider__photo")
      .eq(0)
      .addClass("active");
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
