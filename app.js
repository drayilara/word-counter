
function getFields(){

    let container = document.querySelector("#container");
    let wordEntry = document.querySelector("#wordEntry");

    return {container, wordEntry};
}

function exec(){
    let { wordEntry, container } = getFields();

    let value;

    let result = document.querySelector("#result");

    wordEntry.addEventListener("input", (e) => {
        
        value = e.target.value;
        
        let charCount = value.length;
        let wordCount;

        let wordFinder = value.match(/\S+/g);

        if(wordFinder == null) {
            wordCount = 0;
        }else{
            wordCount = wordFinder.length;
        }

        result.textContent = `You have entered ${wordCount} words, and ${charCount} characters`;
    })

    
}

exec()