window.onload = function(){
    const output = document.querySelector(".output");
    const button =  document.querySelector(".btn");
    const url = "https://v2.jokeapi.dev/joke/Programming?type=single&blacklistFlags=nsfw,explicit";

    button.addEventListener('click',() =>{
        fetch(url)
        .then(response => response.json())
        .then(content => {
            output.style.border = "2px solid #1F2937";
            output.style.boxShadow = "1px 2px #1F2937";
            button.textContent = "Another one";
            output.textContent = content.joke;
        })
    })
    
}