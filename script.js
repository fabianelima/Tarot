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
        name: '0: O Bobo',
        desc: '',
        key: ['espontaneidade, confiança, ousadia', 'irresponsabilidade, imprudência'],
        art: 'RWS_Tarot_00_Fool'
      }, {
        name: 'I: O Mago',
        desc: '',
        key: ['habilidade, confiança, comunicação', 'insegurança, falha de comunicação'],
        art: 'RWS_Tarot_01_Magician'
      }, {
        name: 'II: A Alta Sacerdotisa',
        desc: '',
        key: ['intuição, sonhos, ânimo', 'potencial não reconhecido, sentimentos reprimidos'],
        art: 'RWS_Tarot_02_High_Priestess'
      }, {
        name: 'III: A Imperatriz',
        desc: '',
        key: ['segurança, bem estar, maternidade', 'insegurança, problemas domésticos'],
        art: 'RWS_Tarot_03_Empress'
      }, {
        name: 'IV: O Imperador',
        desc: '',
        key: ['autoridade, responsabilidade, elevação', 'inferioridade, engessado por regras'],
        art: 'RWS_Tarot_04_Emperor'
      }, {
        name: 'V: O Hierofanta',
        desc: '',
        key: ['conselho profissional, aprendizado, ensino', 'informação errônea, maus conselhos'],
        art: 'RWS_Tarot_05_Hierophant'
      }, {
        name: 'VI: Os Amantes',
        desc: '',
        key: ['escolha, decisão, comprometimento', 'indecisão, escolhas ruins'],
        art: 'RWS_Tarot_06_Lovers'
      }, {
        name: 'VII: A Carruagem',
        desc: '',
        key: ['força de vontade, ambição', 'falta de objetivo, egoísmo, conflitos internos'],
        art: 'RWS_Tarot_07_Chariot'
      }, {
        name: 'VIII: Força',
        desc: '',
        key: ['força moral, auto controle', 'desesperança, inibição'],
        art: 'RWS_Tarot_08_Strength'
      }, {
        name: 'IX: O Eremita',
        desc: '',
        key: ['independência, solitude, busca interna', 'solidão, exclusão'],
        art: 'RWS_Tarot_09_Hermit'
      }, {
        name: 'X: A Roda da Fortuna',
        desc: '',
        key: ['boa sorte, eventualidade', 'má sorte, pessimismo'],
        art: 'RWS_Tarot_10_Wheel_of_Fortune'
      }, {
        name: 'XI: Justiça',
        desc: '',
        key: ['justiça, razão, assuntos legais', 'injustiça, viés'],
        art: 'RWS_Tarot_11_Justice'
      }, {
        name: 'XII: O Enforcado',
        desc: '',
        key: ['sacrifício, dedicação', 'insatisfação, apatia'],
        art: 'RWS_Tarot_12_Hanged_Man'
      }, {
        name: 'XIII: Morte',
        desc: '',
        key: ['mudança, fins, nova vida', 'mudança traumática, mudança postergada'],
        art: 'RWS_Tarot_13_Death'
      }, {
        name: 'XIV: Temperança',
        desc: '',
        key: ['personalidade equilibrada, tato', 'incerteza, melancolia'],
        art: 'RWS_Tarot_14_Temperance'
      }, {
        name: 'XV: O Diabo',
        desc: '',
        key: ['raiva, opressão, restrição', 'fuga, situação intolerável'],
        art: 'RWS_Tarot_15_Devil'
      }, {
        name: 'XVI: A Torre',
        desc: '',
        key: ['choque, revelação, acidente', 'desgraça evitável, golpe decepcionante'],
        art: 'RWS_Tarot_16_Tower'
      }, {
        name: 'XVII: A Estrela',
        desc: '',
        key: ['paz, cura, descanso', 'esperança, satisfação postergada'],
        art: 'RWS_Tarot_17_Star'
      }, {
        name: 'XVIII: A Lua',
        desc: '',
        key: ['confusão, depressão, decepção', 'medos, fobias, desespero'],
        art: 'RWS_Tarot_18_Moon'
      }, {
        name: 'XIX: O Sol',
        desc: '',
        key: ['sucesso, otimismo, grandes ideais', 'ilusão, sonhar acordado'],
        art: 'RWS_Tarot_19_Sun'
      }, {
        name: 'XX: Julgamento',
        desc: '',
        key: ['avaliação, resultado satisfatório', 'remorso, arrependimento, resultado insatisfatório'],
        art: 'RWS_Tarot_20_Judgement'
      }, {
        name: 'XXI: O Mundo',
        desc: '',
        key: ['realização, completude espiritual, liberdade', 'problemas recorrentes, completude postergada'],
        art: 'RWS_Tarot_21_World'
      }, {
        name: 'Ás de Paus',
        desc: '',
        key: ['inspiração, entusiasmo, ambição', 'energia desperdiçada'],
        art: 'Wands01'
      }, {
        name: 'Dois de Paus',
        desc: '',
        key: ['decisão, sucesso inicial, auto-dúvida', 'indecisão, ilusão, anticlímax'],
        art: 'Wands02'
      }, {
        name: 'Três de Paus',
        desc: '',
        key: ['idéias criativas, traçar planos, sorte', 'procrastinação, oportunidades perdidas, desejos irreais'],
        art: 'Wands03'
      }, {
        name: 'Quatro de Paus',
        desc: '',
        key: ['livre expressão, trabalho criativo, férias', 'restrição, regulação'],
        art: 'Wands04'
      }, {
        name: 'Cinco de Paus',
        desc: '',
        key: ['problemas menores, luta', 'rivalidade, disrupção, disputas'],
        art: 'Wands05'
      }, {
        name: 'Seis de Paus',
        desc: '',
        key: ['vitória, triunfo', 'anticlímax, sucesso postergado'],
        art: 'Wands06'
      }, {
        name: 'Sete de Paus',
        desc: '',
        key: ['desafio, teste, valor', 'fracasso ante desafio, falta de confiança'],
        art: 'Wands07'
      }, {
        name: 'Oito de Paus',
        desc: '',
        key: ['agilidade, atividade, conclusão rápida', 'pressa, desorganização, exaustão'],
        art: 'Wands08'
      }, {
        name: 'Nove de Paus',
        desc: '',
        key: ['força, persistência corajosa', 'obstinação, persistência fútil'],
        art: 'Wands09'
      }, {
        name: 'Dez de Paus',
        desc: '',
        key: ['peso da responsabilidade, muitos compromissos', 'fardo opressivo, excesso de trabalho'],
        art: 'Wands10'
      }, {
        name: 'Valete de Paus',
        desc: '',
        key: ['viajante, entusiasta, impulsivo', 'reclamão, amante desleal, más notícias'],
        art: 'Wands11'
      }, {
        name: 'Cavaleiro de Paus',
        desc: '',
        key: ['gerreiro, generoso, ligeiro', 'ciumento, agressivo, crítico'],
        art: 'Wands12'
      }, {
        name: 'Rainha de Paus',
        desc: '',
        key: ['organizadora prática, vívida, ativa, criativa', 'possessividade, mal-humor, autoritária'],
        art: 'Wands13'
      }, {
        name: 'Rei de Paus',
        desc: '',
        key: ['atlético, justo, generoso, bondoso', 'intolerante, violento, maus conselhos'],
        art: 'Wands14'
      }, {
        name: 'Ás de Copas',
        desc: '',
        key: ['emoção, amor, poderes psíquicos', 'tristeza, solidão, desapontamento'],
        art: 'Cups01'
      }, {
        name: 'Dois de Copas',
        desc: '',
        key: ['amor, amizade, casamento', 'brigas, separação, divórcio'],
        art: 'Cups02'
      }, {
        name: 'Três de Copas',
        desc: '',
        key: ['crescimento, nascimento, casamento', 'egoísmo, exploração, problemas domésticos'],
        art: 'Cups03'
      }, {
        name: 'Quatro de Copas',
        desc: '',
        key: ['apatia, tédio, excesso', 'auto-indulgência, depressão'],
        art: 'Cups04'
      }, {
        name: 'Cinco de Copas',
        desc: '',
        key: ['perda parcial, desapontamento', 'perda, remorço, tristeza'],
        art: 'Cups05'
      }, {
        name: 'Seis de Copas',
        desc: '',
        key: ['memórias agradáveis, velhos amigos, infância', 'memórias infelizes, nostalgia'],
        art: 'Cups06'
      }, {
        name: 'Sete de Copas',
        desc: '',
        key: ['fantasia, ilusão, escolha', 'desilusão, fantasia, perplexidade'],
        art: 'Cups07'
      }, {
        name: 'Oito de Copas',
        desc: '',
        key: ['superação, desenvolvimento, sacrifício', 'sucesso abandonado'],
        art: 'Cups08'
      }, {
        name: 'Nove de Copas',
        desc: '',
        key: ['felicidade, otimismo, hospitalidade', 'complacência, superficialidade'],
        art: 'Cups09'
      }, {
        name: 'Dez de Copas',
        desc: '',
        key: ['satisfação, felicidade, família feliz', 'felicidade interrompida, desapontamento'],
        art: 'Cups10'
      }, {
        name: 'Valete de Copas',
        desc: '',
        key: ['jovem, gentil, artístico, amoroso, perspicaz', 'pessoa trivial e mimada, manipulador'],
        art: 'Cups11'
      }, {
        name: 'Cavaleiro de Copas',
        desc: '',
        key: ['sensível, idealista, romântico', 'vigarista ocioso, falso amante, amante de partida'],
        art: 'Cups12'
      }, {
        name: 'Rainha de Copas',
        desc: '',
        key: ['sociável, simpática, calorosa', 'vã, imoral, enganosa, perversa'],
        art: 'Cups13'
      }, {
        name: 'Rei de Copas',
        desc: '',
        key: ['sociável, amoroso, sensual', 'mau-humorado, impressão enganosa'],
        art: 'Cups14'
      }, {
        name: 'Ás de Espadas',
        desc: '',
        key: ['intelecto, razão, justiça', 'crueldade, injustiça'],
        art: 'Swords01'
      }, {
        name: 'Dois de Espadas',
        desc: '',
        key: ['equilíbrio, paz restaurada, trégua', 'conflito, discordância'],
        art: 'Swords02'
      }, {
        name: 'Três de Espadas',
        desc: '',
        key: ['conflito, tristeza, destruição', 'conflito prolongado, dor, destruição'],
        art: 'Swords03'
      }, {
        name: 'Quatro de Espadas',
        desc: '',
        key: ['trégua, recuperação', 'banimento, rejeição, fuga'],
        art: 'Swords04'
      }, {
        name: 'Cinco de Espadas',
        desc: '',
        key: ['derrota, humilhação', 'humilhação, engano'],
        art: 'Swords05'
      }, {
        name: 'Seis de Espadas',
        desc: '',
        key: ['melhoria, passagem, jornada', 'melhoria temporária'],
        art: 'Swords06'
      }, {
        name: 'Sete de Espadas',
        desc: '',
        key: ['previdência, evasão, desarmar oponente', 'timidez, comportamento conservador'],
        art: 'Swords07'
      }, {
        name: 'Oito de Espadas',
        desc: '',
        key: ['restrição, impedimento', 'grande restrição, necessidade de mudança'],
        art: 'Swords08'
      }, {
        name: 'Nove de Espadas',
        desc: '',
        key: ['desespero, depressão, angústia mental', 'depressão severa, crueldade, fantasias mórbidas'],
        art: 'Swords09'
      }, {
        name: 'Dez de Espadas',
        desc: '',
        key: ['crise, ruína, grupo azarado', 'falsa esperança, ruína, azar contínuo'],
        art: 'Swords10'
      }, {
        name: 'Valete de Espadas',
        desc: '',
        key: ['inteligência afiada, mudança, vigília', 'negócios astutos e secretos'],
        art: 'Swords11'
      }, {
        name: 'Cavaleiro de Espadas',
        desc: '',
        key: ['personalidade forte, dominador, conflito', 'agressão, disparatamento, força impessoal'],
        art: 'Swords12'
      }, {
        name: 'Rainha de Espadas',
        desc: '',
        key: ['mulher madura, independente, percepção afiada', 'misantropia, hipercriticismo, maliciosidade'],
        art: 'Swords13'
      }, {
        name: 'Rei de Espadas',
        desc: '',
        key: ['homem maduro, autoritativo, assertivo', 'valentão, exploração, confronto'],
        art: 'Swords14'
      }, {
        name: 'Ás de Ouros',
        desc: '',
        key: ['sentimentos, segurança, riqueza', 'insegurança, materialismo'],
        art: 'Pents01'
      }, {
        name: 'Dois de Ouros',
        desc: '',
        key: ['habilidade prática, adaptabilidade, mudança harmoniosa', 'melancolia, instabilidade, tolice'],
        art: 'Pents02'
      }, {
        name: 'Três de Ouros',
        desc: '',
        key: ['trabalho, emprego', 'trabalho insatisfatório'],
        art: 'Pents03'
      }, {
        name: 'Quatro de Ouros',
        desc: '',
        key: ['estabilidade, segurança sufocante', 'possessividade, miséria'],
        art: 'Pents04'
      }, {
        name: 'Cinco de Ouros',
        desc: '',
        key: ['pobreza, preocupação, problemas materiais', 'pobreza, desemprego, destituição'],
        art: 'Pents05'
      }, {
        name: 'Seis de Ouros',
        desc: '',
        key: ['presente, caridade', 'roubo, traição, ser usado'],
        art: 'Pents06'
      }, {
        name: 'Sete de Ouros',
        desc: '',
        key: ['perseverança, circunstâncias desencorajadoras', 'fracasso, abandono, desânimo'],
        art: 'Pents07'
      }, {
        name: 'Oito de Ouros',
        desc: '',
        key: ['trabalho qualificado, ofício, autônomo', 'ganhos de curto prazo, conveniência'],
        art: 'Pents08'
      }, {
        name: 'Nove de Ouros',
        desc: '',
        key: ['ganho material, segurança conseguida através de esforço', 'segurança ilusória, dependência'],
        art: 'Pents09'
      }, {
        name: 'Dez de Ouros',
        desc: '',
        key: ['apoio familiar, amigos, herança', 'problemas familiares, responsabilidade social'],
        art: 'Pents10'
      }, {
        name: 'Valete de Ouros',
        desc: '',
        key: ['boas novas, criatividade, sabedoria', 'ociosidade, miséria, problemas financeiros'],
        art: 'Pents11'
      }, {
        name: 'Cavaleiro de Ouros',
        desc: '',
        key: ['rigor, confiabilidade, boas novas', 'timidez, estagnação, novas abordagens'],
        art: 'Pents12'
      }, {
        name: 'Rainha de Ouros',
        desc: '',
        key: ['praticalidada, astúcia, ajuda financeira', 'materialismo, insegurança, conflito'],
        art: 'Pents13'
      }, {
        name: 'Rei de Ouros',
        desc: '',
        key: ['confiança, sucesso, segurança', 'insensibilidade, super materialismo'],
        art: 'Pents14'
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
          $('main section:nth-child(2) .cards').append('<div class="card" id="c' + j + '"><img src="img/' + cards[j].art + '.jpg"></div>');
          return j++;
        });
      },
      seeCard: function($el) {
        $('.modal').fadeIn();
        return $('.modal').html('<h1>' + cards[Number($el.attr('id').slice(1))].name + '</h1> <img src="img/' + cards[Number($el.attr('id').slice(1))].art + '.jpg"> <p>Palavras-chave: ' + cards[Number($el.attr('id').slice(1))].key[0] + '</p> <p>Invertido: ' + cards[Number($el.attr('id').slice(1))].key[1] + '</p> <button class="close">Fechar</button>');
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
          $('main section:nth-child(3) .cards').append('<div class="card-r" id="c' + i + '"><img src="img/back.png"></div>');
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
          pointerEvents: 'none',
          filter: 'grayscale(100%)'
        });
        if (reading.cardsClicked <= reading.numCards) {
          reading.cardsReading.push(Number($el.attr('id').slice(1)));
          if (reading.numCards === 1) {
            $('main section:nth-child(3) .cards').html('<h2>' + cards[Number($el.attr('id').slice(1))].name + '</h2> <img src="img/' + cards[Number($el.attr('id').slice(1))].art + '.jpg"> <p>Palavras-chave: ' + cards[Number($el.attr('id').slice(1))].key[0] + '</p> <p>Invertido: ' + cards[Number($el.attr('id').slice(1))].key[1] + '</p>');
          }
          if (reading.numCards > 1) {
            if (reading.numCards === reading.cardsClicked) {
              $('main section:nth-child(3) .cards').html('');
              k = 0;
              reading.cardsReading.forEach(function() {
                $('main section:nth-child(3) .cards').append('<h2>' + cards[reading.cardsReading[k]].name + '</h2> <img src="img/' + cards[reading.cardsReading[k]].art + '.jpg"> <p>Palavras-chave: ' + cards[reading.cardsReading[k]].key[0] + '</p> <p>Invertido: ' + cards[reading.cardsReading[k]].key[1] + '</p> <hr/>');
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
