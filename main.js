const intro = document.getElementById("intro");

function updateIntro(){
    const aniversario = new Date('2007-01-13');
    const now = new Date();

    const d = now-aniversario;
    const anos = Math.floor(d/31557600000);
    console.log(anos);
    intro.textContent = `Tenho ${anos} anos. Sou um aluno de ciências da computação no Centro Universitário de Brasília.`
}
updateIntro();