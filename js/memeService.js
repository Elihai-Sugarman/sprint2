'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['turmp', 'politics'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'animals'] },
    { id: 3, url: 'img/3.jpg', keywords: ['dog', 'animals', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'animals'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'funny'] },
    { id: 6, url: 'img/6.jpg', keywords: ['man', 'funny'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'funny'] },
    { id: 8, url: 'img/8.jpg', keywords: ['man', 'funny'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'funny'] },
    { id: 10, url: 'img/10.jpg', keywords: ['man', 'obama', 'politics'] },
    { id: 11, url: 'img/11.jpg', keywords: ['man', 'sport'] },
    { id: 12, url: 'img/12.jpg', keywords: ['man', 'tv-shows'] },
    { id: 13, url: 'img/13.jpg', keywords: ['man', 'actor', 'movies'] },
    { id: 14, url: 'img/14.jpg', keywords: ['man', 'sunglasses'] },
    { id: 15, url: 'img/15.jpg', keywords: ['man'] },
    { id: 16, url: 'img/16.jpg', keywords: ['man', 'funny'] },
    { id: 17, url: 'img/17.jpg', keywords: ['man', 'putin', 'politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['toys', 'movies'] },
]

var gTitles = [
    'TOLD YOU SO.',
    'Are you for real?',
    'Sure... wait, what?',
    'That never happened',
    'Seriously?',
    `I don't get paid enough for this...`,
    'Stop. Please Stop.',
    'For your sake...',
    'What a surprise...',
    `I'm gonna fail this sprint...`,
    'Trust me',
    'How about... no?',
    'Pleaaaaaaaase',
    'Oh, really?',
    `I couldn't care less`,
    `I wish I could`,
    `But I don't want to...`,
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            border: 'black',
        },
    ],
}

function getMeme() {
    return gMeme
}

function getImg() {
    return gImgs[gMeme.selectedImgId]
}

function getLines() {
    return gMeme.lines
}

function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setGMeme(memeIdx) {
    const savedMemes = loadFromStorage(savedMemesKey)
    gMeme = savedMemes[memeIdx]
}

function getImgs() {
    return gImgs
}

function getTitles() {
    return gTitles
}

function setLineTxt(input) {
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].txt = input
}

function setMeme(ImgId) {
    gMeme = {
        selectedImgId: ImgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'FIRST TEXT',
                size: 30,
                align: 'center',
                color: 'white',
                border: 'black',
            },
        ],
    }
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].border = color
}

function setFontColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
}

function changeSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function massiveChangeSize(newSize) {
    gMeme.lines[gMeme.selectedLineIdx].size = newSize
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function addLine() {
    const linesNum = gMeme.lines.length
    if (linesNum === 0) {
        gMeme.lines.push({
            txt: 'FIRST TEXT',
            size: 30,
            align: 'center',
            color: 'white',
            border: 'black',
        })
    } else if (linesNum === 1) {
        gMeme.lines.push({
            txt: 'SECOND TEXT',
            size: 30,
            align: 'center',
            color: 'white',
            border: 'black',
        })
    } else {
        gMeme.lines.push({
            txt: 'ANOTHER TEXT...',
            size: 30,
            align: 'center',
            color: 'white',
            border: 'black',
        })
    }
}

function deleteLine() {
    if (!gMeme.lines.length) return 0
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (gMeme.selectedLineIdx >= gMeme.lines.length && gMeme.lines.length)
        gMeme.selectedLineIdx--
    return gMeme.lines.length
}
