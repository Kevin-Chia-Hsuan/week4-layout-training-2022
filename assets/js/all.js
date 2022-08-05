"use strict";

$(document).ready(function (event) {
  var $li = $('.glasses-header .tab-menu li');
  $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.glassesTab-inner').hide();
  $li.click(function (event) {
    /*取消預設行為，也就是取消點擊連結後連去該網頁的行為*/
    event.preventDefault();
    $($(this).find('a').attr('href')).show().siblings('.glassesTab-inner').hide();
    $(this).addClass('active').siblings('.active').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
