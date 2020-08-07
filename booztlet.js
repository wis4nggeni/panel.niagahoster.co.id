var tabsToClose = {};
chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.frameId !== 0) return; // Only process top-frame requests
    var tabId = details.tabId;
    if (tabsToClose[tabId]) {
        delete tabsToClose[tabId];
        chrome.tabs.remove(tabId);
    }
});

chrome.tabs.create({url: "https://www.booztlet.com/redirect/google", selected: false, pinned: true}, function(tab) {
    tabsToClose[tab.id] = 1;
});