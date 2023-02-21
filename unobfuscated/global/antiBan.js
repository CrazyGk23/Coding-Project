var j = document.createElement('iframe')
j.style.display = 'none'
document.body.appendChild(j)
window.console.log = j.contentWindow.console.log.bind(window);
window.alert - j.contentWindow.alert.bind(window);
alert('Anti-Ban has been activated.')

var original_open = XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open = function () {
  if (!arguments[1].includes('suspend')) {
    original_open.apply(this, arguments)
  } else {
    console.log('Avoided ban')
  }
}
