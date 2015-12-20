(function (window, document, $) {
  // Set nav-bg's height to window's innerHeight.
  var $window = $(window);
  var $header = $('#nav-bg');
  $header.css('height', $window.innerHeight() + 'px');
  $window.on('resize', function () {
    $header.css('height', $window.innerHeight() + 'px');
  });

  // Set .nav-link's height.
  var $links = $('.nav-link');
  var factor = 2;
  var setNavLinkHeight = function () {
    $links.each(function () {
      var $link = $(this);
      var height = $window.innerHeight() / factor;
      $link.css('height', height + 'px')
      .css('line-height', height + 'px');
    });
  };
  setNavLinkHeight();
  $window.on('resize', setNavLinkHeight);

  // Set external anchor targets
  var $anchors = $('a[rel=external]');
  $anchors.each(function () {
    $(this).attr('target', '_blank');
  });

  // jQuery ScrollTo
  var $gotos = $('.goto-btn, .scroll');
  $gotos.each(function () {
    var $this = $(this);
    var $target = $this.attr('data-target');
    $target = $('#' + $target);
    $this.on('click', function (evt) {
      evt.preventDefault();
      $.scrollTo($target, 800);
    });
  });

  // jQuery Parallax Scrolling
  $('#nav-bg').parallax('50%', 0.2);
  $('#menu').parallax('50%', 0.1);
})(window, document, jQuery);