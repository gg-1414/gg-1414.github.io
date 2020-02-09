// DOM ELEMENTS
// Header
let toggleThemeBtn, modalContainer, playAudioBtn, closeBtn
// Home
let toggleTextBtn
// Audio 
let audioEl
const audioFiles = [
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/CharlestheFirst-The-Reach-01-Kir.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/CharlestheFirst-The-Reach-02-Mer.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/CharlestheFirst-The-Reach-03-Pro.mp3'
]
let playlistIndex = 0

document.addEventListener("DOMContentLoaded", function() {
  // DOM ELEMENTS
  // Header
  toggleThemeBtn = document.querySelector('#toggle-theme')
  modalContainer = document.querySelector('#modal-container')
  playAudioBtn = document.querySelector('#play-audio')
  closeBtn = document.querySelector('#close-modal')
  // Home
  toggleTextBtn = document.getElementsByClassName('display-btn')
  // Audio 
  audioEl = document.querySelector('#audio')

  // EVENT LISTENERS
  toggleThemeBtn.onclick = toggleTheme
  modalContainer.onclick = closeModal
  closeBtn.onclick = closeModal
  playAudioBtn.onclick = playAudio

  // Home Page Event Listeners 
  if (toggleTextBtn.length > 0) {
    for (let i = 0; i < toggleTextBtn.length; i++) {
      toggleTextBtn[i].onclick = handleCollapsibleContent
    }
  }

  audioEl.onended = function() {
    incrementPlaylistIndex() 
    audioSetup(playlistIndex)
  }
})

function toggleTheme() {
  const body = document.body
  if (body.classList.contains('light-theme')) {
    body.classList = ''
    body.classList += 'dark-theme'
  } else {
    body.classList = ''
    body.classList += 'light-theme'
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
