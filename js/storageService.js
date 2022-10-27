'use strict'

const savedMemesKey = 'savedMemes'
saveToStorage(savedMemesKey, [])

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}
