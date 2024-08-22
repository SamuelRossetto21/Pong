fill(color(255, 140, 0));
rect(150, 10, 40, 20);
fill(255);
text(meusPontos, 170, 26)
fill(color(255, 140, 0));
rect(450, 10, 40, 20);
fill(255);
text(pontosDoOponente, 470, 26);

}

function marcaPonto() {
if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
}
if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
}
}

function preload() {
trilha = loadSound("trilha.mp3");
ponto = loadSound("ponto.mp3");
raquetada = loadSound("raquetada.mp3");
}