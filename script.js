(function() {
  $(function() {
    var nav;
    nav = {
      consult: function() {
        $('main section').fadeOut();
        return $('main section:nth-child(2)').delay(400).fadeIn();
      },
      reading: function() {
        $('main section').fadeOut();
        return $('main section:nth-child(3)').delay(400).fadeIn();
      },
      back: function() {
        $('main section').fadeOut();
        return $('main section:nth-child(1)').delay(400).fadeIn();
      }
    };
    $(document).on('click', '.consult', function() {
      return nav.consult();
    });
    $(document).on('click', '.reading', function() {
      return nav.reading();
    });
    return $(document).on('click', '.back', function() {
      return nav.back();
    });
  });

}).call(this);
