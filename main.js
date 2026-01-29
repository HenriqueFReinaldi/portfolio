function updateIntro(){
    const d = new Date()-new Date('2007-01-13');
    const anos = Math.floor(d/31557600000);

    document.getElementById("intro").textContent = `Tenho ${anos} anos. Sou aluno de ciências da computação no Centro Universitário de Brasília.`
}


updateIntro();
