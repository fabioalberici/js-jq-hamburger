var menuAperto = $('.header-right > a');
var menuChiuso = $('.hamburger-menu a.close');
var menu = $('.hamburger-menu');



//prendiamo il menu e l'apriamo
$(menuAperto).click(
  function() {
    $(menu).addClass('active');
  }
);


//chiudiamo il menu

$(menuChiuso).click (
  function () {
    $(menu).removeClass('active');
  }
);
