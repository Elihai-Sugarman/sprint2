'use strice'

function onInit() {
    document.querySelector('body').classList.remove('show-menu')
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.gallery').style.display = 'grid'
    renderGallery()
}

function onOpenAbout() {
    document.querySelector('body').classList.remove('show-menu')
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.about').style.display = 'block'
}

function onOpenMemes() {
    document.querySelector('body').classList.remove('show-menu')
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'block'
}

function onToggleMenu() {
    document.querySelector('body').classList.toggle('show-menu')
}
