const header = document.querySelector('header')
const present = document.querySelector('#presentation')
const work = document.querySelector('#work')
const up_btn = document.querySelector('#up-btn')

document.addEventListener('scroll', () => {
    let scrollBarPosition = window.pageYOffset | document.body.scrollTop

    header.style.setProperty('--bg-position', `${75 - (scrollBarPosition / header.offsetHeight * 25)}%`)
    present.style.setProperty('--bg-position', `${75 - (scrollBarPosition / present.offsetHeight * 25)}%`)
    work.style.setProperty('--bg-position', `${75 - (scrollBarPosition / present.offsetHeight * 25)}%`)
})

up_btn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})