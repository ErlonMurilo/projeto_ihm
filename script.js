// Carregar elementos de áudio
var hoverSound = document.getElementById('hoverSound');
var clickSound = document.getElementById('clickSound');
var backgroundMusic = document.getElementById('backgroundMusic');
var levelCompleteSound = document.getElementById('levelCompleteSound');
var acertoSound = document.getElementById('acertoSound');
var erroSound = document.getElementById('erroSound');
var bloqueadoSound = document.getElementById('bloqueadoSound');

var isSoundOn = false;
var isMusicOn = false;

hoverSound.volume = 0;
clickSound.volume = 0;
backgroundMusic.volume = 0;


// sons

// Funções para alterar aparencia dos botões de som e musica


// Função para atualizar a aparência do botão de som
function updateSoundButton(soundButton, url1, url2) {
    if (isSoundOn) {
        clickSound.play();
        hoverSound.play();
        soundButton.style.backgroundImage = "url(imagens/"+ url1 + ")";
        soundVolumeBar.value=20;
        hoverSound.volume = 0.5;
        clickSound.volume = 0.5;
    }else{
        clickSound.pause();
        hoverSound.pause();
        hoverSound.volume = 0;
        clickSound.volume = 0;
        soundVolumeBar.value=0;
        soundButton.style.backgroundImage = "url(imagens/"+ url2 + ")";
    }
}


// Função para atualizar a aparência do botão de música
function updateMusicButton(musicButton, url1, url2) {
    if (isMusicOn) {
        if (isSoundOn) {
            clickSound.play()
        }
        musicButton.style.backgroundImage = "url(imagens/"+ url1 + ")";
        musicVolumeBar.value=20;
        backgroundMusic.volume=0.5;
        backgroundMusic.play();
    } else {
        if (isSoundOn) {
            clickSound.play()
        }
        musicVolumeBar.value=0;
        backgroundMusic.volume=0;
        backgroundMusic.pause();
        musicButton.style.backgroundImage = "url(imagens/"+ url2 + ")";
    }
}





// Função para alterar estado do som e musica de fundo


// Função para alternar o estado do som
function toggleSound(soundButton, url1, url2) {
    isSoundOn = !isSoundOn;
    updateSoundButton(soundButton, url1, url2);
}


// Função para alternar o estado da música de fundo
function toggleMusic(musicButton, url1, url2) {
    isMusicOn = !isMusicOn;
    updateMusicButton(musicButton, url1, url2);
}









// ouvintes de eventos para os botões de som e música

var soundButton = document.getElementById('soundButton');
var musicButton = document.getElementById('musicButton');


// Som
soundButton.addEventListener("click", function () {
    toggleSound(soundButton, "Sound01.png", "Sound04.png");
});

soundButton.addEventListener("mousedown", function () {
    // Muda a imagem do startButton quando o botão está pressionado
    soundButton.style.backgroundImage = "url(imagens/Sound03.png)";
});

soundButton.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    soundButton.style.backgroundImage = "url(imagens/Sound04.png)";
});


soundButton.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    soundButton.style.backgroundImage = "url(imagens/Sound02.png)";
});

soundButton.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    if(isSoundOn){
        soundButton.style.backgroundImage = "url(imagens/Sound01.png)";
    }else{
        soundButton.style.backgroundImage = "url(imagens/Sound04.png)";
    }
});



// Musica
musicButton.addEventListener("click", function () {
    toggleMusic(musicButton, "Music01.png", "Music04.png");
});

musicButton.addEventListener("mousedown", function () {
    // Muda a imagem quando o botão está pressionado
    musicButton.style.backgroundImage = "url(imagens/Music03.png)";
});

musicButton.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    musicButton.style.backgroundImage = "url(imagens/Music04.png)";
});


musicButton.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    musicButton.style.backgroundImage = "url(imagens/Music02.png)";
});

musicButton.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    if(isMusicOn){
        musicButton.style.backgroundImage = "url(imagens/Music01.png)";
    }else{
        musicButton.style.backgroundImage = "url(imagens/Music04.png)";
    }
});








//  interação aos botões no painel de configurações
var soundButtonInSettings = document.getElementById("soundButtonInSettings");
var musicButtonInSettings = document.getElementById("musicButtonInSettings");

soundButtonInSettings.addEventListener("click", function () {
    toggleSound(soundButtonInSettings, "Sound01.png", "Sound04.png");
});

soundButtonInSettings.addEventListener("mousedown", function () {
    // Muda a imagem quando o botão está pressionado
    soundButtonInSettings.style.backgroundImage = "url(imagens/Sound03.png)";
});

soundButtonInSettings.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    soundButtonInSettings.style.backgroundImage = "url(imagens/Sound04.png)";
});


soundButtonInSettings.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    soundButtonInSettings.style.backgroundImage = "url(imagens/Sound02.png)";
});

soundButtonInSettings.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    if(isSoundOn){
        soundButtonInSettings.style.backgroundImage = "url(imagens/Sound01.png)";
    }else{
        soundButtonInSettings.style.backgroundImage = "url(imagens/Sound04.png)";
    }
});





musicButtonInSettings.addEventListener("click", function () {
    toggleMusic(musicButtonInSettings, "Music01.png", "Music04.png");
    
});

musicButtonInSettings.addEventListener("mousedown", function () {
    // Muda a imagem quando o botão está pressionado
    musicButtonInSettings.style.backgroundImage = "url(imagens/Music03.png)";
});

musicButtonInSettings.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    musicButtonInSettings.style.backgroundImage = "url(imagens/Music04.png)";
});


musicButtonInSettings.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    musicButtonInSettings.style.backgroundImage = "url(imagens/Music02.png)";
});

musicButtonInSettings.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    if(isMusicOn){
        musicButtonInSettings.style.backgroundImage = "url(imagens/Music01.png)";
    }else{
        musicButtonInSettings.style.backgroundImage = "url(imagens/Music04.png)";
    }
});





// ouvintes de eventos para as barras de volume
var soundVolumeBar = document.getElementById('soundVolumeBar');
var musicVolumeBar = document.getElementById('musicVolumeBar');



// Funções para aumentar ou baixar o volume


soundVolumeBar.addEventListener('input', function () {
    setSoundVolume(this.value);
});

musicVolumeBar.addEventListener('input', function () {
    setMusicVolume(this.value);
});







// Função para ajustar o volume do som
function setSoundVolume(volume) {
    clickSound.volume = volume/100;
    hoverSound.volume = volume/100;
    

    if(volume<=0){
        isSoundOn=false;
        soundButton.style.backgroundImage = "url(imagens/Sound04.png)"
        soundButtonInSettings.style.backgroundImage = "url(imagens/Sound04.png)"
    }else{
        isSoundOn=true;

        soundButton.style.backgroundImage = "url(imagens/Sound01.png)"
        soundButtonInSettings.style.backgroundImage = "url(imagens/Sound01.png)"
    }

}









// Função para ajustar o volume da música de fundo
function setMusicVolume(volume) {
    backgroundMusic.volume = volume/100;

    if(volume<=0){
        isMusicOn=false;
        backgroundMusic.pause()

        musicButtonInSettings.style.backgroundImage = "url(imagens/Music04.png)"
        musicButton.style.backgroundImage = "url(imagens/Music4.png)"
    }else{
        isMusicOn=true;
        backgroundMusic.play()

        musicButtonInSettings.style.backgroundImage = "url(imagens/Music01.png)"
        musicButton.style.backgroundImage = "url(imagens/Music1.png)"
    }
}






































// botoes













// botao iniciar jogo




var startButton = document.getElementById("startButton");



startButton.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }

    if (!faseBloqueada(3)) {
        var imagem = document.getElementById('level_map2');
        imagem.src = 'imagens/level_map2.png';
    }

    if (!faseBloqueada(5)) {
        var imagem = document.getElementById('level_map3');
        imagem.src = 'imagens/level_map3.png';
    }

    document.getElementById("title").style.display = "none";
    document.getElementById("barraSuperior").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("soundButton").style.display = "none";
    document.getElementById("musicButton").style.display = "none";
    document.getElementById("backButton").style.display = "block";
    document.getElementById("blockContainer").style.display = "flex";
});

startButton.addEventListener("mousedown", function () {
    // Muda a imagem do startButton quando o botão está pressionado
    startButton.style.color="#397706";
    startButton.style.textShadow= "-2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black, 2px 0px 0px black";
    startButton.style.backgroundImage = "url(imagens/button3.png)";
    startButton.style.top = "72%";
});

startButton.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    startButton.style.backgroundImage = "url(imagens/button2.png)";
    startButton.style.top = "70%";
});

//tratar o caso em que o mouse sai do botão enquanto ainda está pressionado
startButton.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    startButton.style.backgroundImage = "url(imagens/button2.png)";
    startButton.style.top = "70%";
});

startButton.addEventListener("mouseover", function () {
    // Muda a imagem do startButton quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    startButton.style.backgroundImage = "url(imagens/button2.png)";
    startButton.style.color = "#94bd00";
    startButton.style.textShadow ="-2px -2px 0px #fffd19, -2px 2px 0px #fffd19, 2px -2px 0px #fffd19, 2px 0px 0px #fffd19";
});

startButton.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    startButton.style.backgroundImage = "url(imagens/button1.png)";
    startButton.style.color = "#377306";
    startButton.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});





















// botao voltar






var backButton = document.getElementById("backButton");
var backButtonFase = document.getElementById("backButtonFase");

backButton.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    
    // Restaura os estilos originais do botao
    startButton.style.backgroundImage = "url(imagens/button1.png)";
    startButton.style.color = "#377306";
    startButton.style.textShadow = "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
    startButton.style.top = "70%";

    //  código para voltar para a tela inicial
    document.getElementById("title").style.display = "block";
    document.getElementById("startButton").style.display = "flex";
    document.getElementById("backButton").style.display = "none";
    document.getElementById("barraSuperior").style.display = "none";
    document.getElementById("soundButton").style.display = "block";
    document.getElementById("musicButton").style.display = "block";
    document.getElementById("blockContainer").style.display = "none";
});










backButtonFase.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }

    document.getElementById("confirmacao").style.display = "block";
});

var fasesButton = [
    { id: 1, bloqueada: true },
    { id: 2, bloqueada: true },
    { id: 3, bloqueada: true }
];

// evento ao botão de confirmação
document.getElementById("confirmarSair").addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }

    // código para voltar

    
    reiniciarTelaJogo('blockContainerLevel1')
    reiniciarTelaJogo('blockContainerLevel2')
    reiniciarTelaJogo('blockContainerLevel3')
    reiniciarTelaJogo('blockContainerLevel4')
    reiniciarTelaJogo('blockContainerLevel5')
    reiniciarTelaJogo('blockContainerLevel6')

    console.log(fasesButton[0]);

    if(fasesButton[0].bloqueada==false){
        if(!faseBloqueada(2)){
            document.getElementById('circle2').style.display='block';
            document.getElementById('circle2Block').style.display='none';
        }
    }
    if(fasesButton[1].bloqueada==false){
        if(!faseBloqueada(4)){
            document.getElementById('circle4').style.display='block';
            document.getElementById('circle4Block').style.display='none';
        }
    }

    if(fasesButton[2].bloqueada==false){
        if(!faseBloqueada(6)){
            document.getElementById('circle6').style.display='block';
            document.getElementById('circle6Block').style.display='none';
        }
    }


    document.getElementById("confirmacao").style.display = "none";
    backButtonFase.style.display="none";
    document.getElementById("backButtonScreenLevels").style.display = "block";
    document.getElementById("screenLevels").style.display = "block";
    document.getElementById('menuLevel').style.display = 'none';
    
    document.getElementById("tutorialLevels").style.display = "none";
    document.getElementById("tutorialLevels2").style.display = "none";
    document.getElementById("tutorialLevels3").style.display = "none";
    document.getElementById("tutorialLevels4").style.display = "none";
    document.getElementById("tutorialLevels5").style.display = "none";
    document.getElementById("tutorialLevels6").style.display = "none";
    
    document.getElementById("blockContainerLevel1").style.display = "none";
    document.getElementById("blockContainerLevel2").style.display = "none";
    document.getElementById("blockContainerLevel3").style.display = "none";
    document.getElementById("blockContainerLevel4").style.display = "none";
    document.getElementById("blockContainerLevel5").style.display = "none";
    document.getElementById("blockContainerLevel6").style.display = "none";
});

// evento ao botão de cancelar
document.getElementById("cancelarSair").addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    // Oculta a div de confirmação
    document.getElementById("confirmacao").style.display = "none";
});




//confirmar sair

var confirmarSair = document.getElementById("confirmarSair");

confirmarSair.addEventListener("mousedown", function () {
    // Muda a imagem  quando o botão está pressionado
    confirmarSair.style.color="#397706";
    confirmarSair.style.textShadow= "-2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black, 2px 0px 0px black";
    confirmarSair.style.backgroundImage = "url(imagens/button3.png)";
});

confirmarSair.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    confirmarSair.style.backgroundImage = "url(imagens/button2.png)";
});

//trata o caso em que o mouse sai do botão enquanto ainda está pressionado
confirmarSair.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    confirmarSair.style.backgroundImage = "url(imagens/button3.png)";
});

confirmarSair.addEventListener("mouseover", function () {
    // Muda a imagem  quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    confirmarSair.style.backgroundImage = "url(imagens/button2.png)";
    confirmarSair.style.color = "#94bd00";
    confirmarSair.style.textShadow ="-2px -2px 0px #fffd19, -2px 2px 0px #fffd19, 2px -2px 0px #fffd19, 2px 0px 0px #fffd19";
});

confirmarSair.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    confirmarSair.style.backgroundImage = "url(imagens/button1.png)";
    confirmarSair.style.color = "#377306";
    confirmarSair.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});





//cancelar sair


var cancelarSair = document.getElementById("cancelarSair");

cancelarSair.addEventListener("mousedown", function () {
    // Muda a imagem  quando o botão está pressionado
    cancelarSair.style.color="rgb(122, 10, 10)";
    cancelarSair.style.textShadow= "-2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black, 2px 0px 0px black";
    cancelarSair.style.backgroundImage = "url(imagens/buttonRed3.png)";
});


cancelarSair.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    cancelarSair.style.backgroundImage = "url(imagens/buttonRed2.png)";
});

//tratar o caso em que o mouse sai do botão enquanto ainda está pressionado
cancelarSair.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    cancelarSair.style.backgroundImage = "url(imagens/buttonRed3.png)";
});

cancelarSair.addEventListener("mouseover", function () {
    // Muda a imagem  quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    cancelarSair.style.backgroundImage = "url(imagens/buttonRed2.png)";
    cancelarSair.style.color="black";
    cancelarSair.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});

cancelarSair.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    cancelarSair.style.backgroundImage = "url(imagens/buttonRed1.png)";
    cancelarSair.style.color="black";
    cancelarSair.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});










function funcaoBackButton(backButton){
    backButton.addEventListener("mousedown", function () {
        // Muda a imagem  quando o botão está pressionado
        backButton.style.backgroundImage = "url(imagens/Back03.png)";
    });
    
    backButton.addEventListener("mouseup", function () {
        // Volta à imagem original quando o botão é solto
        backButton.style.backgroundImage = "url(imagens/Back01.png)";
    });
    
    
    backButton.addEventListener("mouseover", function () {
        // Muda a imagem quando o mouse passa sobre ele
        if (isSoundOn) {
            hoverSound.play();
        }
        backButton.style.backgroundImage = "url(imagens/Back02.png)";
        backButton.style.color = "rgb(82, 82, 82)"
    });
    
    backButton.addEventListener("mouseout", function () {
        // Volta à imagem original quando o mouse sai do botão
        backButton.style.backgroundImage = "url(imagens/Back01.png)";
        backButton.style.color = "black"
    });
}


funcaoBackButton(backButton);
funcaoBackButton(backButtonFase);















//menu level

var menuLevel = document.getElementById("menuLevel");

menuLevel.addEventListener("mousedown", function () {
    // Muda a imagem quando o botão está pressionado
    menuLevel.style.backgroundImage = "url(imagens/menuLevel03.png)";
});

menuLevel.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    menuLevel.style.backgroundImage = "url(imagens/menuLevel01.png)";
});


menuLevel.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    menuLevel.style.backgroundImage = "url(imagens/menuLevel02.png)";
    menuLevel.style.color = "rgb(82, 82, 82)"
});

menuLevel.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    menuLevel.style.backgroundImage = "url(imagens/menuLevel01.png)";
    menuLevel.style.color = "black"
});



menuLevel.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }

    document.getElementById("confirmacao2").style.display = "block";
});

// evento ao botão de confirmação
document.getElementById("confirmarSair2").addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }

    // código para voltar


    reiniciarTelaJogo('blockContainerLevel1')
    reiniciarTelaJogo('blockContainerLevel2')
    reiniciarTelaJogo('blockContainerLevel3')
    reiniciarTelaJogo('blockContainerLevel4')
    reiniciarTelaJogo('blockContainerLevel5')
    reiniciarTelaJogo('blockContainerLevel6')

    if (!faseBloqueada(3)) {
        var imagem = document.getElementById('level_map2');
        imagem.src = 'imagens/level_map2.png';
    }

    if (!faseBloqueada(5)) {
        var imagem = document.getElementById('level_map3');
        imagem.src = 'imagens/level_map3.png';
    }

    document.getElementById("confirmacao2").style.display = "none";
    menuLevel.style.display='none';
    document.getElementById("barraSuperior").style.display = "block";
    document.getElementById("backButton").style.display = "block";
    document.getElementById("backButtonFase").style.display = "none";
    document.getElementById("blockContainer").style.display = "flex";
    
    document.getElementById("blockContainerLevel1").style.display = "none";
    document.getElementById("blockContainerLevel2").style.display = "none";
    document.getElementById("blockContainerLevel3").style.display = "none";
    document.getElementById("blockContainerLevel4").style.display = "none";
    document.getElementById("blockContainerLevel5").style.display = "none";
    document.getElementById("blockContainerLevel6").style.display = "none";
    
    document.getElementById("tutorialLevels").style.display = "none";
    document.getElementById("tutorialLevels2").style.display = "none";
    document.getElementById("tutorialLevels3").style.display = "none";
    document.getElementById("tutorialLevels4").style.display = "none";
    document.getElementById("tutorialLevels5").style.display = "none";
    document.getElementById("tutorialLevels6").style.display = "none";
});

//evento ao botão de cancelar
document.getElementById("cancelarSair2").addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    // Oculta a div de confirmação
    document.getElementById("confirmacao2").style.display = "none";
});



//confirmar sair

var confirmarSair2 = document.getElementById("confirmarSair2");

confirmarSair2.addEventListener("mousedown", function () {
    // Muda a imagem  quando o botão está pressionado
    confirmarSair2.style.color="#397706";
    confirmarSair2.style.textShadow= "-2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black, 2px 0px 0px black";
    confirmarSair2.style.backgroundImage = "url(imagens/button3.png)";
});

confirmarSair2.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    confirmarSair2.style.backgroundImage = "url(imagens/button2.png)";
});

//tratar o caso em que o mouse sai do botão enquanto ainda está pressionado
confirmarSair2.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    confirmarSair2.style.backgroundImage = "url(imagens/button3.png)";
});

confirmarSair2.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    confirmarSair2.style.backgroundImage = "url(imagens/button2.png)";
    confirmarSair2.style.color = "#94bd00";
    confirmarSair2.style.textShadow ="-2px -2px 0px #fffd19, -2px 2px 0px #fffd19, 2px -2px 0px #fffd19, 2px 0px 0px #fffd19";
});

confirmarSair2.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    confirmarSair2.style.backgroundImage = "url(imagens/button1.png)";
    confirmarSair2.style.color = "#377306";
    confirmarSair2.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});





//cancelar sair


var cancelarSair2 = document.getElementById("cancelarSair2");

cancelarSair2.addEventListener("mousedown", function () {
    // Muda a imagem quando o botão está pressionado
    cancelarSair2.style.color="rgb(122, 10, 10)";
    cancelarSair2.style.textShadow= "-2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black, 2px 0px 0px black";
    cancelarSair2.style.backgroundImage = "url(imagens/buttonRed3.png)";
});


cancelarSair2.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    cancelarSair2.style.backgroundImage = "url(imagens/buttonRed2.png)";
});

//tratar o caso em que o mouse sai do botão enquanto ainda está pressionado
cancelarSair2.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    cancelarSair2.style.backgroundImage = "url(imagens/buttonRed3.png)";
});

cancelarSair2.addEventListener("mouseover", function () {
    // Muda a imagem  quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    cancelarSair2.style.backgroundImage = "url(imagens/buttonRed2.png)";
    cancelarSair2.style.color="rgba(0, 0, 0, 0.692)";
    cancelarSair2.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});

cancelarSair2.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    cancelarSair2.style.backgroundImage = "url(imagens/buttonRed1.png)";
    cancelarSair2.style.color="black";
    cancelarSair2.style.textShadow= "-2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white, 2px 0px 0px white";
});
















// painel config


var settingsButton = document.getElementById("settingsButton");
var settingsPanel = document.getElementById("settingsPanel");
var painel = document.getElementById("painel");

// Toggle para mostrar/ocultar o painel de configurações
settingsButton.addEventListener("click", function () {
    if (settingsPanel.style.display == "block") {
        settingsPanel.style.display = "none";
        painel.style.display = "none";
    } else {
        settingsPanel.style.display = "block";
        painel.style.display = "block";
    }
});









//botao close

var closeSettings = document.getElementById("closeSettings");

closeSettings.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
        soundButton.style.backgroundImage = "url(imagens/Sound01.png)";
    }else{
        soundButton.style.backgroundImage = "url(imagens/Sound04.png)";
    }

    if (isMusicOn) {
        musicButton.style.backgroundImage = "url(imagens/Music01.png)";
    }else{
        musicButton.style.backgroundImage = "url(imagens/Music04.png)";
    }
    settingsPanel.style.display = "none";
    painel.style.display = "none";
});



closeSettings.addEventListener("mousedown", function () {
    // Muda a imagem  quando o botão está pressionado
    closeSettings.style.backgroundImage = "url(imagens/buttonSave3.png)";

});

closeSettings.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    closeSettings.style.backgroundImage = "url(imagens/buttonSave3.png)";
});


closeSettings.addEventListener("mouseover", function () {
    // Muda o som quando o mouse passa sobre ele
    closeSettings.style.backgroundImage = "url(imagens/buttonSave2.png)";
    if (isSoundOn) {
        hoverSound.play();
    }
});

closeSettings.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    closeSettings.style.backgroundImage = "url(imagens/buttonSave1.png)";
    closeSettings.style.color = "black"
});







// Botão configuração


settingsButton.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
        soundButtonInSettings.style.backgroundImage = "url(imagens/Sound01.png)";
    }else{
        soundButtonInSettings.style.backgroundImage = "url(imagens/Sound04.png)";
    }

    if (isMusicOn) {
        musicButtonInSettings.style.backgroundImage = "url(imagens/Music01.png)";
    }else{
        musicButtonInSettings.style.backgroundImage = "url(imagens/Music04.png)";
    }
});

settingsButton.addEventListener("mousedown", function () {
    // Muda a imagem  quando o botão está pressionado
    settingsButton.style.backgroundImage = "url(imagens/config03.png)";
});

settingsButton.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    settingsButton.style.backgroundImage = "url(imagens/config01.png)";
});


settingsButton.addEventListener("mouseover", function () {
    // Muda a imagem quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    settingsButton.style.backgroundImage = "url(imagens/config02.png)";
    settingsButton.style.color = "rgb(82, 82, 82)"
});

settingsButton.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    settingsButton.style.backgroundImage = "url(imagens/config01.png)";
    settingsButton.style.color = "black"
});


















// nova tela






// eventos para os blocos
var block1 = document.getElementById('levelBlock1');
var block2 = document.getElementById('levelBlock2');
var block3 = document.getElementById('levelBlock3');

block1.addEventListener('click', function () {
    if (isSoundOn) {
        clickSound.play();
    }
    showNewScreen();
    fasesButton[0].bloqueada = false;
    fasesButton[1].bloqueada = true;
    fasesButton[2].bloqueada = true;
    
    document.getElementById('circle1').style.display='block';
    
    if(!faseBloqueada(2)){
        document.getElementById('circle2').style.display='block';
        document.getElementById('circle2Block').style.display='none';
    }else{
        document.getElementById('circle2').style.display='none';
        document.getElementById('circle2Block').style.display='block';
    }

    document.getElementById('screenLevels').style.backgroundImage="url(imagens/map_fase1.png)";
    
    document.getElementById('circle3').style.display='none';
    document.getElementById('circle4').style.display='none';
    document.getElementById('circle5').style.display='none';
    document.getElementById('circle6').style.display='none';
    
    document.getElementById('circle4Block').style.display='none';
    document.getElementById('circle6Block').style.display='none';
    
});

block1.addEventListener("mouseover", function () {
    if (isSoundOn) {
        hoverSound.play();
    }
});

block2.addEventListener('click', function () {
    if (!faseBloqueada(3)) {
        if (isSoundOn) {
            clickSound.play();
        }
        showNewScreen();
        fasesButton[0].bloqueada = true;
        fasesButton[1].bloqueada = false;
        fasesButton[2].bloqueada = true;

        document.getElementById('circle3').style.display='block';

        if(!faseBloqueada(4)){
            document.getElementById('circle4').style.display='block';
            document.getElementById('circle4Block').style.display='none';
        }else{
            document.getElementById('circle4').style.display='none';
            document.getElementById('circle4Block').style.display='block';
        }
        
        document.getElementById('screenLevels').style.backgroundImage="url(imagens/map_fase2.png)";
        
        document.getElementById('circle1').style.display='none';
        document.getElementById('circle2').style.display='none';
        document.getElementById('circle5').style.display='none';
        document.getElementById('circle6').style.display='none';

        document.getElementById('circle2Block').style.display='none';
        document.getElementById('circle6Block').style.display='none';
    }else{
        if (isSoundOn) {
            bloqueadoSound.play();
        }
    }
});

block2.addEventListener("mouseover", function () {
    if (!faseBloqueada(3)) {
        if (isSoundOn) {
            hoverSound.play();
        }
    }
});

block3.addEventListener('click', function () {
    if (!faseBloqueada(5)) {
        if (isSoundOn) {
            clickSound.play();
        }
        fasesButton[0].bloqueada = true;
        fasesButton[1].bloqueada = true;
        fasesButton[2].bloqueada = false;
        showNewScreen();
        document.getElementById('circle5').style.display='block';
        if(!faseBloqueada(6)){
            document.getElementById('circle6').style.display='block';
            document.getElementById('circle6Block').style.display='none';
        }else{
            document.getElementById('circle6').style.display='none';
            document.getElementById('circle6Block').style.display='block';
        }
    
        document.getElementById('screenLevels').style.backgroundImage="url(imagens/map_fase3.png)";
    
        document.getElementById('circle1').style.display='none';
        document.getElementById('circle2').style.display='none';
        document.getElementById('circle3').style.display='none';
        document.getElementById('circle4').style.display='none';

        document.getElementById('circle2Block').style.display='none';
        document.getElementById('circle4Block').style.display='none';
    }else{
        if (isSoundOn) {
            bloqueadoSound.play();
        }
    }
});

block3.addEventListener("mouseover", function () {
    if (!faseBloqueada(5)) {
        if (isSoundOn) {
            hoverSound.play();
        }
    }
});





















// Função para mostrar a nova tela
function showNewScreen() {
    document.getElementById('blockContainer').style.display = 'none';
    document.getElementById('screenLevels').style.display = 'block';
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('backButtonScreenLevels').style.display = 'block';
    
    document.getElementById('block1').style.display = 'block';
    document.getElementById('block2').style.display = 'block';
    document.getElementById('block3').style.display = 'block';
    document.getElementById('emptyBlock1').style.display = 'block';
    document.getElementById('emptyBlock2').style.display = 'block';
    document.getElementById('emptyBlock3').style.display = 'block';
}























//botaos fases

function funcaoButton(idElement, url1, url2, url3) {
    document.getElementById(idElement).addEventListener("mousedown", function () {
        // Muda a imagem  quando o botão está pressionado
        document.getElementById(idElement).style.backgroundImage = url3;
    });
    
    document.getElementById(idElement).addEventListener("mouseup", function () {
        // Volta à imagem original quando o botão é solto
        document.getElementById(idElement).style.backgroundImage = url1;
    });
    
    document.getElementById(idElement).addEventListener("mouseover", function () {
        // Muda a imagem  quando o mouse passa sobre ele
        if (isSoundOn) {
            hoverSound.play();
        }
        document.getElementById(idElement).style.backgroundImage = url2;
    });
    
    document.getElementById(idElement).addEventListener("mouseout", function () {
        // Volta à imagem original quando o mouse sai do botão
        document.getElementById(idElement).style.backgroundImage = url1;
    });
    
}

document.getElementById('circle1').addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if (!faseBloqueada(1)) {

        showTutorial('tutorial', 1,3, 'anteriorButton', 'anteriorBlockButton');
        tutorialLevels.style.display="block";
        document.getElementById('screenLevels').style.display = 'none';
        document.getElementById('backButtonScreenLevels').style.display = 'none';
        
        document.getElementById('backButtonFase').style.display = 'block';
        document.getElementById('menuLevel').style.display = 'block';
        reiniciarJogo('blockContainerLevel1');
        
        document.getElementById('blockContainerLevel1').style.display = 'grid';
    }
    
});

document.getElementById('circle2').addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if(!(faseBloqueada(2))) {
        showTutorial('tutorial2', 4, 4, 'anteriorButton2', 'anteriorBlockButton2');
        tutorialLevels2.style.display="block";
        document.getElementById('screenLevels').style.display = 'none';
        document.getElementById('backButtonScreenLevels').style.display = 'none';
        
        document.getElementById('backButtonFase').style.display = 'block';
        document.getElementById('menuLevel').style.display = 'block';
        reiniciarJogo('blockContainerLevel2');

        document.getElementById('blockContainerLevel2').style.display = 'grid';
    }
    
});


document.getElementById('circle3').addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if (!faseBloqueada(3)) {
        showTutorial('tutorial3', 5, 9, 'anteriorButton3', 'anteriorBlockButton3');
        tutorialLevels3.style.display="block";
        document.getElementById('screenLevels').style.display = 'none';
        document.getElementById('backButtonScreenLevels').style.display = 'none';
        
        document.getElementById('backButtonFase').style.display = 'block';
        document.getElementById('menuLevel').style.display = 'block';
        reiniciarJogo('blockContainerLevel3');
    
        document.getElementById('blockContainerLevel3').style.display = 'grid';
    }
    
});

document.getElementById('circle4').addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if (!faseBloqueada(4)) {
        showTutorial('tutorial4', 10, 13, 'anteriorButton4', 'anteriorBlockButton4');
        tutorialLevels4.style.display="block";
        document.getElementById('screenLevels').style.display = 'none';
        document.getElementById('backButtonScreenLevels').style.display = 'none';
        
        document.getElementById('backButtonFase').style.display = 'block';
        document.getElementById('menuLevel').style.display = 'block';
        reiniciarJogo('blockContainerLevel4');
    
        document.getElementById('blockContainerLevel4').style.display = 'grid';
    }
    
});

document.getElementById('circle5').addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if (!faseBloqueada(5)) {
        showTutorial('tutorial5', 14, 17, 'anteriorButton5', 'anteriorBlockButton5');
        tutorialLevels5.style.display="block";
        document.getElementById('screenLevels').style.display = 'none';
        document.getElementById('backButtonScreenLevels').style.display = 'none';
        document.getElementById('backButtonFase').style.display = 'block';
        document.getElementById('menuLevel').style.display = 'block';
        reiniciarJogo('blockContainerLevel5');
    
        document.getElementById('blockContainerLevel5').style.display = 'block';
    }
    
});

document.getElementById('circle6').addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if (!faseBloqueada(6)) {
        showTutorial('tutorial6', 18, 20, 'anteriorButton6', 'anteriorBlockButton6');
        tutorialLevels6.style.display="block";
        document.getElementById('screenLevels').style.display = 'none';
        document.getElementById('backButtonScreenLevels').style.display = 'none';
        document.getElementById('backButtonFase').style.display = 'block';
        document.getElementById('menuLevel').style.display = 'block';
        reiniciarJogo('blockContainerLevel6');
    
        document.getElementById('blockContainerLevel6').style.display = 'block';
    }
    
});


document.getElementById('circle2Block').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('circle4Block').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('circle6Block').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});


funcaoButton("circle1","url(imagens/buttonFase1.1.png)",'url(imagens/buttonFase1.2.png)','url(imagens/buttonFase1.3.png)')
funcaoButton("circle2","url(imagens/buttonFase2.1.png)",'url(imagens/buttonFase2.2.png)','url(imagens/buttonFase2.3.png)')
funcaoButton("circle3","url(imagens/buttonFase3.1.png)",'url(imagens/buttonFase3.2.png)','url(imagens/buttonFase3.3.png)')
funcaoButton("circle4","url(imagens/buttonFase4.1.png)",'url(imagens/buttonFase4.2.png)','url(imagens/buttonFase4.3.png)')
funcaoButton("circle5","url(imagens/buttonFase5.1.png)",'url(imagens/buttonFase5.2.png)','url(imagens/buttonFase5.3.png)')
funcaoButton("circle6","url(imagens/buttonFase6.1.png)",'url(imagens/buttonFase6.2.png)','url(imagens/buttonFase6.3.png)')   























//eventos para o botão de voltar na nova tela
var backButtonScreenLevels = document.getElementById('backButtonScreenLevels');

backButtonScreenLevels.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    if (!faseBloqueada(3)) {
        var imagem = document.getElementById('level_map2');
        imagem.src = 'imagens/level_map2.png';
    }

    if (!faseBloqueada(5)) {
        var imagem = document.getElementById('level_map3');
        imagem.src = 'imagens/level_map3.png';
    }

    document.getElementById('screenLevels').style.display = 'none';
    document.getElementById('backButtonScreenLevels').style.display = 'none';
    tutorialLevels.style.display="none";
    tutorialLevels2.style.display="none";

    document.getElementById("title").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("soundButton").style.display = "none";
    document.getElementById("musicButton").style.display = "none";
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'none';
    document.getElementById('emptyBlock1').style.display = 'none';
    document.getElementById('emptyBlock2').style.display = 'none';
    document.getElementById('emptyBlock3').style.display = 'none';
    document.getElementById("backButton").style.display = "block";
    document.getElementById("blockContainer").style.display = "flex";
});


backButtonScreenLevels.addEventListener("mousedown", function () {
    // Muda a imagem   quando o botão está pressionado
    backButtonScreenLevels.style.backgroundImage = "url(imagens/Back03.png)";
});

backButtonScreenLevels.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    backButtonScreenLevels.style.backgroundImage = "url(imagens/Back01.png)";
});


backButtonScreenLevels.addEventListener("mouseover", function () {
    // Muda a imagem  quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    backButtonScreenLevels.style.backgroundImage = "url(imagens/Back02.png)";
    backButtonScreenLevels.style.color = "rgb(82, 82, 82)"
});

backButtonScreenLevels.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    backButtonScreenLevels.style.backgroundImage = "url(imagens/Back01.png)";
    backButtonScreenLevels.style.color = "black"
});
































// jogo

var fases = [
    { id: 1, bloqueada: false },
    { id: 2, bloqueada: true },
    { id: 3, bloqueada: true },
    { id: 4, bloqueada: true },
    { id: 5, bloqueada: true },
    { id: 6, bloqueada: true },

];

// Função para verificar se uma fase está bloqueada
function faseBloqueada(faseAtual) {
    return fases[faseAtual - 1].bloqueada;
}

// Função para desbloquear a próxima fase
function desbloquearProximaFase(faseAtual) {
    if (faseAtual <= fases.length) {
        fases[faseAtual-1].bloqueada = false;
    }
}




//movimentos

function movimentosJogo(fase){
    var divEspecifica = document.getElementById(fase);

    var draggableBlocks = divEspecifica.querySelectorAll('.draggable');
    var totalBlocos = 0;
    var contAcertos = 0;
    
    draggableBlocks.forEach(function (draggableBlock) {
        draggableBlock.setAttribute('draggable', 'true');
        draggableBlock.addEventListener('dragstart', handleDragStart);
        totalBlocos++;
    });
    
    //  essa funções para manipular os eventos de arrastar e soltar
    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        
    }
    
    function handleDragOver(event) {
        event.preventDefault();
    }
    
    function handleDragEnter(event) {
        event.preventDefault();
        this.classList.add('drag-over');
    }
    
    function handleDragLeave() {
        this.classList.remove('drag-over');
    }
    
    function handleDrop(event) {
        event.preventDefault();
        this.classList.remove('drag-over');
        var draggedBlockId = event.dataTransfer.getData('text/plain');
        var draggedBlock = document.getElementById(draggedBlockId);
    
        // Obtém o número do bloco vazio
        var emptyBlockNumber = parseInt(this.id.replace('emptyBlock', ''));
    
        // Define o número esperado para o bloco arrastado
        var expectedBlockNumber = emptyBlockNumber;
    
        // Verifica se o bloco arrastado está na posição correta
        if (draggedBlock.dataset.blockNumber == expectedBlockNumber) {
            if(isSoundOn){
                acertoSound.play()
            }
            this.innerHTML = '';
            this.appendChild(draggedBlock);
            contAcertos++;

            // Adiciona a classe de animação para piscar em verde
            draggedBlock.classList.add('green-flash');
            
            setTimeout(function () {
                // Remove a classe após um curto período
                draggedBlock.classList.remove('green-flash');
            },300);
        }

        if (draggedBlock.dataset.blockNumber != expectedBlockNumber) {
            if(isSoundOn){
                erroSound.play()
            }

            // Adiciona a classe de animação para piscar em vermelho
            draggedBlock.classList.add('red-flash');
            
            setTimeout(function () {
                // Remove a classe após um curto período
                draggedBlock.classList.remove('red-flash');
            }, 500);
        }
        
        if(((fase=="blockContainerLevel5") && (contAcertos==1))||((fase=="blockContainerLevel6") && (contAcertos==1))){
            if(isSoundOn){
                levelCompleteSound.play()
            }
            setTimeout(function() {
                exibirNovaTela(fase)
            }, 300);
            if(fase=='blockContainerLevel5'){
                desbloquearProximaFase(6)
            }
        }

        if(contAcertos==totalBlocos){
            if(isSoundOn){
                levelCompleteSound.play()
            }
            setTimeout(function() {
                exibirNovaTela(fase)
            }, 300); 

            if(fase=='blockContainerLevel1'){
                desbloquearProximaFase(2)
            }
            if(fase=='blockContainerLevel2'){
                desbloquearProximaFase(3)
            }
            if(fase=='blockContainerLevel3'){
                desbloquearProximaFase(4)
            }
            if(fase=='blockContainerLevel4'){
                desbloquearProximaFase(5)
            }
        }
    }
        
    // eventos aos blocos vazios na nova tela
    var emptyBlocks = document.querySelectorAll('.emptyBlock');
        
    emptyBlocks.forEach(function (emptyBlock) {
        emptyBlock.addEventListener('dragover', handleDragOver);
        emptyBlock.addEventListener('dragenter', handleDragEnter);
        emptyBlock.addEventListener('dragleave', handleDragLeave);
        emptyBlock.addEventListener('drop', handleDrop);
    });
    
}
    




















function exibirNovaTela(fase) {
    //lógica para exibir a nova tela
    document.getElementById('fundoLevelComplete').style.display='flex';

    if(fase == 'blockContainerLevel1'){
        document.getElementById('reiniciarFaseButton1').style.display='block';
        document.getElementById('avancarFaseButton1').style.display='block';
    }
    if(fase == 'blockContainerLevel2'){
        document.getElementById('reiniciarFaseButton2').style.display='block';
        document.getElementById('avancarFaseButton2').style.display='block';
    }
    if(fase == 'blockContainerLevel3'){
        document.getElementById('reiniciarFaseButton3').style.display='block';
        document.getElementById('avancarFaseButton3').style.display='block';
    }
    if(fase == 'blockContainerLevel4'){
        document.getElementById('reiniciarFaseButton4').style.display='block';
        document.getElementById('avancarFaseButton4').style.display='block';
    }
    if(fase == 'blockContainerLevel5'){
        document.getElementById('reiniciarFaseButton5').style.display='block';
        document.getElementById('avancarFaseButton5').style.display='block';
    }
    if(fase == 'blockContainerLevel6'){
        document.getElementById('reiniciarFaseButton6').style.display='block';
    }

    
}


























// tutorial 

var totalTutorialScreens = 0;
var currentTutorialScreen = 0;

function showTutorial(tutorial, num, num2, anteriorButton, anteriorBlockButton) {
    // Define a tela inicial do tutorial como visível
    currentTutorialScreen = num;
    totalTutorialScreens = num2;

    var anteriorButton = document.getElementById(anteriorButton);
    var anteriorBlock = document.getElementById(anteriorBlockButton);
    
    anteriorButton.style.display = "none";
    anteriorBlock.style.display = "block";
    
    showCurrentTutorialScreen();

    // Exibe a div que contém as telas do tutorial
    document.getElementById(tutorial).style.display = 'block';
}

function showCurrentTutorialScreen() {
    // Oculta todas as telas do tutorial
    hideAllTutorialScreens();

    // Exibe apenas a tela atual
    var currentScreenId = 'tutorialScreen' + currentTutorialScreen;
    document.getElementById(currentScreenId).style.display = 'block';

    var indicatorId = 'indicator' + currentTutorialScreen;
    document.querySelectorAll('.tutorial-indicator').forEach(function (indicator) {
        indicator.classList.remove('active');
    });
    document.getElementById(indicatorId).classList.add('active');
}

function hideAllTutorialScreens() {
    // Oculta todas as telas do tutorial
    var tutorialScreens = document.querySelectorAll('.tutorial-screen');
    tutorialScreens.forEach(function (screen) {
        screen.style.display = 'none';
    });
}




function nextTutorialScreen(tutorial, anteriorButton, anteriorBlockButton) {
    var tutorial = document.getElementById(tutorial);
    anteriorButton.style.display='block';
    anteriorBlockButton.style.display='none';
    currentTutorialScreen++;
    if (currentTutorialScreen > totalTutorialScreens) {
        tutorial.style.display="none";
        iniciarAnimacao()
    }else{
        showCurrentTutorialScreen();
    }
}


function previousTutorialScreen(min, anteriorButton, anteriorBlock) {
    currentTutorialScreen--;
    if (currentTutorialScreen == min) {
        anteriorButton.style.display='none';
        anteriorBlock.style.display='block';
    }
    showCurrentTutorialScreen();
}








function iniciarAnimacao() {
    var block3 = document.getElementById('block3');
    var emptyBlock1 = document.getElementById('emptyBlock1');

    // Armazena as posições originais e finais
    var blockRect = block3.getBoundingClientRect();
    var emptyBlockRect = emptyBlock1.getBoundingClientRect();

    
    // Aguarda um pequeno intervalo para garantir que a transformação inicial seja aplicada
    setTimeout(function() {
        blockRect = block3.getBoundingClientRect();
        emptyBlockRect = emptyBlock1.getBoundingClientRect();

        // Define as variáveis de propriedades CSS customizadas
        block3.style.setProperty('--block-left', blockRect.left + 'px');
        block3.style.setProperty('--block-top', blockRect.top + 'px');
        block3.style.setProperty('--empty-block-left', emptyBlockRect.left + 'px');
        block3.style.setProperty('--empty-block-top', emptyBlockRect.top + 'px');

        // Adiciona a classe 'animate' para criar a animação
        block3.classList.add('animate');

        // Move o bloco até o bloco vazio
        block3.style.transform = 'translate(' +
            (emptyBlockRect.left - blockRect.left) + 'px, ' +
            (emptyBlockRect.top - blockRect.top) + 'px)';
    }, 500);
    
    setTimeout(function() {
        block3.classList.remove('animate');
        block3.style.transform = 'none';
    }, 3500); 
}















function buttonsProximoAnterior(anteriorButton, proximoButton, tutorial,anteriorBlockButton, min){
    var anteriorButton = document.getElementById(anteriorButton);
    var anteriorBlock = document.getElementById(anteriorBlockButton);
    var proximoButton = document.getElementById(proximoButton);

    // botao voltar tutorial
    anteriorButton.addEventListener('click', function () {
        if (isSoundOn) {
            clickSound.play();
        }
        previousTutorialScreen(min, anteriorButton, anteriorBlock)
    });
    anteriorButton.addEventListener("mousedown", function () {
        // Muda a imagem  quando o botão está pressionado
        anteriorButton.style.backgroundImage = "url(imagens/anterior03.png)";
    });
    
    anteriorButton.addEventListener("mouseup", function () {
        // Volta à imagem original quando o botão é solto
        anteriorButton.style.backgroundImage = "url(imagens/anterior02.png)";
    });
    
    
    anteriorButton.addEventListener("mouseover", function () {
        // Muda a imagem  quando o mouse passa sobre ele
        if (isSoundOn) {
            hoverSound.play();
        }
        anteriorButton.style.backgroundImage = "url(imagens/anterior02.png)";
    });
    
    anteriorButton.addEventListener("mouseout", function () {
        // Volta à imagem original quando o mouse sai do botão
        anteriorButton.style.backgroundImage = "url(imagens/anterior01.png)";
    });


    
    // botao avancar tutorial
    proximoButton.addEventListener('click', function () {
        if (isSoundOn) {
            clickSound.play();
        }
    
        nextTutorialScreen(tutorial, anteriorButton, anteriorBlock)
    });
    proximoButton.addEventListener("mousedown", function () {
        // Muda a imagem  quando o botão está pressionado
        proximoButton.style.backgroundImage = "url(imagens/proximo03.png)";
    });
    
    proximoButton.addEventListener("mouseup", function () {
        // Volta à imagem original quando o botão é solto
        proximoButton.style.backgroundImage = "url(imagens/proximo02.png)";
    });
    
    
    proximoButton.addEventListener("mouseover", function () {
        // Muda a imagem quando o mouse passa sobre ele
        if (isSoundOn) {
            hoverSound.play();
        }
        proximoButton.style.backgroundImage = "url(imagens/proximo02.png)";
    });
    
    proximoButton.addEventListener("mouseout", function () {
        // Volta à imagem original quando o mouse sai do botão
        proximoButton.style.backgroundImage = "url(imagens/proximo01.png)";
    });
}

buttonsProximoAnterior('anteriorButton', 'proximoButton', 'tutorial','anteriorBlockButton', 1)
buttonsProximoAnterior('anteriorButton2', 'proximoButton2', 'tutorial2','anteriorBlockButton2', 4)
buttonsProximoAnterior('anteriorButton3', 'proximoButton3', 'tutorial3','anteriorBlockButton3', 5)
buttonsProximoAnterior('anteriorButton4', 'proximoButton4', 'tutorial4','anteriorBlockButton4', 10)
buttonsProximoAnterior('anteriorButton5', 'proximoButton5', 'tutorial5','anteriorBlockButton5', 14)
buttonsProximoAnterior('anteriorButton6', 'proximoButton6', 'tutorial6','anteriorBlockButton6', 18)
















function tutorialButton(tutorialLevels, tutorial, num, num2, anteriorButton, anteriorBlockButton){

    tutorialLevels.addEventListener("click", function () {
        if (isSoundOn) {
            clickSound.play();
        }
        showTutorial(tutorial, num, num2, anteriorButton, anteriorBlockButton);
    });


    tutorialLevels.addEventListener("mousedown", function () {
        // Muda a imagem  quando o botão está pressionado
        tutorialLevels.style.backgroundImage = "url(imagens/tutorial03.png)";
    });

    tutorialLevels.addEventListener("mouseup", function () {
        // Volta à imagem original quando o botão é solto
        tutorialLevels.style.backgroundImage = "url(imagens/tutorial01.png)";
    });


    tutorialLevels.addEventListener("mouseover", function () {
        // Muda a imagem quando o mouse passa sobre ele
        if (isSoundOn) {
            hoverSound.play();
        }
        tutorialLevels.style.backgroundImage = "url(imagens/tutorial02.png)";
    });

    tutorialLevels.addEventListener("mouseout", function () {
        // Volta à imagem original quando o mouse sai do botão
        tutorialLevels.style.backgroundImage = "url(imagens/tutorial01.png)";
    });
}

var tutorialLevels = document.getElementById('tutorialLevels');
var tutorialLevels2 = document.getElementById('tutorialLevels2');
var tutorialLevels3 = document.getElementById('tutorialLevels3');
var tutorialLevels4 = document.getElementById('tutorialLevels4');
var tutorialLevels5 = document.getElementById('tutorialLevels5');
var tutorialLevels6 = document.getElementById('tutorialLevels6');



tutorialButton(tutorialLevels, 'tutorial', 1, 3, 'anteriorButton', 'anteriorBlockButton');
tutorialButton(tutorialLevels2, 'tutorial2', 4, 4, 'anteriorButton2', 'anteriorBlockButton2');
tutorialButton(tutorialLevels3, 'tutorial3', 5, 9, 'anteriorButton3', 'anteriorBlockButton3');
tutorialButton(tutorialLevels4, 'tutorial4', 10, 13, 'anteriorButton4', 'anteriorBlockButton4');
tutorialButton(tutorialLevels5, 'tutorial5', 14, 17, 'anteriorButton5', 'anteriorBlockButton5');
tutorialButton(tutorialLevels6, 'tutorial6', 18, 20, 'anteriorButton6', 'anteriorBlockButton6');


















//menu button levelCompleto

var menuButton = document.getElementById('voltarMenuButton');

menuButton.addEventListener("click", function () {
    if (isSoundOn) {
        clickSound.play();
    }
    // Restante do código para voltar

    reiniciarTelaJogo('blockContainerLevel1')
    reiniciarTelaJogo('blockContainerLevel2')
    reiniciarTelaJogo('blockContainerLevel3')
    reiniciarTelaJogo('blockContainerLevel4')
    reiniciarTelaJogo('blockContainerLevel5')
    reiniciarTelaJogo('blockContainerLevel6')

    if (!faseBloqueada(3)) {
        var imagem = document.getElementById('level_map2');
        imagem.src = 'imagens/level_map2.png';
    }

    if (!faseBloqueada(5)) {
        var imagem = document.getElementById('level_map3');
        imagem.src = 'imagens/level_map3.png';
    }

    document.getElementById('reiniciarFaseButton1').style.display='none';
    document.getElementById('reiniciarFaseButton2').style.display='none';
    document.getElementById('reiniciarFaseButton3').style.display='none';
    document.getElementById('reiniciarFaseButton4').style.display='none';
    document.getElementById('reiniciarFaseButton5').style.display='none';
    document.getElementById('reiniciarFaseButton6').style.display='none';

    document.getElementById('avancarFaseButton1').style.display='none';
    document.getElementById('avancarFaseButton2').style.display='none';
    document.getElementById('avancarFaseButton3').style.display='none';
    document.getElementById('avancarFaseButton4').style.display='none';
    document.getElementById('avancarFaseButton5').style.display='none';

    menuLevel.style.display='none';
    document.getElementById("fundoLevelComplete").style.display = "none";
    document.getElementById("confirmacao2").style.display = "none";
    document.getElementById("barraSuperior").style.display = "block";
    document.getElementById("backButton").style.display = "block";
    document.getElementById("backButtonFase").style.display = "none";
    document.getElementById("blockContainer").style.display = "flex";
    
    document.getElementById("blockContainerLevel1").style.display = "none";
    document.getElementById("blockContainerLevel2").style.display = "none";
    document.getElementById("blockContainerLevel3").style.display = "none";
    document.getElementById("blockContainerLevel4").style.display = "none";
    document.getElementById("blockContainerLevel5").style.display = "none";
    document.getElementById("blockContainerLevel6").style.display = "none";
    
    document.getElementById("tutorialLevels").style.display = "none";
    document.getElementById("tutorialLevels2").style.display = "none";
    document.getElementById("tutorialLevels3").style.display = "none";
    document.getElementById("tutorialLevels4").style.display = "none";
    document.getElementById("tutorialLevels5").style.display = "none";
    document.getElementById("tutorialLevels6").style.display = "none";
});


menuButton.addEventListener("mousedown", function () {
    // Muda a imagem  quando o botão está pressionado
    menuButton.style.backgroundImage = "url(imagens/menuLevel03.png)";
});

menuButton.addEventListener("mouseup", function () {
    // Volta à imagem original quando o botão é solto
    menuButton.style.backgroundImage = "url(imagens/menuLevel01.png)";
});


menuButton.addEventListener("mouseover", function () {
    // Muda a imagem  quando o mouse passa sobre ele
    if (isSoundOn) {
        hoverSound.play();
    }
    menuButton.style.backgroundImage = "url(imagens/menuLevel02.png)";
    menuButton.style.color = "rgb(82, 82, 82)"
});

menuButton.addEventListener("mouseout", function () {
    // Volta à imagem original quando o mouse sai do botão
    menuButton.style.backgroundImage = "url(imagens/menuLevel01.png)";
    menuButton.style.color = "black"
});


















// proxima fase 
var avancarFaseButton1 = document.getElementById('avancarFaseButton1');
var avancarFaseButton2 = document.getElementById('avancarFaseButton2');
var avancarFaseButton3 = document.getElementById('avancarFaseButton3');
var avancarFaseButton4 = document.getElementById('avancarFaseButton4');
var avancarFaseButton5 = document.getElementById('avancarFaseButton5');

funcaoButton("avancarFaseButton1","url(imagens/proximo01.png)",'url(imagens/proximo02.png)','url(imagens/proximo03.png)')
funcaoButton("avancarFaseButton2","url(imagens/proximo01.png)",'url(imagens/proximo02.png)','url(imagens/proximo03.png)')
funcaoButton("avancarFaseButton3","url(imagens/proximo01.png)",'url(imagens/proximo02.png)','url(imagens/proximo03.png)')
funcaoButton("avancarFaseButton4","url(imagens/proximo01.png)",'url(imagens/proximo02.png)','url(imagens/proximo03.png)')
funcaoButton("avancarFaseButton5","url(imagens/proximo01.png)",'url(imagens/proximo02.png)','url(imagens/proximo03.png)')

function avancarFase(button, fase1, fase2) {
    button.addEventListener('click', function () {
        if (isSoundOn) {
            clickSound.play();
        }
        button.style.display='none';
        
        reiniciarFaseButton1.style.display='none';
        reiniciarFaseButton2.style.display='none';
        reiniciarFaseButton3.style.display='none';
        reiniciarFaseButton4.style.display='none';
        reiniciarFaseButton5.style.display='none';
        reiniciarFaseButton6.style.display='none';

        document.getElementById('fundoLevelComplete').style.display='none';
        
        if(fase1 == 'blockContainerLevel1'){
            document.getElementById(fase1).style.display = "none";

            showTutorial('tutorial2', 4, 4, 'anteriorButton2', 'anteriorBlockButton2');
            tutorialLevels.style.display="none";
            tutorialLevels2.style.display="block";

            reiniciarJogo(fase2);
            
            
            document.getElementById(fase2).style.display = "grid";
        }

        if(fase1 == 'blockContainerLevel2'){
            reiniciarJogo(fase1);
            
            document.getElementById(fase1).style.display = "none";
            tutorialLevels2.style.display="none";
            document.getElementById('menuLevel').style.display = 'none';
            document.getElementById('backButtonFase').style.display = 'none';
            
            
            
            document.getElementById("backButton").style.display = "block";
            
            
            
            
            if (!faseBloqueada(3)) {
                var imagem = document.getElementById('level_map2');
                imagem.src = 'imagens/level_map2.png';
            }
        
            if (!faseBloqueada(5)) {
                var imagem = document.getElementById('level_map3');
                imagem.src = 'imagens/level_map3.png';
            }

            document.getElementById('faseAvanced').style.display='block'
            document.getElementById('confirmFase2').style.display='block'

            
            document.getElementById("blockContainer").style.display = "flex";
        }
        if(fase1 == 'blockContainerLevel3'){
            document.getElementById(fase1).style.display = "none";

            showTutorial('tutorial4', 10, 13, 'anteriorButton4', 'anteriorBlockButton4');
            tutorialLevels3.style.display="none";
            tutorialLevels4.style.display="block";

            
            reiniciarJogo(fase2);
            
            
            document.getElementById(fase2).style.display = "grid";
        }
        if(fase1 == 'blockContainerLevel4'){
            reiniciarJogo(fase1);
            
            document.getElementById(fase1).style.display = "none";
            tutorialLevels4.style.display="none";
            document.getElementById('menuLevel').style.display = 'none';
            document.getElementById('backButtonFase').style.display = 'none';
            
            
            
            document.getElementById("backButton").style.display = "block";
            
            
            if (!faseBloqueada(3)) {
                var imagem = document.getElementById('level_map2');
                imagem.src = 'imagens/level_map2.png';
            }
        
            if (!faseBloqueada(5)) {
                var imagem = document.getElementById('level_map3');
                imagem.src = 'imagens/level_map3.png';
            }

            document.getElementById('faseAvanced').style.display='block'
            document.getElementById('confirmFase3').style.display='block'

            
            document.getElementById("blockContainer").style.display = "flex";
            
        }
        if(fase1 == 'blockContainerLevel5'){
            document.getElementById(fase1).style.display = "none";

            showTutorial('tutorial6', 18, 20, 'anteriorButton5', 'anteriorBlockButton5');
            tutorialLevels5.style.display="none";
            tutorialLevels6.style.display="block";

            
            reiniciarJogo(fase2);
            
            
            document.getElementById(fase2).style.display = "block";
            
        }
    });
}

avancarFase(avancarFaseButton1, 'blockContainerLevel1', 'blockContainerLevel2');
avancarFase(avancarFaseButton2, 'blockContainerLevel2', 'blockContainerLevel3');
avancarFase(avancarFaseButton3, 'blockContainerLevel3', 'blockContainerLevel4');
avancarFase(avancarFaseButton4, 'blockContainerLevel4', 'blockContainerLevel5');
avancarFase(avancarFaseButton5, 'blockContainerLevel5', 'blockContainerLevel6');




document.getElementById('anteriorBlockButton').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('anteriorBlockButton2').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('anteriorBlockButton3').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('anteriorBlockButton4').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('anteriorBlockButton5').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});
document.getElementById('anteriorBlockButton6').addEventListener("click", function () {
    if (isSoundOn) {
        bloqueadoSound.play();
    }
});














// reiniciar fase 
var reiniciarFaseButton1 = document.getElementById('reiniciarFaseButton1');
var reiniciarFaseButton2 = document.getElementById('reiniciarFaseButton2');
var reiniciarFaseButton3 = document.getElementById('reiniciarFaseButton3');
var reiniciarFaseButton4 = document.getElementById('reiniciarFaseButton4');
var reiniciarFaseButton5 = document.getElementById('reiniciarFaseButton5');
var reiniciarFaseButton6 = document.getElementById('reiniciarFaseButton6');

funcaoButton("reiniciarFaseButton1","url(imagens/restart01.png)",'url(imagens/restart02.png)','url(imagens/restart03.png)')
funcaoButton("reiniciarFaseButton2","url(imagens/restart01.png)",'url(imagens/restart02.png)','url(imagens/restart03.png)')
funcaoButton("reiniciarFaseButton3","url(imagens/restart01.png)",'url(imagens/restart02.png)','url(imagens/restart03.png)')
funcaoButton("reiniciarFaseButton4","url(imagens/restart01.png)",'url(imagens/restart02.png)','url(imagens/restart03.png)')
funcaoButton("reiniciarFaseButton5","url(imagens/restart01.png)",'url(imagens/restart02.png)','url(imagens/restart03.png)')
funcaoButton("reiniciarFaseButton6","url(imagens/restart01.png)",'url(imagens/restart02.png)','url(imagens/restart03.png)')


function resetClick(button, fase){
    button.addEventListener('click', function () {
        if (isSoundOn) {
            clickSound.play();
        }
        reiniciarJogo(fase);
        button.style.display='none';

        avancarFaseButton1.style.display='none';
        avancarFaseButton2.style.display='none';
        avancarFaseButton3.style.display='none';
        avancarFaseButton4.style.display='none';
        avancarFaseButton5.style.display='none';

        document.getElementById('fundoLevelComplete').style.display='none';
    });
}

resetClick(reiniciarFaseButton1, 'blockContainerLevel1')
resetClick(reiniciarFaseButton2, 'blockContainerLevel2')
resetClick(reiniciarFaseButton3, 'blockContainerLevel3')
resetClick(reiniciarFaseButton4, 'blockContainerLevel4')
resetClick(reiniciarFaseButton5, 'blockContainerLevel5')
resetClick(reiniciarFaseButton6, 'blockContainerLevel6')








function reiniciarJogo(fase) {

   reiniciarTelaJogo(fase);

    // Reinicia o jogo chamando novamente a função movimentosJogo
    movimentosJogo(fase);
}

function reiniciarTelaJogo(fase) {
    if(fase == 'blockContainerLevel1'){
        // Remove os blocos atuais
        var blocksContainer = document.getElementById('blocks1');
        blocksContainer.innerHTML='<div id="block1" class="draggable" data-block-number="2">database</div><div id="block2" class="draggable" data-block-number="3">escola</div><div id="block3" class="draggable" data-block-number="1">create</div><div id="block4" class="draggable" data-block-number="4">;</div>';

        var blocksContainer2 = document.getElementById('emptyBlocks1');
        blocksContainer2.innerHTML='<div id="emptyBlock1" class="emptyBlock droppable">1</div><div id="emptyBlock2" class="emptyBlock droppable">2</div><div id="emptyBlock3" class="emptyBlock droppable">3</div><div id="emptyBlock4" class="emptyBlock droppable">4</div>';
    }
    if(fase == 'blockContainerLevel2'){
        // Remove os blocos atuais
        var blocksContainer = document.getElementById('blocks2');
        blocksContainer.innerHTML='<div id="block5" class="draggable" data-block-number="7">;</div><div id="block6" class="draggable" data-block-number="5">use</div><div id="block7" class="draggable" data-block-number="6">escola</div>';

        var blocksContainer2 = document.getElementById('emptyBlocks2');
        blocksContainer2.innerHTML='<div id="emptyBlock5" class="emptyBlock droppable">1</div><div id="emptyBlock6" class="emptyBlock droppable">2</div><div id="emptyBlock7" class="emptyBlock droppable">3</div>';
    }
    if(fase == 'blockContainerLevel3'){
        // Remove os blocos atuais
        var blocksContainer = document.getElementById('blocks3');
        blocksContainer.innerHTML='<div id="block8" class="draggable" data-block-number="10">alunos</div><div id="block9" class="draggable" data-block-number="19">DECIMAL(2, 2)</div><div id="block10" class="draggable" data-block-number="9">TABLE</div><div id="block11" class="draggable" data-block-number="14">PRIMARY KEY</div><div id="block12" class="draggable" data-block-number="16">nome</div>';

        var blocksContainer3 = document.getElementById('emptyBlocks3');
        blocksContainer3.innerHTML='<div id="emptyBlock8" class="emptyBlock droppable">CREATE</div><div id="emptyBlock9" class="emptyBlock droppable">1</div><div id="emptyBlock10" class="emptyBlock droppable">2</div><div id="emptyBlock11" class="emptyBlock droppable">(</div><div id="emptyBlock12" class="emptyBlock droppable">id</div><div id="emptyBlock13" class="emptyBlock droppable">INT</div><div id="emptyBlock14" class="emptyBlock droppable">3</div><div id="emptyBlock15" class="emptyBlock droppable">,</div><div id="emptyBlock16" class="emptyBlock droppable">4</div><div id="emptyBlock17" class="emptyBlock droppable">VARCHAR(50),</div><div id="emptyBlock18" class="emptyBlock droppable">nota</div><div id="emptyBlock19" class="emptyBlock droppable">5</div><div id="emptyBlock20" class="emptyBlock droppable">);</div>';
       
    }
    if(fase == 'blockContainerLevel4'){
        var blocksContainer = document.getElementById('blocks4');
        blocksContainer.innerHTML='<div id="emptyBlock21" class="emptyBlock droppable">INSERT</div><div id="emptyBlock22" class="emptyBlock droppable">INTO</div><div id="emptyBlock23" class="emptyBlock droppable">alunos</div><div id="emptyBlock24" class="emptyBlock droppable">(</div><div id="emptyBlock25" class="emptyBlock droppable">id</div><div id="emptyBlock26" class="emptyBlock droppable">1</div><div id="emptyBlock27" class="emptyBlock droppable">nota</div><div id="emptyBlock28" class="emptyBlock droppable">)</div><div id="emptyBlock29" class="emptyBlock droppable">VALUES</div><div id="emptyBlock30" class="emptyBlock droppable">(</div><div id="emptyBlock31" class="emptyBlock droppable">2</div><div id="emptyBlock32" class="emptyBlock droppable">"Lucas"</div><div id="emptyBlock33" class="emptyBlock droppable">3</div><div id="emptyBlock34" class="emptyBlock droppable">) ;</div>';

        var blocksContainer4 = document.getElementById('emptyBlocks4');
        blocksContainer4.innerHTML='<div id="block13" class="draggable" data-block-number="33">8.4</div><div id="block14" class="draggable" data-block-number="26">nome</div><div id="block15" class="draggable" data-block-number="31">1</div>';
    }
    if(fase == 'blockContainerLevel5'){
        var blocksContainer = document.getElementById('blocks5');
        blocksContainer.innerHTML='<div id="block16" class="draggable" data-block-number="0">SELECT FROM alunos;</div><div id="block17" class="draggable" data-block-number="0">SELECT * alunos;</div><div id="block18" class="draggable" data-block-number="35">SELECT id, nome, salario FROM alunos;</div>';

        var blocksContainer5 = document.getElementById('emptyBlocks5');
        blocksContainer5.innerHTML='<div id="emptyBlock35" class="emptyBlock droppable">Arraste até aqui o comando correto</div>';
    }
    if(fase == 'blockContainerLevel6'){
        var blocksContainer = document.getElementById('blocks6');
        blocksContainer.innerHTML='<div id="block19" class="draggable" data-block-number="0">(id=2,      nome="João",      idade=18)</div><div id="block20" class="draggable" data-block-number="36">(id=1,      nome=Maria,      idade=25)</div><div id="block21" class="draggable" data-block-number="0">(id=3,      nome=Joana,      idade=20)</div>';

        var blocksContainer6 = document.getElementById('emptyBlocks6');
        blocksContainer6.innerHTML='<div id="emptyBlock36" class="emptyBlock droppable">Arraste até aqui o comando correto</div>';
    }
}


var buttonAvancar = document.getElementById('buttonAvancar');

funcaoButton("buttonAvancar","url(imagens/buttonAvancar1.png)",'url(imagens/buttonAvancar2.png)','url(imagens/buttonAvancar3.png)')


buttonAvancar.addEventListener('click', function () {
    if (isSoundOn) {
        clickSound.play();
    }
    document.getElementById('faseAvanced').style.display='none';
    document.getElementById('confirmFase2').style.display='none';
    document.getElementById('confirmFase3').style.display='none';
});

