$(function () {
  //事前に要素のopacityを0(= 透明度100%)にしておく
  $('.fadein-up').css('opacity', 0);

  //要素が画面に入ったらopacityを1(= 透明度0%・不透明)にして表示する
  $('.fadein-up').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).animate(
        {
          opacity: 1.0,
        },
        1000
      );
    }
  });
});
z;
