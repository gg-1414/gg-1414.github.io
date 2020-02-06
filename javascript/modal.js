const audioFiles = [
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/CharlestheFirst-The-Reach-01-Kir.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/CharlestheFirst-The-Reach-02-Mer.mp3',
  'https://audio-dls.s3.us-east-2.amazonaws.com/CharlestheFirst/CharlestheFirst-The-Reach-03-Pro.mp3'
]

function handleModal() {
  const btn = document.querySelector('#music-modal-btn')
  const modalContainer = document.querySelector('#modal-container')
  const playBtn = document.querySelector('#play-audio')
  const closeBtn = document.querySelector('#close-modal')

  const audio = document.querySelector('#audio')

  btn.onclick = function() {
    modalContainer.classList = ''
    modalContainer.classList += 'sketch-in'
    document.body.classList += 'modal-active'
  }
  
  modalContainer.onclick = function() {
    closeModal()
  }

  playBtn.onclick = function() {
    // have player appear fixed to bottom of screen 
    audio.classList += 'active'

    // audio setup  
    audio.src = audioFiles[0]
    audio.load()
    audio.play()

    audioSetup() 
    // audio play 

  }

  closeBtn.onclick = function() {
    closeModal()
  }

  function closeModal() {
    modalContainer.classList = ''
    modalContainer.classList += 'out'
    document.body.classList.remove('modal-active');
  }
}


