//color bg of each box based on random picked color

$(".box").each(function () {
  console.log("this is jquery");
  $(this).css(
    "background-color",
    "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
  );
});

function changeColors() {
   return location.reload();
};
