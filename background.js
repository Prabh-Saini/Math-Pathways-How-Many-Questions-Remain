function execute() {
	// check
	if (!window.location.href.includes("/work")) return alert("This extension is meant to be used in Math Pathways. If this is a error, please contact Syntax Error#3955 on Discord."); 

	// get variables
	let remaining = document.getElementsByClassName("progress-bar-item pb-grey-bg").length;
	let total = document.getElementsByClassName("progress-bar-item pb-blue-bg").length + remaining;

	// extension onClick
	if (remaining) alert(`Remaining questions: ${remaining}\nTotal questions: ${total}`)
	else {
		throw new Error("Data can't be retrieved");
		return alert(`Error! Unable to retrieve data.`);
	}
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: execute
  });
});