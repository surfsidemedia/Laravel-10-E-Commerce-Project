$(".filter-btn").click(function () {
  $(".bg-overlay, .category-option").addClass("show");
});
$(".button-close, .bg-overlay").click(function () {
  $(".bg-overlay, .category-option").removeClass("show");
});

var contentwidth = jQuery(window).width();
if (contentwidth < "991") {
  $(".hide-btn").click(function () {
    $(".bg-overlay, .category-option").addClass("show");
  });
  $(".button-close, .bg-overlay").click(function () {
    $(".bg-overlay, .category-option").removeClass("show");
  });
}

$(".hide-btn").click(function () {
  var $this = $(this);
  $this.toggleClass("hide-btn");
  if ($this.hasClass("hide-btn")) {
    $this.text("Hide Filter");
  } else {
    $this.text("Show Filter");
  }
});

if ($(window).width() > "992") {
  $(".hide-btn").on("click", function (e) {
    $(".category-side").toggleClass("show");
    $(".category-product").toggleClass("col-lg-12");
    $(".category-product").toggleClass("col-lg-9");
  });
}

$(".onclick-title h6").click(function () {
  $(this)
    .parent(".onclick-title")
    .toggleClass("show")
    .siblings()
    .removeClass("show");
});

$(".filter-show-button a").click(function () {
  $(".bg-overlay, .top-filter-section").addClass("show");
});
$(".back-btn, .bg-overlay").click(function () {
  $(".bg-overlay, .top-filter-section").removeClass("show");
});

$(document).ready(function () {
  $(".save-details").click(function () {
    $(".save-details").removeClass("show");
    $(this).addClass("show");
  });
});