$(".start ul li").click(function() {
  $(this).find(".start0").css("display", "none")
  $(this).prevAll().find(".start0").css("display", "none")
  $(this).nextAll().find(".start0").css("display", "block")
  const texts = ["非常差", "差", "一般", "好", "非常好"]
  $(".start ul .text").html(texts[$(this).index()])
})