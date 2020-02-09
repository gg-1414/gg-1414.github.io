function audioSetup(index) {
  console.log('audioEl?', audioEl)
  audioEl.src = audioFiles[index] 
  console.log(index,audioFiles[index])

  audioSrcNode = audioCtx.createMediaElementSource(audioEl)
  analyser = audioCtx.createAnalyser() 
  analyser.fftSize = 16384; 
  audioSrcNode.connect(analyser)
  analyser.connect(audioCtx.destination)
  bufferLength = analyser.frequencyBinCount
  dataArray = new Uint8Array(bufferLength)

  canvasInit() 
  audioEl.play()
  drawVisualization()
}

function canvasInit() {
  canvas.width = window.innerWidth 
  canvas.height = window.innerHeight;
}

function drawVisualization() {
  const width = canvas.width,
        height = canvas.height 

  const barWidth = (width / bufferLength) * 13 
  let barHeight, x = 0

  function renderFrame() {
    requestAnimationFrame(renderFrame)
    x = 0 

    analyser.getByteFrequencyData(dataArray)
    canvasCtx.fillStyle = 'rgba(0,0,0,0.2)'
    canvasCtx.fillRect(0, 0, width, height)

    let r, g, b
    const totalBars = 118 
    
    for (let i = 0; i < totalBars; i++) {
      barHeight = dataArray[i] * 2.5

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
      canvasCtx.fillRect(x, (height - barHeight), barWidth, barHeight)

      x += barWidth + 10 
    }
  }

  renderFrame() 
}