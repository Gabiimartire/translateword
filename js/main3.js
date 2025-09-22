let label = document.getElementById("label")
let input = document.getElementById("input")
let container = document.getElementById("max_container")
const data = palabras

function filtrarPalabras(objetos){
    let palabras = []
    objetos.forEach(word =>{
        palabras.push(word.engTerm)
    })
    return palabras
}

allWords = filtrarPalabras(data)

posicion  = document.addEventListener('keyup',  evento =>{
    reset_palabraRandom(allWords,  evento)
})
function reset_palabraRandom(allWords, event,){
    if(event.key === 'ArrowUp' || event.key === "F2"){
        let indiceAleatorio = Math.floor(Math.random() * allWords.length)
        let desaparecer = document.getElementById('desaparecer')
        let word_Spa = document.getElementById("palabras_espanol")
        let todo_el_menu = document.getElementById("boxes_")
        let word = allWords[indiceAleatorio]
        posicion = indiceAleatorio
        desaparecer.innerHTML= ""
        label.innerHTML = allWords[indiceAleatorio];
        word_Spa.innerHTML = ""
        todo_el_menu.innerHTML = ""
        todo_el_menu.classList.remove("appears")            
        input.value = ""
        input.style.color = "black"
        return posicion
    }
}

function mostrar_info(data, vibrar,  colorVibrar){
    input.classList.add(`${vibrar}`)
    input.style.color = `${colorVibrar}`
    let word_Spa = document.getElementById("palabras_espanol")
    word_Spa.innerHTML = ""
    let todo_el_menu = document.getElementById("boxes_")
    todo_el_menu.innerHTML = ""
    let wordInfo = document.createElement('div')
    let divSpa = document.createElement('div') 
    divSpa.innerHTML = `<p class="flex justify-center items-center gap-2 text-white text-xl">Respuestas Posibles: <span class="text-xl text-green-300">${data.spaEquiv}</span> </p>`
    divSpa.className = "flex justify-center items-center text-white "
    wordInfo.className = "flex justify-center items-center flex-col"
    wordInfo.innerHTML = `<div class="flex justify-center items-center"><p id="industria" class="text-white font-bold">Industry: <span class="text-danger fs-4 fw-bold">${data.industry}</span></p></div>
    <p class="text-white text-xl ">
    <span id="word_Eng" class="text-xl ">${data.engTerm}</span>
    definition: <span id="definition" class="text-xl">
    ${data.definition}</span></p>
    <div class="box flex justify-center items-center gap-5 my-3">
    <div class="sampleSentence">
    <h3 class="text-center font-bold pt-1">Sample Sentence English</h3>
    <p class="textsentence">${data.sampleSentenceEng}</p>
    </div>
    <div class="sampleSentenceSpa">
    <h3 class="text-center font-bold pt-1">Sample Sentence Spanish</h3>
    <p class="textsentence">${data.sampleSentenceSpa}</p>
    </div>
    </div>`
    todo_el_menu.appendChild(wordInfo)
    word_Spa.appendChild(divSpa)
    setTimeout(function(){
    todo_el_menu.classList.add("appears")
    }, 300)
    return                        
}

input.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
            setTimeout(function(){
                input.classList.remove("vibrar_mal")
                input.classList.remove("vibrar_bien")
            }, 300)
            let encontrada = false;
            data.forEach((palabra, index) => {
                for (const key in palabra) {
                    if (Array.isArray(palabra[key])) {
                        for (const comparacion of palabra[key]) {
                            const valorInput = event.target.value.toUpperCase().normalize('NFD');
                            const valorComparacion = comparacion.toString().toUpperCase().normalize('NFD');
                             if (valorInput === valorComparacion) {
                                encontrada = true;
                                mostrar_info(data[posicion], "vibrar_bien", "var(--good)");
                                break;
                            }
                             else if(event.target.value.toUpperCase().normalize('NFD') === data[posicion].spaEquiv.toString().toUpperCase().normalize('NFD')) {
                                encontrada = true
                                mostrar_info(data[posicion],  "vibrar_bien", "var(--good)")
                                break
                            }
                        }
                        }
                }
            })
                            if(!encontrada){
                                mostrar_info(data[posicion],  "vibrar_mal", "var(--wrong)")
                            }

        }
    })

