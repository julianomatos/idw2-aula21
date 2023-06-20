//selecionando o elemento pelo ID
const meuTitulo = document.getElementById('titulo')
meuTitulo.innerText = 'DOM' //Alterando o texto
meuTitulo.style.color = 'green' //Alterando a cor do texto

const paragrafos = document.getElementsByTagName('p')

//paragrafos[0].innerText = 'Parágrafo 1'
//paragrafos[0].style.fontSize = '50px'
paragrafos[2].innerText = 'Meu terceiro parágrafo.'
//Iterando todos os parágrafos do Html
// for (let i = 0;i < paragrafos.length; i++){
//     paragrafos[i].innerText = 'Páragrafo ' + (i + 1)
//     paragrafos[i].style.color = 'red'
// }

const item = document.querySelector('li')
item.textContent = 'Texto 1'
item.style.color = 'blue'

const items = document.querySelectorAll('li')
items[1].textContent = 'Texto 2'
items[1].style.color = 'blue'


meuTitulo.innerHTML = 'Manipulando <br> o DOM'

function alteraImagem(){
    const img = document.querySelector('img')
    img.src = 'js2.jpeg'
}
function voltaImagem(){
    const img = document.querySelector('img')
    img.src = 'js1.png'
}

const link = document.querySelector('a')
link.innerText = 'Google'
link.href = 'https://google.com'

const minhaHeader = document.querySelector('header')
minhaHeader.style.backgroundColor = 'black'
minhaHeader.style.color = 'white'
minhaHeader.style.padding = '5%'
minhaHeader.style.width = '50%'
minhaHeader.style.margin = '0 auto'

function adicionar(){
    const club = document.getElementById('club').value
    if (club != ''){
        const li = document.createElement('li')
        const ol = document.getElementById('listaClubs')
        li.innerText = club
        ol.appendChild(li)
    }else{
        alert('Adicione um time.')
        document.getElementById('club').focus()
    }
    document.getElementById('club').value = ''
    document.getElementById('club').focus()
}
function remover(){
    const club = document.getElementById('clubRemove').value
    const listaTime = document.querySelectorAll('li')
    let achou = false
    for(let i = 0; i < listaTime.length; i++){
        if(club == listaTime[i].innerText){
            listaTime[i].remove()
            achou = true
        }
    }
    if (achou == false){
        alert('Time não encontrado.')
    }
    document.getElementById('clubRemove').value = ''
    document.getElementById('clubRemove').focus()
}
//Adicionando e removendo classes
paragrafos[2].classList.add('fundoVerde')
const classes = document.querySelector('h2')
classes.classList.add('fundoVerde')
classes.classList.remove('fundoVerde')
function alternar(){
    classes.classList.toggle('fundoVerde') // Adiciona e remove a classe, verificando o estado.
}
function criarBotao(){
    const btn = document.createElement('button')
    btn.textContent = 'Salvar'
    btn.type = 'button'
    btn.style.marginLeft = '10px'
    btn.addEventListener('click', ola)
    const body = document.querySelector('body')
    body.appendChild(btn)
}
function ola(){
    alert('Olá. Criei um evento')
}