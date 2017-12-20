(function() {
  $(function() {
    var cards, ctrl, func, nav, reading;
    ctrl = [];
    reading = {
      isReading: false,
      numCards: 0,
      cardsClicked: 0,
      cardsReading: []
    };
    cards = [
      {
        name: 'O Bobo',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Mago',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'A Alta Sacerdotisa',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'A Imperatriz',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Imperador',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Hierofanta',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Os Amantes',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'A Carruagem',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Força',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Eremita',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Roda da Fortuna',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Justiça',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Enforcado',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Morte',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Temperança',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Diabo',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'A Torre',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'A Estrela',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'A Lua',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Sol',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Julgamento',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'O Mundo',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Ás de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dois de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Três de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Quatro de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cinco de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Seis de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Sete de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Oito de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Nove de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dez de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Valete de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cavaleiro de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rainha de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rei de Paus',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Ás de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dois de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Três de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Quatro de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cinco de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Seis de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Sete de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Oito de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Nove de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dez de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Valete de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cavaleiro de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rainha de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rei de Copas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Ás de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dois de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Três de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Quatro de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cinco de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Seis de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Sete de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Oito de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Nove de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dez de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Valete de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cavaleiro de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rainha de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rei de Espadas',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Ás de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dois de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Três de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Quatro de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cinco de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Seis de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Sete de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Oito de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Nove de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Dez de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Valete de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Cavaleiro de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rainha de Ouros',
        desc: 'Lorem ipsum dolor sit ammet'
      }, {
        name: 'Rei de Ouros',
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
        reading.isReading = false;
        reading.numCards = 0;
        reading.cardsClicked = 0;
        reading.cardsReading = [];
        $('main section').fadeOut();
        $('main section:nth-child(1)').delay(400).fadeIn();
        $('main section:nth-child(2) .cards').html('');
        return $('main section:nth-child(3)').html('<h1>Leitura</h1> <p class="help"></p> <div class="cards"></div> <button class="shuffle">Embaralhar</button> <button class="back">< Voltar</button>');
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
      },
      rNumber: function() {
        var randy;
        randy = Math.floor(Math.random() * cards.length);
        if (ctrl.length < cards.length) {
          if (ctrl.indexOf(randy) === -1) {
            ctrl.push(randy);
          }
          return func.rNumber();
        }
      },
      shuffle: function() {
        var i, l, len;
        func.rNumber();
        for (l = 0, len = ctrl.length; l < len; l++) {
          i = ctrl[l];
          $('main section:nth-child(3) .cards').append('<div class="card-r" id="c' + i + '"><img src="back.png"></div>');
        }
        return $('.modal').fadeIn().html('<h1>Escolha o tipo de leitura</h1> <button class="read1">Uma carta</button> <button class="read2">Duas cartas</button> <button class="read3">Três cartas</button>');
      },
      numberCards: function($el) {
        reading.isReading = true;
        reading.numCards = Number($el.attr('class').slice(4));
        $('.modal, .shuffle').fadeOut();
        if ($el.attr('class') === 'read1') {
          $('main section:nth-child(3) .help').html('Clique sobre uma carta:');
        }
        if ($el.attr('class') === 'read2') {
          $('main section:nth-child(3) .help').html('Clique sobre duas cartas:');
        }
        if ($el.attr('class') === 'read3') {
          return $('main section:nth-child(3) .help').html('Clique sobre três cartas:');
        }
      },
      choice: function($el) {
        var k;
        reading.cardsClicked++;
        $el.css({
          pointerEvents: 'none'
        });
        if (reading.cardsClicked <= reading.numCards) {
          reading.cardsReading.push(Number($el.attr('id').slice(1)));
          if (reading.numCards === 1) {
            $('main section:nth-child(3) .cards').html('<h2>' + cards[Number($el.attr('id').slice(1))].name + '</h2> <p>' + cards[Number($el.attr('id').slice(1))].desc + '</p>');
          }
          if (reading.numCards > 1) {
            if (reading.numCards === reading.cardsClicked) {
              $('main section:nth-child(3) .cards').html('');
              k = 0;
              reading.cardsReading.forEach(function() {
                $('main section:nth-child(3) .cards').append('<h2>' + cards[reading.cardsReading[k]].name + '</h2> <p>' + cards[reading.cardsReading[k]].desc + '</p>');
                return k++;
              });
            }
          }
          return $('main section:nth-child(3) .help').html('');
        } else {
          return $('.card-r').css({
            pointerEvents: 'none'
          });
        }
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
    $(document).on('click', '.card', function() {
      return func.seeCard($(this));
    });
    $(document).on('click', '.shuffle', function() {
      return func.shuffle();
    });
    $(document).on('click', '.read1, .read2, .read3', function() {
      return func.numberCards($(this));
    });
    return $(document).on('click', '.card-r', function() {
      return func.choice($(this));
    });
  });

}).call(this);
