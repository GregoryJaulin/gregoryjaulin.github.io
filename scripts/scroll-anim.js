// Disable animations on mobile
if(screen && screen.width > 480) {
    //Allow animations only if JS enabled
    document.querySelector("body").classList.remove("animations-disabled")

    const minRatio = .2
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: minRatio
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio >= minRatio) {
                entry.target.classList.add("reveal")
                observer.unobserve(entry.target)
            }    
        })
    }, options)

    // Observe elem with class starting by "anim-"
    document.querySelectorAll("[class*=anim-]").forEach(elem => {
        observer.observe(elem)
    })
}