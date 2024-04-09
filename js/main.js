let label = document.getElementById("label")
let input = document.getElementById("input")
let reset = document.getElementById("reset")
let allWords = []


function filtrarPalabras(objetos, palabras){
    objetos.forEach(word =>{
        allWords.push(word.engTerm)
    })
}
//
filtrarPalabras(palabras, allWords)
//
/* function word_random(allWords){
    var indiceRandom = Math.floor(Math.random() * allWords.length);
    label.innerHTML = allWords[indiceRandom]
} */

reset.addEventListener('click', function(){
    var indiceRandom = Math.floor(Math.random() * allWords.length);
    label.innerHTML = allWords[indiceRandom]
})

//

//


input.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(event.target.value == palabras.spaEquiv){
            console.log(palabras.spaEquiv)
            input.style.color = 'var(--good)'
            //
            let todo_el_menu = document.getElementById("boxes_")
            todo_el_menu.innerHTML = ""
            let wordInfo = document.createElement('div')
            wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
            wordInfo.innerHTML = `<p class="text-light fs-3">
                <span id="word_Eng">${palabraSpanish.engTerm}</span>
                Definition: <span id="definition">
                ${palabraSpanish.definition}</span></p>
                <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                    <div class="sampleSentence">
                        <h2 class="text-center fw-bold">Sample Sentence English</h2>
                        <p class="textsentence">${palabras.sampleSentenceEng}</p>
                    </div>
                    <div class="sampleSentenceSpa">
                        <h2 class="text-center fw-bold">Sample Sentence Spanish</h2>
                        <p class="textsentence">${palabras.sampleSentenceSpa}</p>
                    </div>
                </div>`
            todo_el_menu.appendChild(wordInfo)
            //

        }else{
            input.style.color = 'var(--wrong)'
                        //
                        let todo_el_menu = document.getElementById("boxes_")
                        todo_el_menu.innerHTML = ""
                        let wordInfo = document.createElement('div')
                        wordInfo.className = "d-flex justify-content-center align-items-center flex-column"
                        wordInfo.innerHTML = `<p class="text-light fs-3">
                            <span id="word_Eng">${palabraSpanish.engTerm}</span>
                            Definition: <span id="definition">
                            ${palabraSpanish.definition}</span></p>
                            <div class="box d-flex justify-content-center align-items-center gap-5 my-3">
                                <div class="sampleSentence">
                                    <h2 class="text-center fw-bold">Sample Sentence English</h2>
                                    <p class="textsentence">${palabraSpanish.sampleSentenceEng}</p>
                                </div>
                                <div class="sampleSentenceSpa">
                                    <h2 class="text-center fw-bold">Sample Sentence Spanish</h2>
                                    <p class="textsentence">${palabraSpanish.sampleSentenceSpa}</p>
                                </div>
                            </div>`
                        todo_el_menu.appendChild(wordInfo)
                        //
        }
    }
})


