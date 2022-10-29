'use strict'

const savedMemesKey = 'savedMemes'

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    if (!val) return []
    return JSON.parse(val)
}
