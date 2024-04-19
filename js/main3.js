let label = document.getElementById("label")
let input = document.getElementById("input")
let container = document.getElementById("max_container")
var allWords = []
const data = palabras

function filtrarPalabras(objetos, palabras){
    objetos.forEach(word =>{
        palabras.push(word.engTerm)
    })
}
//
filtrarPalabras(palabras, allWords)

function reset_y_numeroRandom(allWords, callback){
    function handleClick(){
        if(event.key === 'ArrowUp' || event.key === "F2"){
            let indiceAleatorio = Math.floor(Math.random() * allWords.length);
            let desaparecer = document.getElementById('desaparecer')
            let word_Spa = document.getElementById("palabras_espanol")
            let todo_el_menu = document.getElementById("boxes_")
            let word = allWords[indiceAleatorio]
            let posicion = indiceAleatorio
            desaparecer.innerHTML= ""
            label.innerHTML = allWords[indiceAleatorio];
            word_Spa.innerHTML = ""
            todo_el_menu.innerHTML = ""
            todo_el_menu.classList.remove("appears")            
            input.value = ""
            input.style.color = "black"
            callback([word, posicion])
        }
    }
    document.addEventListener('keydown', handleClick)
}

reset_y_numeroRandom(allWords, function(valorRandom, palabra){
    let ind = valorRandom[1]
    input.addEventListener('keypress', function(event){
        //
        //
        if(event.keyCode === 13){
            setTimeout(function(){
                input.classList.remove("vibrar_mal")
                input.classList.remove("vibrar_bien")
            }, 300)
            let encontrada = false;
            data.forEach(palabra => {
                for(const key in palabra){
                    if(Array.isArray(palabra[key] )){
                        palabra[key].forEach(comparacion =>{
                            if(event.target.value.toUpperCase().normalize('NFD') === comparacion.toString().toUpperCase().normalize('NFD')){
                                console.log("encontró el array");
                                encontrada = true
                                input.classList.add("vibrar_bien")
                                input.style.color = 'var(--good)'
                                let word_Spa = document.getElementById("palabras_espanol")
                                word_Spa.innerHTML = ""
                                let todo_el_menu = document.getElementById("boxes_")
                                todo_el_menu.innerHTML = ""
                                let wordInfo = document.createElement('div')
                                let divSpa = document.createElement('div')
                                divSpa.innerHTML = `<p class="d-flex justify-content-center align-items-center gap-2 text-white fw-thin">Respuestas Posibles: <span class="text-success fw-light">${data[ind].spaEquiv}</span> </p>`
                                divSpa.className = "d-flex justify-content-center align-items-center text-light fs-5"
                                wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                                wordInfo.innerHTML = `<div class="d-flex justify-content-center align-items-center"><p id="industria" class="text-white fs-4 fw-bold">Industry: <span class="text-danger fs-4 fw-bold">${data[ind].industry}</span></p></div>
                                <p class="text-light fs-4">
                                <span id="word_Eng">${data[ind].engTerm}</span>
                                definition: <span id="definition">
                                ${data[ind].definition}</span></p>
                                <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                                <div class="sampleSentence">
                                <h3 class="text-center fw-bold pt-1">Sample Sentence English</h3>
                                            <p class="textsentence">${data[ind].sampleSentenceEng}</p>
                                        </div>
                                        <div class="sampleSentenceSpa">
                                            <h3 class="text-center fw-bold pt-1">Sample Sentence Spanish</h3>
                                            <p class="textsentence">${data[ind].sampleSentenceSpa}</p>
                                            </div>
                                            </div>`
                                            todo_el_menu.appendChild(wordInfo)
                                word_Spa.appendChild(divSpa)
                                setTimeout(function(){
                                    todo_el_menu.classList.add("appears")
                                }, 300)
                                return
                            }
                            if (event.target.value.toUpperCase().normalize('NFD') === data[ind].spaEquiv.toString().toUpperCase().normalize('NFD')) {
                             
                                input.classList.add("vibrar_bien")
                                input.style.color = 'var(--good)';
                                encontrada = true
                                let word_Spa = document.getElementById("palabras_espanol")
                                word_Spa.innerHTML = ""
                                let todo_el_menu = document.getElementById("boxes_")
                                todo_el_menu.innerHTML = ""
                                let wordInfo = document.createElement('div')
                                let divSpa = document.createElement('div')
                                divSpa.innerHTML = `<p class="d-flex justify-content-center align-items-center gap-2 text-white fw-thin">Respuestas Posibles: <span class="text-success fw-light">${data[ind].spaEquiv}</span> </p>`
                                divSpa.className = "d-flex justify-content-center align-items-center text-light fs-5"
                                wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                                wordInfo.innerHTML = `<div class="d-flex justify-content-center align-items-center"><p id="industria" class="text-white fs-4 fw-bold">Industry: <span class="text-danger fs-4 fw-bold">${data[ind].industry}</span></p></div>
                                <p class="text-light fs-4">
                                <span id="word_Eng">${data[ind].engTerm}</span>
                                Definition: <span id="definition">
                                ${data[ind].definition}</span></p>
                                <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                                <div class="sampleSentence">
                                <h3 class="text-center fw-bold pt-1">Sample Sentence English</h3>
                                            <p class="textsentence">${data[ind].sampleSentenceEng}</p>
                                        </div>
                                        <div class="sampleSentenceSpa">
                                            <h3 class="text-center fw-bold pt-1">Sample Sentence Spanish</h3>
                                            <p class="textsentence">${data[ind].sampleSentenceSpa}</p>
                                            </div>
                                            </div>`
                                            todo_el_menu.appendChild(wordInfo)
                                word_Spa.appendChild(divSpa)
                                setTimeout(function(){
                                    todo_el_menu.classList.add("appears")
                                }, 300)
                                                return
                            }
                        })
                    }
                }
            })
            if(!encontrada){
            input.classList.add("vibrar_mal")
            input.style.color = 'var(--wrong)';
                                let word_Spa = document.getElementById("palabras_espanol")
                                word_Spa.innerHTML = ""
                                let todo_el_menu = document.getElementById("boxes_")
                                todo_el_menu.innerHTML = ""
                                let wordInfo = document.createElement('div')
                                let divSpa = document.createElement('div')
                                divSpa.innerHTML = `<p class="d-flex justify-content-center align-items-center gap-2 text-white fw-thin">Respuestas Posibles: <span class="text-success fw-light">${data[ind].spaEquiv}</span> </p>`
                                divSpa.className = "d-flex justify-content-center align-items-center text-light fs-5"
                                wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                                wordInfo.innerHTML = `<div class="d-flex justify-content-center align-items-center"><p id="industria" class="text-white fs-4 fw-bold">Industry: <span class="text-danger fs-4 fw-light">${data[ind].industry}</span></p></div>
                                <p class="text-light fs-4">
                                <span id="word_Eng">${data[ind].engTerm}</span>
                                Definition: <span id="definition">
                                ${data[ind].definition}</span></p>
                                <div class="box d-flex justify-content-center align-items-center gap-5 my-3 mx-5">
                                <div class="sampleSentence ">
                                <h3 class="text-center fw-bold pt-1">Sample Sentence English</h3>
                                            <p class="textsentence">${data[ind].sampleSentenceEng}</p>
                                        </div>
                                        <div class="sampleSentenceSpa">
                                            <h3 class="text-center fw-bold pt-1">Sample Sentence Spanish</h3>
                                            <p class="textsentence">${data[ind].sampleSentenceSpa}</p>
                                            </div>
                                            </div>`
                                            todo_el_menu.appendChild(wordInfo)
                                word_Spa.appendChild(divSpa)
                                setTimeout(function(){
                                    todo_el_menu.classList.add("appears")
                                }, 300)
            }
            
        }
    })
})
