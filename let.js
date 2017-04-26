let test =  () => {
	let name = "Nishant";
	let name2 = {};

	(function(){
		name = "Nishant2";
		console.log(name);
	})();
	
}

test();