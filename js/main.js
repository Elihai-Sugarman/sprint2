'use strice'

function onInit() {
    gCurrSavedMeme = -1
    onOpenGallery()
}

function onOpenGallery() {
    gCurrSavedMeme = -1
    document.querySelector('body').classList.remove('show-menu')
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('.flexible-btn').style.display = 'inline'
    document.querySelector(
        '.menu-btn'
    ).innerHTML = `<img src="img/menu-btn.png" />`
    renderGallery()
}

function onOpenAbout() {
    gCurrSavedMeme = -1
    document.querySelector('body').classList.remove('show-menu')
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.flexible-btn').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.about').style.display = 'block'
    document.querySelector(
        '.menu-btn'
    ).innerHTML = `<img src="img/menu-btn.png" />`
}

function onOpenMemes() {
    gCurrSavedMeme = -1
    document.querySelector('body').classList.remove('show-menu')
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.flexible-btn').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'grid'
    document.querySelector(
        '.menu-btn'
    ).innerHTML = `<img src="img/menu-btn.png" />`
    renderSavedMemes()
}

function onToggleMenu() {
    const elBody = document.querySelector('body')
    document.querySelector('body').classList.toggle('show-menu')
    const elButton = document.querySelector('.menu-btn')
    if (elBody.classList.contains('show-menu')) {
        elButton.innerHTML = 'X'
    } else {
        elButton.innerHTML = `<img src="img/menu-btn.png" />`
    }
}
