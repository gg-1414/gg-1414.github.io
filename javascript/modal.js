function playAudio() {
  // have player appear fixed to bottom of screen 
  audioEl.classList += 'active'

  // audio setup  
  // audio.src = audioFiles[0]
  // audio.load()
  // audio.play()

  audioSetup(playlistIndex) 
  // audio play 
}

function closeModal() {
  modalContainer.classList = ''
  modalContainer.classList += 'out'
  document.body.classList.remove('modal-active');
}

