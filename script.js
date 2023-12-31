document.addEventListener("DOMContentLoaded", function () {
    const marqueeContainer = document.querySelector('.apoiadores-marquee');


    const intervaloRenovacao = 5000;

    function renovarImagens() {
        const imagens = marqueeContainer.querySelectorAll('img');
        imagens.forEach((imagem) => {
            const clone = imagem.cloneNode(true);
            marqueeContainer.appendChild(clone);
        });
    }

    setInterval(renovarImagens, intervaloRenovacao);
});

