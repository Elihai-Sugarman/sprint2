'use strict'

function renderGallery() {
    let imgs = getImgs()
    let pictures = ''
    for (var i = 0; i < imgs.length; i++) {
        pictures += `
        <img class="pick" onclick="onImgSelect(${i})" src="img/${
            i + 1
        }.jpg" alt="" />`
    }
    document.querySelector('.gallery').innerHTML = pictures
}

function onImgSelect(ImgId) {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.flexible-btn').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
    setMeme(ImgId)
    renderMeme()
}

function onClickFlexible() {
    generateRandomMeme()
}
