$("a").on("click", function() {
  var activeTab = $(this).attr("href");
  $('#card > div').removeClass('flipped after before');
  $(activeTab).addClass('flipped');
  $(activeTab).prevAll('.flipper').addClass('before');
  $(activeTab).nextAll('.flipper').addClass('after');
  return false;
});