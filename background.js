function execute() {
	// variables
	let blue = document.getElementsByClassName("progress-bar-item pb-blue-bg ng-star-inserted").length,
   	    grey = document.getElementsByClassName("progress-bar-item pb-grey-bg ng-star-inserted").length,
	    total = blue + grey;
	
	// verify
	if (!window.location.href.includes("mpclass.com/work")) {
		return alert("This extension is meant to be used in Math Pathways. If this is a error, please submit an issue on Github (github.com/Prabh-Saini/howmanyquestionsremain)."); 
	}


	// extension onClick
	if (remaining) {
		alert(`Remaining questions: ${grey}\nTotal questions: ${total}`)
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
