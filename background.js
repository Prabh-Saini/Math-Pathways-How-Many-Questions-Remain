function execute() {
	// check
	if (!window.location.href.includes("/work")) {
		return alert("This extension is meant to be used in Math Pathways. If this is a error, please submit an issue on Github (github.com/Prabh-Saini/howmanyquestionsremain)."); 
	}

	// variables
	let x = "progress-bar-item pb-", 
   	    y = "-bg ng-star-inserted",
   	    z = document.getElementsByClassName(`${x}grey${y}`).length;

	// extension onClick
	if (remaining) {
		alert(`Remaining questions: ${z}\nTotal questions: ${document.getElementsByClassName(`${x}blue${y}`).length + z}`)
	} else {
		throw new Error("Error: Unable to retrieve data.");
		return alert(`Error! Unable to retrieve data.`);
	}
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: execute
  });
});
