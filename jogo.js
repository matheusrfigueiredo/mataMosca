// Definindo tamanho da tela.

	var altura = 0
	var largura = 0
	var vidas = 1
	var tempo = 10
	var criaMosquitoTempo = 1500
	var nivel = window.location.search


	nivel = nivel.replace('?', '')

		switch (nivel) {
		case 'normal':			
			criaMosquitoTempo = 1500
			break	
		case 'dificil':
			criaMosquitoTempo = 1000
			break
		case 'muitoDificil':
			criaMosquitoTempo = 750
			break
		}

// Ajustando tamanho do background do game.

	function ajustaTamanhoPalcoJogo(){

		 altura = window.innerHeight
		 largura = window.innerWidth

		 console.log(largura, altura)

	}

	ajustaTamanhoPalcoJogo()

// Criando contagem de vitória.

	var cronometro = setInterval(function(){
		tempo -= 1 // tempo = tempo - 1

		if (tempo < 0){

			window.location.href = 'vitoria.html'

		} else { 
			document.getElementById('cronometro1').innerHTML = tempo
		}

	}, 1000)

// Gerando posições aleatórias pelo mapa.

	function posicaoRandomica(){


// Remover mosca anterior (caso exista) e fazendo esquemas de remoção de vida (caso não clique no mosquito).

		if(document.getElementById('mosca')){

			document.getElementById('mosca').remove()

			if (vidas > 3){

				window.location.href = 'fim_de_jogo.html'

			} else {
				document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
				vidas ++		
			}
		}



		var posicaoX = Math.floor(Math.random() * largura) - 90
		var posicaoY = Math.floor(Math.random() * altura) - 90

		posicaoX = posicaoX < 0 ? 0 : posicaoX
		posicaoY = posicaoY < 0 ? 0 : posicaoY

		console.log(posicaoX, posicaoY)

	// Criar elemento html

		var mosca = document.createElement('img')
		mosca.src = 'imagens/mosca.png'
		mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		mosca.style.left = posicaoX + 'px'
		mosca.style.top = posicaoY + 'px'
		mosca.style.position = 'absolute'
		mosca.id = 'mosca'
		mosca.onclick = function(){
		this.remove()
		}

		document.body.appendChild(mosca)

		console.log(tamanhoAleatorio() + " " + ladoAleatorio())

	}

	function tamanhoAleatorio(){

		var classe = Math.floor(Math.random() * 3)

		switch(classe) {
			case 0:
				return 'mosca1'
			case 1:
				return 'mosca2'
			case 2:
				return 'mosca3'
		}


	}

	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2)
		switch(classe){
			case 0:
				return 'ladoA'
			case 1:
				return 'ladoB'
		}


	}

