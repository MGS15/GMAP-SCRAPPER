(() => {
	console.log("test 5");
	chrome.runtime.onMessage.addListener((object, sender, response) => {
		console.log("test 6");
		const { type } = object;

		if (type === "NEW")
		{
			// Handle the "NEW" message here
		}
	});
})();