// this is the background code...

// listen for our browerAction to be clicked
//chrome.browserAction.onClicked.addListener(function (tab) {
//	// for the current tab, inject the "inject.js" file & execute it
//	chrome.tabs.executeScript(tab.ib, {
//		file: 'inject.js'
//	});
//});
// console.log('hi')
var flag = 0;
chrome.browserAction.onClicked.addListener(function () {
	flag = !flag;
	chrome.tabs.query({}, function (tab) {
		console.log(tab);
		for (let i = 0; i < tab.length; i++) {
			if (flag == 1) {
				chrome.tabs.executeScript(tab[i].id, { file: 'jquery-3.2.1.min.js' });
				chrome.tabs.executeScript(tab[i].id, {
					file: 'inject.js'
				});
			} else {
				console.log("flag==>" + flag);
				chrome.tabs.executeScript(tab[i].id, {
					code: '$("#company-wrapper").html("")',
				});
			}
		}
	});
});

chrome.tabs.onUpdated.addListener(function (tabId, changedInfo, tab) {
	if (flag == 1) {
		chrome.tabs.executeScript(null, { file: 'jquery-3.2.1.min.js' });
		chrome.tabs.executeScript(tab.id, {
			file: 'inject.js'
		});

	}
});

