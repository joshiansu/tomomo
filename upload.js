chrome.browserAction.setTitle({title: 'upload'});
chrome.browserAction.setIcon({path: 'icon.png'});

// Add an event listener to the button
chrome.browserAction.onClicked.addListener(function() {
  alert("Button clicked!");
});