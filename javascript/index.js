// DOM ELEMENTS
// Header
let toggleThemeBtn, modalContainer, playAudioBtn, closeBtn
// Home
let toggleTextBtn
// Audio 
let audioEl, audioCtx, audioSrcNode, analyser, bufferLength, dataArray
const audioFiles = [
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/Kirra.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Burial/Archangel.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Flume/Ezra.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Bonobo/Kerala.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Evil+Needle/Sunday_Morning.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Mac+Miller/I_Can_See.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Ekali/Unfaith.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Bonobo/Second_Sun.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Mac+Miller/Good_News.mp3'
]
let playlistIndex = 0
// Canvas
let canvas, canvasCtx

document.addEventListener("DOMContentLoaded", function() {
  // DOM ELEMENTS & CONTEXT INITIALIZATION
  // Header
  toggleThemeBtn = document.querySelector('#toggle-theme')
  modalContainer = document.querySelector('#modal-container')
  playAudioBtn = document.querySelector('#play-audio')
  closeBtn = document.querySelector('#close-modal')
  // Home
  toggleTextBtn = document.getElementsByClassName('display-btn')
  // Audio 
  audioEl = document.querySelector('#audio')
 
  // Canvas 
  canvas = document.querySelector('canvas')
  canvasCtx = canvas.getContext('2d')

  // EVENT LISTENERS
  window.onresize = onResize;
  toggleThemeBtn.onclick = toggleTheme
  modalContainer.onclick = closeModal
  closeBtn.onclick = closeModal
  playAudioBtn.onclick = audioSetup

  // Home Page Event Listeners 
  if (toggleTextBtn.length > 0) {
    for (let i = 0; i < toggleTextBtn.length; i++) {
      toggleTextBtn[i].onclick = handleCollapsibleContent
    }
  }

  // Audio Event Listeners
  audioEl.onended = function() {
    incrementPlaylistIndex() 
    playAudio(playlistIndex)
  }
})

function onResize() {
  const w = window.innerWidth || document.body.clientWidth
  const h = window.innerHeight || document.body.clientHeight

  canvas.width = w;
  canvas.height = h;
}

function toggleTheme() {
  const body = document.body
  if (body.classList.contains('light-theme')) {
    body.classList = 'dark-theme'
  } else {
    body.classList = 'light-theme'
  }
}

function incrementPlaylistIndex() {
  if (playlistIndex === audioFiles.length-1) {
    playlistIndex = 0
  } else {
    ++playlistIndex
  }
  return playlistIndex
}

function canvasInit() {
  canvas.classList += 'scale-up'
  canvas.width = window.innerWidth || document.body.clientWidth
  canvas.height = window.innerHeight || document.body.clientHeight
}

function checkBrowser(type) {
  if (navigator.userAgent.indexOf(type) != -1) {
    return true
  } else {
    return false
  }
}
