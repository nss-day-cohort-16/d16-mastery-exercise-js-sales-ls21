document.getElementById('btn').addEventListener('click', checkVals);

function checkVals (e) {
	// console.log("function(check)");
	if (document.getElementById('main').value === "" || document.getElementById('sub').value === ""){
		console.log("You must enter a value in both fields.");

	}

	else if (e.keyCode === 13 && document.getElementById('main').value === "" || document.getElementById('sub').value === "") {
		console.log("You must enter a value in both fields.");
	}

	else {

		var treeObj = {
		height: document.getElementById('main').value,
		character: document.getElementById('sub').value,
		runTimes: document.getElementById("main").value
		}

		tree(treeObj);
	}
	
}

var filler = "";
function tree(treeObj) {
	// var outputChar = treeObj.character;
	for (var i = 0; i < treeObj.runTimes; i++){
		var repeat = (i * 2) + 1;
		var row = "";
		for (var x =0; x < treeObj.height; x++){
			row += " "; 
		}
		for (var j = 0; j < repeat; j++){
			row += treeObj.character;
		} // end of inside loop
		console.log(row);
		treeObj.height--

	} // end of outside loop
} // end of function
	

