'use strict'

function generateRandomMeme() {
    const imgIdx = getRandomIntInclusive(0, getImgs().length - 1)
    onImgSelect(imgIdx)
    generateRandomLine()
    const numOfLines = getRandomIntInclusive(1, 2)
    if (numOfLines === 2) {
        onAddLine()
        generateRandomLine()
    }
    renderMeme()
}

function generateRandomLine() {
    const titles = getTitles()
    const titleIdx = getRandomIntInclusive(0, titles.length - 1)
    onInput(titles[titleIdx])
    const textSize = getRandomIntInclusive(20, 40)
    massiveChangeSize(textSize)
    const textColor = getRandomColor()
    const strokeColor = getRandomColor()
    setFontColor(textColor)
    setStrokeColor(strokeColor)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
