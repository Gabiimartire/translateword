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
        let indiceAleatorio = Math.floor(Math.random() * allWords.length);
        
        
        label.innerHTML = allWords[indiceAleatorio];
        
        //
        let word = allWords[indiceAleatorio]
        let posicion = indiceAleatorio
        let todo_el_menu = document.getElementById("boxes_")
        todo_el_menu.innerHTML = ""
        input.value = ""
        input.style.color = "black"
        //
        callback([word, posicion])
    }
    document.getElementById("reset").addEventListener('click', handleClick)
}
//
reset_y_numeroRandom(allWords, function(valorRandom, palabra){
    input.addEventListener('keypress', function(){
        if(event.keyCode === 13){
            if(event.target.value == palabras[valorRandom[1]].spaEquiv){
                input.style.color = 'var(--good)'
                //
                let todo_el_menu = document.getElementById("boxes_")
                todo_el_menu.innerHTML = ""
                let wordInfo = document.createElement('div')
                wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                wordInfo.innerHTML = `<p class="text-light fs-3">
                    <span id="word_Eng">${palabras[valorRandom[1]].engTerm}</span>
                    Definition: <span id="definition">
                    ${palabras[valorRandom[1]].definition}</span></p>
                    <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                        <div class="sampleSentence">
                            <h2 class="text-center fw-bold">Sample Sentence English</h2>
                            <p class="textsentence">${palabras[valorRandom[1]].sampleSentenceEng}</p>
                        </div>
                        <div class="sampleSentenceSpa">
                            <h2 class="text-center fw-bold">Sample Sentence Spanish</h2>
                            <p class="textsentence">${palabras[valorRandom[1]].sampleSentenceSpa}</p>
                        </div>
                    </div>`
                todo_el_menu.appendChild(wordInfo)
                //
    
            }
            else{
                input.style.color = 'var(--wrong)'
                            //
                            let todo_el_menu = document.getElementById("boxes_")
                            todo_el_menu.innerHTML = ""
                            let wordInfo = document.createElement('div')
                            wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                            wordInfo.innerHTML = `<p class="text-light fs-3">
                                <span id="word_Eng">${palabra[valorRandom[1]].engTerm}</span>
                                Definition: <span id="definition">
                                ${palabraS[valorRandom[1]].definition}</span></p>
                                <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                                    <div class="sampleSentence">
                                        <h2 class="text-center fw-bold">Sample Sentence English</h2>
                                        <p class="textsentence">${palabra[valorRandom[1]].sampleSentenceEng}</p>
                                    </div>
                                    <div class="sampleSentenceSpa">
                                        <h2 class="text-center fw-bold">Sample Sentence Spanish</h2>
                                        <p class="textsentence">${palabra[valorRandom[1]].sampleSentenceSpa}</p>
                                    </div>
                                </div>`
                            todo_el_menu.appendChild(wordInfo)
                            //
            }
        }
    })
})
