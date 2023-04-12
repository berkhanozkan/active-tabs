// Tarayıcıda açık olan tüm sekmelerin URL'lerini al ve popup.html içinde listele
chrome.tabs.query({ currentWindow: true }, function (tabs) {
  var tabList = document.getElementById("tabList");
  tabs.forEach(function (tab) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = tab.url;
    link.target = "_blank";
    link.textContent = tab.url;
    listItem.appendChild(link);
    tabList.appendChild(listItem);
  });
});