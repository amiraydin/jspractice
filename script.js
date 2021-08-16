const panels = document.querySelectorAll('.panel')

panels.forEach(photo => {
    photo.addEventListener('click', () => {
        removeActiveClass()
        photo.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(photo => {
        photo.classList.remove('active')
    })
}