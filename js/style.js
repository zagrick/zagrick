let n = 800;
let r = 120;

function main() {
  if (n <= 300) {
    $(".loader").css("color", "#ffc815");
  }
  if (n >= 400 && n <= 800) {
    $(".loader").css("color", "#a3cd3b");
  }
  if (n >= 900) {
    $(".loader").css("color", "#0093d7");
  }
  if (r > 180) {
    r = 180;
  }
  if (n >= 1200) {
    n = 1100;
  }
}

$(".checkbox__text").on("click", function () {
  if ($(this).hasClass("noActive")) {
    main();
    $(this).removeClass("noActive").addClass("active");
    $(".loader").html((n -= 100));
    $(".arrow").css("transform", "rotate(" + (r -= 15) + "deg)");
    return;
  }
  main();
  $(this).removeClass("active").addClass("noActive");
  $(".loader").html((n += 100));
  $(".arrow").css("transform", "rotate(" + (r += 15) + "deg)");
});
