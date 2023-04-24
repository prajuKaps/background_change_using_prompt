
function update_background() {
    const colour = prompt("Pinky Pinky What color?");
    document.body.style.backgroundColor=colour;
    if (colour) {
        setTimeout(update_background);
    }
    if(colour === 'black'){
        let elements = document.getElementsByClassName("head")
        for (let i = 0; i < elements.length; i++){
            elements[i].style.color = "white"
        }
    }
    if(colour === 'white'){
        let elements = document.getElementsByClassName("head")
        for (let i = 0; i < elements.length; i++){
            elements[i].style.color = "black"
        }
    }
}

update_background()
