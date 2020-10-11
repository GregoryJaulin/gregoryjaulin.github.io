const nav_link = document.querySelectorAll('nav ul li')
const menu_btn = document.querySelector('#menu_btn')

nav_link.forEach(elem => {
    elem.innerHTML = `<p>${elem.getAttribute("data-txt")}</p>`

    const scrollElem = document.querySelector(elem.getAttribute('data-link'))
    if(scrollElem != undefined) 
        elem.addEventListener('click', () => {
            scrollElem.scrollIntoView()
            menu_btn.checked = false
        })
})