(function (window, document, $) {
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
})(window, document, jQuery);