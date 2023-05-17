//Função para atualizar os valores dos inputs type=text do HTML
function changeParts(value, controller){
    const partCounter = controller.querySelector('[data-contador]')
    if(value === '+'){
        partCounter.value = parseInt(partCounter.value) + 1
    }else{
        partCounter.value = parseInt(partCounter.value) - 1
    }
}

//Função responsável por calcular as estatísticas e renderizar no HTML
function updateStats(part){
   // parts[part]
    labelStatList.forEach(statElement =>{
        statElement.textContent = parseInt(statElement.textContent) + parts[part][statElement.dataset.stats]
    })
    // console.log(part)
    // console.log(parts[part])
}

//Atributos

const parts = {
    "arms": {
        "force": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "force": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "force": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "force": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "force": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}
const controlButtonList = document.querySelectorAll('[data-controle]')
const labelStatList = document.querySelectorAll('[data-stats]')


//Atribuição de Eventos ao botão

controlButtonList.forEach(button =>{
    button.addEventListener('click', event =>{
        changeParts(event.target.dataset.controle, event.target.parentNode)
        updateStats(event.target.dataset.part)
    })
})

