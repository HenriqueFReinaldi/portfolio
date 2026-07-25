function updateIntro(){
    const d = new Date()-new Date('2007-01-13');
    const anos = Math.floor(d/31557600000);

    document.getElementById("intro").textContent = `Tenho ${anos} anos. Sou um aluno de ciência da computação no Centro Universitário de Brasília.`
}
updateIntro();


const vo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        
        if (entry.isIntersecting) {
            video.play().catch(err => console.log("Playback prevented:", err));
        } 
        else {
            video.pause();
        }
    });

}, 
{ 
  threshold: 0.5
}
);

document.querySelectorAll('video').forEach(v => {
    vo.observe(v);
});