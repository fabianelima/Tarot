$ ->
	nav =
		consult: ->
			$('main section').fadeOut()
			$('main section:nth-child(2)').delay(400).fadeIn()

		reading: ->
			$('main section').fadeOut()
			$('main section:nth-child(3)').delay(400).fadeIn()

		back: ->
			$('main section').fadeOut()
			$('main section:nth-child(1)').delay(400).fadeIn()

	# eventos
	$(document).on 'click', '.consult', -> nav.consult()
	$(document).on 'click', '.reading', -> nav.reading()
	$(document).on 'click', '.back', -> nav.back()
