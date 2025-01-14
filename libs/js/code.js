if('IntersectionObserver' in window){

const videos = document.querySelectorAll('.video');

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target
        if (entry.isIntersecting ){
            video.play()
            console.log('playing')
        } else {
            video.pause()
        }
    })
}, { threshold: 0.5 }
    )

videos.forEach(video => {
    observador.observe(video)
})} else {
    console.error('Intersection Observer não é suportado neste navegador')
}