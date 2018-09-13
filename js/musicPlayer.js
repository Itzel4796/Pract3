var music = null;
function playMusic(file){
    if(file == "fileOne"){
        if(music!=null)
            music.pause();
        music = new Audio('assets/magicasprincesas.mp3');
        music.play();
        document.getElementById("stopOne").style.visibility = "visible";
        document.getElementById("stopTwo").style.visibility = "hidden";
        document.getElementById("fileOne").style.color = "green";
        document.getElementById("fileTwo").style.color = "indigo";
        document.getElementById("opcionOne").className = "list-group-item active";
        document.getElementById("opcionTwo").className = "list-group-item";
    }else{
        if(music!=null)
            music.pause();
        music = new Audio('assets/quieroser.mp3');
        music.play();
        document.getElementById("stopOne").style.visibility = "hidden";
        document.getElementById("stopTwo").style.visibility = "visible";
        document.getElementById("fileTwo").style.color = "green";
        document.getElementById("fileOne").style.color = "indigo";
        document.getElementById("opcionTwo").className = "list-group-item active";
        document.getElementById("opcionOne").className = "list-group-item";
    }
}

function stopMusic(id){
    music.pause();
}