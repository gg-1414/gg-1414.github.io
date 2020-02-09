function handleCollapsibleContent() {
  const content = this.closest('.content').querySelector('.collapsible-content')

  if (this.classList.contains('active')) {
    // remove active class from button & content
    this.classList.remove('active')
    content.classList.remove('active')
    this.classList += ' unactive'
  } else {
    // add active class to button & content
    this.classList.remove('unactive')
    this.classList += ' active'
    content.classList += ' active'

  }
}
