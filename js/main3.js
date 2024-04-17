let label = document.getElementById("label")
let input = document.getElementById("input")
/* let reset = document.getElementById("reset") */
var allWords = []


function filtrarPalabras(objetos, palabras){
    objetos.forEach(word =>{
        palabras.push(word.engTerm)
    })
}
//
filtrarPalabras(palabras, allWords)

function reset_y_numeroRandom(allWords, callback){
    function handleClick(){
        //
        if(event.key === 'ArrowUp'){
            let indiceAleatorio = Math.floor(Math.random() * allWords.length);
            label.innerHTML = allWords[indiceAleatorio];
            //
            let word = allWords[indiceAleatorio]
            let posicion = indiceAleatorio
            let word_Spa = document.getElementById("palabras_espanol")
            word_Spa.innerHTML = ""
            let todo_el_menu = document.getElementById("boxes_")
            todo_el_menu.innerHTML = ""
            input.value = ""
            input.style.color = "black"
            //
            callback([word, posicion])
        }
    }
    document.addEventListener('keydown', handleClick)

}
reset_y_numeroRandom(allWords, function(valorRandom, palabra){
    let ind = valorRandom[1]
    input.addEventListener('keypress', function(){
        if(event.keyCode === 13){
            console.log("hola, empieza foreach para buscar arrays")
            palabras.forEach(palabra => {
                for(const key in palabra){
                    if(Array.isArray(palabra[key])){
                        palabra[key].forEach(comparacion =>{
                            if(event.target.value.normalize('NFD').toUpperCase === comparacion.normalize('NFD').toUpperCase){
                                input.style.color = 'var(--good)'
                                let word_Spa = document.getElementById("palabras_espanol")
                                word_Spa.innerHTML = ""
                                let todo_el_menu = document.getElementById("boxes_")
                                todo_el_menu.innerHTML = ""
                                let wordInfo = document.createElement('div')
                                let divSpa = document.createElement('div')
                                divSpa.innerHTML = `<p class="d-flex justify-content-center align-items-center gap-2 text-white fw-bold">Respuestas Posibles: <span class="text-success">${palabras[ind].spaEquiv}</span> </p>`
                                divSpa.className = "d-flex justify-content-center align-items-center text-light fs-2"
                                wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                                wordInfo.innerHTML = `<p class="text-light fs-3">
                                <span id="word_Eng">${palabras[ind].engTerm}</span>
                                Definition: <span id="definition">
                                ${palabras[ind].definition}</span></p>
                                <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                                <div class="sampleSentence">
                                <h2 class="text-center fw-bold">Sample Sentence English</h2>
                                            <p class="textsentence">${palabras[ind].sampleSentenceEng}</p>
                                        </div>
                                        <div class="sampleSentenceSpa">
                                            <h2 class="text-center fw-bold">Sample Sentence Spanish</h2>
                                            <p class="textsentence">${palabras[ind].sampleSentenceSpa}</p>
                                            </div>
                                            </div>`
                                            todo_el_menu.appendChild(wordInfo)
                                word_Spa.appendChild(divSpa)
                            }
                        })
                    }
                    else if(palabra[key] === event.target.value){
                        input.style.color = 'var(--good)'
                        let word_Spa = document.getElementById("palabras_espanol")
                        let todo_el_menu = document.getElementById("boxes_")
                        word_Spa.innerHTML = ""
                        todo_el_menu.innerHTML = ""
                        let divSpa = document.createElement('div')
                        divSpa.innerHTML = `<p class="d-flex justify-content-center align-items-center gap-2 text-white fw-bold">Respuestas Posibles: <span class="text-success">${palabras[ind].spaEquiv}</span> </p>`
                        divSpa.className = "d-flex justify-content-center align-items-center text-light fs-2"
                        let wordInfo = document.createElement('div')
                        wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                        wordInfo.innerHTML = `<p class="text-light fs-3">
                        <span id="word_Eng">${palabras[ind].engTerm}</span>
                        Definition: <span id="definition">
                        ${palabras[ind].definition}</span></p>
                        <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                                <div class="sampleSentence">
                                <h2 class="text-center fw-bold">Sample Sentence English</h2>
                                <p class="textsentence">${palabras[ind].sampleSentenceEng}</p>
                                </div>
                                <div class="sampleSentenceSpa">
                                <h2 class="text-center fw-bold">Sample Sentence Spanish</h2>
                                <p class="textsentence">${palabras[ind].sampleSentenceSpa}</p>
                                </div>
                                </div>`
                        todo_el_menu.appendChild(wordInfo)
                        word_Spa.appendChild(divSpa)
                    }
                }
            })

        }
    })
})
