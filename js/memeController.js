'use strict'

let gElCanvas
let gCtx

function renderMeme() {
    renderInput()
    gElCanvas = document.querySelector('.editor #canvas')
    gCtx = gElCanvas.getContext('2d')
    renderPicture()
}

function renderInput() {
    const line = getCurrLine()
    document.querySelector(
        '.line-input-form'
    ).innerHTML = `<input class="input-txt type="text" oninput="onInput(this.value)" placeholder="${line.txt}" />`
}

function renderPicture() {
    drawImgFromlocal(getImg())
    setTimeout(drawLines, 0, getLines())
}

function drawLines(lines) {
    for (var i = 0; i < lines.length; i++) {
        let x = gElCanvas.width / 2
        let y = gElCanvas.height / 8
        if (i === 1) y *= 7
        else if (i > 1) y *= 4
        drawText(lines[i], x, y)
    }
}

function drawImgFromlocal({ url }) {
    const img = new Image()
    img.src = url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
    }
}

function drawText(line, x, y) {
    gCtx.lineWidth = 1
    gCtx.textAlign = line.align
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.border
    const text = line.txt

    gCtx.font = `${line.size}px Arial`
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function onInput(input) {
    if (!gMeme.lines.length) onAddLine()
    setLineTxt(input)
    document.querySelector('.input-txt').placeholder = input
    renderPicture()
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderPicture()
}

function onSetFontColor(color) {
    setFontColor(color)
    renderPicture()
}

function onChangeAlign(align) {
    changeAlign(align)
    renderPicture()
}

function onChangeSize(diff) {
    changeSize(diff)
    renderPicture()
}

function onSwitchLine() {
    let elInput = document.querySelector('.input-txt')
    elInput.value = ''
    elInput.placeholder = switchLine()
}

function onAddLine() {
    addLine()
    renderPicture()
    onSwitchLine()
}

function onDeleteLine() {
    let placeholder = ''
    if (deleteLine()) placeholder = getCurrLine().txt
    document.querySelector(
        '.line-input-form'
    ).innerHTML = `<input class="input-txt type="text" oninput="onInput(this.value)" placeholder="${placeholder}" />`
    renderPicture()
}

function downloadCanvas(elLink) {
    //Protect the image soo attacker could not download imgs from diff domain
    const data = gElCanvas.toDataURL() // For security reason you cannot do toDataUrl on tainted canvas
    //This protects users from having private data exposed by using images
    // to pull information from remote web sites without permission.
    elLink.href = data
    elLink.download = 'my-img.jpg'
}

function onSaveMeme() {
    let savedMemes = loadFromStorage(savedMemesKey)
    if (gCurrSavedMeme >= 0) savedMemes.splice(gCurrSavedMeme, 1)
    savedMemes.push(getMeme())
    saveToStorage(savedMemesKey, savedMemes)
    savedMemes = loadFromStorage(savedMemesKey)
    onOpenMemes()
}
