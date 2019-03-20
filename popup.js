

function $(id) { return document.getElementById(id); }
var addbar = null;

function toggleoff() {
  chrome.tabs.query({ active: true }, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      // Send a request to the content script.
      chrome.storage.sync.set({ "addbar": false });
      chrome.tabs.sendMessage(tabs[i].id, { action: "addremove" });
      $("turnoff").style.display = "none";
      $("turnon").style.display = "";
    }
  }
  );
}
function toggleon() {
  chrome.tabs.query({ active: true }, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      // Send a request to the content script.
      chrome.storage.sync.set({ "addbar": true });
      chrome.tabs.sendMessage(tabs[i].id, { action: "addremove" });
      $("turnoff").style.display = "";
      $("turnon").style.display = "none";
    }
  }
  );
}
document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get(['addbar'], function (items) {
    if (items['addbar']) { addbar = items['addbar']; } if (!addbar) addbar = false;
    if (addbar == true) {
      $("turnoff").style.display = "";
      $("turnon").style.display = "none";
    } else {
      $("turnoff").style.display = "none";
      $("turnon").style.display = "";
    }
  });

  // Toggle on
  $("turnoff").addEventListener('click', function () { toggleoff() });
  // Toggle off
  $("turnon").addEventListener('click', function () { toggleon() });

});