$(document).ready(function() {
  $(".after").click(function() {
    let html = "<li>  " + $("#userinput").val() + "</li>";
    $("#fruit-list>li")
      .last()
      .after(html);
  });
  $(".append").click(function() {
    let html = "<li>  " + $("#userinput").val() + "</li>";
    $("#fruit-list").append($("#fruit-list>li").first(html));
  });
  $(".befor").click(function() {
    let html = "<li>  " + $("#userinput").val() + "</li>";
    $("#fruit-list>li")
      .first()
      .before(html);
  });
  $(".del").click(function() {
    $("#fruit-list>li")
      .last()
      .remove();
  });
});
