function audioSetup() {
  audioEl.classList += 'active'

  if (window.innerWidth >= 960) {
    audioCtx = new AudioContext()
    audioSrcNode = audioCtx.createMediaElementSource(audioEl)
    analyser = audioCtx.createAnalyser() 
    analyser.fftSize = 16384; 
    audioSrcNode.connect(analyser)
    analyser.connect(audioCtx.destination)
    bufferLength = analyser.frequencyBinCount
    dataArray = new Uint8Array(bufferLength)
  
    canvasInit() 
    drawVisualization()
  }

  document.body.classList += ' audio-visual-on'
  playAudio(playlistIndex) 
}


function playAudio(index) {
  audioEl.src = audioFiles[index] 
  audioEl.play()
}

function drawVisualization() {
  const barWidth = (canvas.width / bufferLength) * 13 
  let barHeight, x = 0

  function renderFrame() {
    requestAnimationFrame(renderFrame)
    x = 0 

    analyser.getByteFrequencyData(dataArray)

    let bgColor 

    if (document.body.classList.contains('light-theme')) {
      bgColor = 'rgba(255,255,255,0.2)'
    } else {
      bgColor = 'rgba(0,0,0,0.2)'
    }

    canvasCtx.fillStyle = bgColor
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height)

    let r, g, b
    const totalBars = canvas.width * .14 
    
    for (let i = 0; i < totalBars; i++) {
      barHeight = dataArray[i] * 2

      if (dataArray[i] > 210){ // pink
        r = 250
        g = 0 
        b = 255
      } else if (dataArray[i] > 200){ // yellow
        r = 250
        g = 255
        b = 0
      } else if (dataArray[i] > 190){ // yellow/green
        r = 204
        g = 255
        b = 0
      } else if (dataArray[i] > 180){ // blue/green
        r = 0
        g = 219
        b = 131
      } else { // light blue
        r = 0
        g = 199
        b = 255
      }

      canvasCtx.fillStyle = `rgb(${r},${g},${b})`;
      canvasCtx.fillRect(x, (canvas.height - barHeight), barWidth, barHeight)

      x += barWidth + 10 
    }
  }

  renderFrame() 
}