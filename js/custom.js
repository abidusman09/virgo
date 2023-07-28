/*=============== sticky-header ===============*/
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }
});
/*=============== search open ===============*/

$(document).ready(function () {
  $(".hdr-srch").on("click", function (event) {
    event.stopPropagation();
    $(".hder-srch-area").slideToggle();
  });
  $(".hder-srch-area").on("click", function (event) {
    event.stopPropagation();
  });
});

$(document).on("click", function () {
  $(".hder-srch-area").slideUp();
});

/*=============== humburger menu open ===============*/
$(document).ready(function () {
  $(".humburger").click(function () {
    $(".navigation").toggleClass("show-mobile-menu");
    $(".menu").toggleClass("menu-hidden");
    $(".close").toggleClass("d-block");
    $(".nv-open-bg").toggleClass("d-block");
  });
  $(".close").click(function () {
    $(".navigation").removeClass("show-mobile-menu");
    $(".menu").removeClass("menu-hidden");
    $(".nv-open-bg").removeClass("d-block");
  });
  $(".nv-open-bg").click(function () {
    $(".navigation").removeClass("show-mobile-menu");
    $(".menu").removeClass("menu-hidden");
    $(".nv-open-bg").removeClass("d-block");
  });
  $(".dropdown").click(function () {
    $(".navigation ul li ul").slideToggle();
  });
});

/*=============== wow animation ===============*/
new WOW().init();

/***counter****/
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

/*=============== data table ===============*/
// new DataTable('#example');

/*=============== data table  for tab view===============*/
$(document).ready(function () {
  $(".example-tab1-dt").DataTable({
    responsive: true,
  });

  $(".example-tab2-dt").DataTable({
    responsive: true,
  });

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});

/*=============== filter-area-open ===============*/
$(document).ready(function () {
  $("#filter-clk").on("click", function (event) {
    event.stopPropagation();
    $(".filter-area").slideToggle();
  });
  $(".filter-area").on("click", function (event) {
    event.stopPropagation();
  });
});

$(document).on("click", function () {
  $(".filter-area").slideUp();
});

$("#filter-clk-2").on("click", function (event) {
  event.stopPropagation();
  $(".filter-area").slideToggle();
});
$(".filter-area").on("click", function (event) {
  event.stopPropagation();
});

$(document).on("click", function () {
  $(".filter-area").slideUp();
});
/*=============== load more ===============*/
$(document).ready(function () {
  $(".load-mr-btn").click(function () {
    $(this).addClass("d-none");
    $(".load-ls-btn").addClass("d-inline-block");
    $(".load-ls-btn").removeClass("d-none");
    $(".product-hide").slideToggle(300);
  });
  $(".load-ls-btn").click(function () {
    $(this).addClass("d-none");
    $(".load-mr-btn").addClass("d-inline-block");
    $(".load-mr-btn").removeClass("d-none");
    $(".product-hide").slideToggle(300);
  });
});
/*=============== view-btn-open ===============*/
$(document).ready(function () {
  $(".view-btn").on("click", function (event) {
    event.stopPropagation();
    $(".v-outer", this).slideToggle();
  });
  $(".v-outer", this).on("click", function (event) {
    event.stopPropagation();
  });
});

$(document).on("click", function () {
  $(".v-outer", this).slideUp();
});
/*=============choose a game===============*/
// JavaScript code to handle smooth scrolling to the target section
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the button and the target section
  const scrollToSectionButton = document.getElementById("scrollToSectionButton");
  const targetSection = document.getElementById("targetSection");

  // Function to handle button click and scroll smoothly to the target section
  scrollToSectionButton.addEventListener("click", function () {
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
