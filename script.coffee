$ ->
	ctrl = []
	reading = {
		isReading: false
		numCards: 0
		cardsClicked: 0
		cardsReading: []
	}
	cards = [	# São 78 cartas no total, 22 arcanos maiores. cada carta terá sua 'ficha'. Vou começar com 5 cartas só pra ver se funciona.
				{
					name: 'carta 1'
					desc: 'Lorem ipsum dolor sit ammet'
				}
				{
					name: 'carta 2'
					desc: 'Lorem ipsum dolor sit ammet'
				}
				{
					name: 'carta 3'
					desc: 'Lorem ipsum dolor sit ammet'
				}
				{
					name: 'carta 4'
					desc: 'Lorem ipsum dolor sit ammet'
				}
				{
					name: 'carta 5'
					desc: 'Lorem ipsum dolor sit ammet'
				}
			]
	nav =
		consult: ->
			func.allCards()
			$('main section').fadeOut()
			$('main section:nth-child(2)').delay(400).fadeIn()

		reading: ->
			$('main section').fadeOut()
			$('main section:nth-child(3)').delay(400).fadeIn()

		back: ->
			reading.isReading = false
			reading.numCards = 0
			reading.cardsClicked = 0
			reading.cardsReading = []
			$('main section').fadeOut()
			$('main section:nth-child(1)').delay(400).fadeIn()
			$('main section:nth-child(2) .cards').html('')
			$('main section:nth-child(3)').html('
				<h1>Leitura</h1>
				<p class="help"></p>
				<div class="cards"></div>
				<button class="shuffle">Embaralhar</button>
				<button class="back">< Voltar</button>
			')

		close: -> $('.modal').fadeOut()

	func =
		allCards: ->
			j = 0
			cards.forEach ->
				$('main section:nth-child(2) .cards').append('<div class="card" id="c' + j + '">' + cards[j].name + '</div>')
				j++

		seeCard: ($el) ->
			$('.modal').fadeIn()
			$('.modal').html('<h1>' + cards[Number($el.attr('id').slice(1))].name + '</h1><p>' + cards[Number($el.attr('id').slice(1))].desc + '</p><button class="close">Fechar</button>')

		rNumber: ->
			randy = Math.floor(Math.random() * cards.length)

			if ctrl.length < cards.length
				if ctrl.indexOf(randy) is -1
					ctrl.push randy

				func.rNumber()

		shuffle: ->
			func.rNumber()

			for i in ctrl
				$('main section:nth-child(3) .cards').append('<div class="card-r" id="c' + i + '"><img src="back.png"></div>')

			$('.modal').fadeIn().html('
				<h1>Escolha o tipo de leitura</h1>
				<button class="read1">Uma carta</button>
				<button class="read2">Duas cartas</button>
				<button class="read3">Três cartas</button>
			')

		numberCards: ($el) ->
			reading.isReading = true
			reading.numCards = Number($el.attr('class').slice(4))
			$('.modal, .shuffle').fadeOut()

			if $el.attr('class') is 'read1' then $('main section:nth-child(3) .help').html('Clique sobre uma carta:')
			if $el.attr('class') is 'read2' then $('main section:nth-child(3) .help').html('Clique sobre duas cartas:')
			if $el.attr('class') is 'read3' then $('main section:nth-child(3) .help').html('Clique sobre três cartas:')

		choice: ($el) ->
			reading.cardsClicked++

			if reading.cardsClicked <= reading.numCards
				reading.cardsReading.push Number($el.attr('id').slice(1))

				if reading.numCards is 1
					$('main section:nth-child(3) .cards').html('
						<h2>' + cards[Number($el.attr('id').slice(1))].name + '</h2>
						<p>' + cards[Number($el.attr('id').slice(1))].desc + '</p>
					')

				if reading.numCards > 1
					if reading.numCards is reading.cardsClicked
						$('main section:nth-child(3) .cards').html('')

						k = 0
						reading.cardsReading.forEach ->
							$('main section:nth-child(3) .cards').append('
								<h2>' + cards[reading.cardsReading[k]].name + '</h2>
								<p>' + cards[reading.cardsReading[k]].desc + '</p>
							')
							k++

				$('main section:nth-child(3) .help').html('')
			else
				$('.card-r').css { pointerEvents: 'none' }

	# eventos
	$(document).on 'click', '.consult', -> nav.consult()
	$(document).on 'click', '.reading', -> nav.reading()
	$(document).on 'click', '.back', -> nav.back()
	$(document).on 'click', '.close', -> nav.close()
	$(document).on 'click', '.card', -> func.seeCard $(this)
	$(document).on 'click', '.shuffle', -> func.shuffle()
	$(document).on 'click', '.read1, .read2, .read3', -> func.numberCards $(this)
	$(document).on 'click', '.card-r', -> func.choice $(this)
