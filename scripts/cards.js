const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')
const pr_wrapper = document.querySelector('#project-wrapper')

cards.forEach(card => {
    const open = card.querySelector('.js-project-open')

    open.addEventListener('click', () => {
        pr_wrapper.innerHTML = open.parentElement.querySelector('.content').innerHTML
        body.classList.add('project-visible')

        const close = pr_wrapper.querySelector('.js-project-close')
        const prev = pr_wrapper.querySelector('.js-prev-btn')
        const next = pr_wrapper.querySelector('.js-next-btn')
        const slider = pr_wrapper.querySelector('.slider')

        let counter = 0
        const maxCount = slider.childElementCount
        slider.style.transform = `translateX(${- slider.clientWidth * counter}px)`

        next.addEventListener('click', () => {
            counter = ((counter + 1) % maxCount)

            slider.style.transform = `translateX(${- slider.clientWidth * counter}px)`
        })

        prev.addEventListener('click', () => {
            counter = (maxCount + (counter - 1)) % maxCount
                        
            slider.style.transform = `translateX(${- slider.clientWidth * counter}px)`
        })

        close.addEventListener('click', event => {
            body.classList.remove('project-visible')
            prev.removeEventListener('click', () => {})
            next.removeEventListener('click', () => {})
            pr_wrapper.innerHTML = ''
        }, {once: true})
    })

    /* Setting up event for background effect on hover */
    card.addEventListener('mouseenter', event => {
        card.style.cssText = `--mouseX: ${event.offsetX / card.clientWidth * 100}%;
                            --mouseY: ${event.offsetY / card.clientHeight * 100}%; 
                            --select-h: 300%; 
                            --select-w: 300%;`
    })

    card.addEventListener('mouseleave', event => {
        card.style.cssText = `--mouseX: ${event.offsetX / card.clientWidth * 100}%;
                            --mouseY: ${event.offsetY / card.clientHeight * 100}%; 
                            --select-h: 0; 
                            --select-w: 0;`
    })
})