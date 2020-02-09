// DOM ELEMENTS
// Header
let toggleThemeBtn, modalContainer, playAudioBtn, closeBtn
// Home
let toggleTextBtn
// Audio 
let audioEl
const audioFiles = [
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/Kirra.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Burial/Archangel.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Flume/Ezra.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Flume/Hyperreal.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Bonobo/Kerala.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Phantogram/Dont_Move.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Evil+Needle/Sunday_Morning.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Mac+Miller/I_Can_See.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Ekali/Unfaith.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Bonobo/Second_Sun.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/Mac+Miller/Good_News.mp3'
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
