chrome.tabs.onUpdated.addListener((tabId, tab) => {
	console.log("test 1")
	if (tab.url && tab.url.includes("google.com/maps/"))
	{
		console.log("test 2")
		chrome.tabs.sendMessage(tabId, {
			type: "NEW",
		})
	}
})