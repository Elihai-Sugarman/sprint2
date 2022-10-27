'use strict'

var gCurrSavedMeme = -1

function renderSavedMemes() {
    const savedMemes = loadFromStorage(savedMemesKey)
    document.querySelector('.saved-memes').innerHTML = ''
    for (var i = 0; i < savedMemes.length; i++) {
        renderSavedMeme(i)
    }
}

function renderSavedMeme(idx) {
    setGMeme(idx)
    let memes = `
        <a onclick="onMemeSelect(${idx})"><canvas class="click meme-canvas meme${idx}" id="canvas${idx}" height="400" width="400"></canvas></a>`
    document.querySelector('.saved-memes').innerHTML += memes
    gElCanvas = document.querySelector(`.meme${idx}`)
    gCtx = gElCanvas.getContext('2d')
    renderPicture()
}

function onMemeSelect(memeIdx) {
    gCurrSavedMeme = memeIdx
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.editor').style.display = 'inline'
    setGMeme(memeIdx)
    renderMeme()
}
