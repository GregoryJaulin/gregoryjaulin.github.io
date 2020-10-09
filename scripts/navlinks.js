const nav_link = document.querySelectorAll('#nav-list li')
const menu_btn = document.getElementById('menu_btn')

nav_link.forEach(elem => {
    elem.innerHTML = `<p>${elem.getAttribute("data-txt")}</p>`

    const scrollElem = document.getElementById(elem.getAttribute('data-link'))
    if(scrollElem != undefined) 
        elem.addEventListener('click', () => {
            scrollElem.scrollIntoView()
            menu_btn.checked = false
        })
})