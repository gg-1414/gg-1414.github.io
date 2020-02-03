window.onload = function() {
  const toggleBtn = document.getElementsByClassName('display-btn')
 
  if (toggleBtn.length > 0) {
    console.log(toggleBtn)
    for (let i = 0; i < toggleBtn.length; i++) {
      toggleBtn[i].onclick = function(e) {
        const content = this.closest('.content').querySelector('.collapsible-content')

        if (this.classList.contains('active')) {
          // remove active class from button & content
          this.classList.remove('active')
          content.classList.remove('active')
          // set icon to down arrow
          this.querySelector('img').setAttribute('src', '../gg-1414.github.io/assets/icons/down-arrow.svg')
        } else {
          // add active class to button & content
          this.classList += ' active'
          content.classList += ' active'
          // set icon to up arrow
          this.querySelector('img').setAttribute('src', '../gg-1414.github.io/assets/icons/up-arrow.svg')
        }
      }
    }
  }
}