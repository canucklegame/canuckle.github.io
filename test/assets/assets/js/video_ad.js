
const init = () => {
  console.log('Hello World');

  const showAlert = (message) => {
    alert(message);
  }

  const showVideoAd = () => {
    let message = {isGameFinish: true};
    parent.postMessage(message, 'https://www.canucklegame.ca');
  }  

  window._showAlert = showAlert;
  window._showVideoAd = showVideoAd;

}

window.onload = () => {
  init();
}