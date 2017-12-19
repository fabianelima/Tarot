$ ->
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
			$('main section').fadeOut()
			$('main section:nth-child(1)').delay(400).fadeIn()
			$('main section:nth-child(2) .cards').html('')

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

	# eventos
	$(document).on 'click', '.consult', -> nav.consult()
	$(document).on 'click', '.reading', -> nav.reading()
	$(document).on 'click', '.back', -> nav.back()
	$(document).on 'click', '.close', -> nav.close()
	$(document).on 'click', '.card', -> func.seeCard $(this)
