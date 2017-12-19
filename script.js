(function() {
  $(function() {
    var cards, func, nav;
    cards = [
      {
        name: 'carta 1',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'carta 2',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'carta 3',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'carta 4',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'carta 5',
        desc: 'Lorem ipsum dolor sit ammet'
      }
    ];
    nav = {
      consult: function() {
        func.allCards();
        $('main section').fadeOut();
        return $('main section:nth-child(2)').delay(400).fadeIn();
      },
      reading: function() {
        $('main section').fadeOut();
        return $('main section:nth-child(3)').delay(400).fadeIn();
      },
      back: function() {
        $('main section').fadeOut();
        $('main section:nth-child(1)').delay(400).fadeIn();
        return $('main section:nth-child(2) .cards').html('');
      },
      close: function() {
        return $('.modal').fadeOut();
      }
    };
    func = {
      allCards: function() {
        var j;
        j = 0;
        return cards.forEach(function() {
          $('main section:nth-child(2) .cards').append('<div class="card" id="c' + j + '">' + cards[j].name + '</div>');
          return j++;
        });
      },
      seeCard: function($el) {
        $('.modal').fadeIn();
        return $('.modal').html('<h1>' + cards[Number($el.attr('id').slice(1))].name + '</h1><p>' + cards[Number($el.attr('id').slice(1))].desc + '</p><button class="close">Fechar</button>');
      }
    };
    $(document).on('click', '.consult', function() {
      return nav.consult();
    });
    $(document).on('click', '.reading', function() {
      return nav.reading();
    });
    $(document).on('click', '.back', function() {
      return nav.back();
    });
    $(document).on('click', '.close', function() {
      return nav.close();
    });
    return $(document).on('click', '.card', function() {
      return func.seeCard($(this));
    });
  });

}).call(this);
