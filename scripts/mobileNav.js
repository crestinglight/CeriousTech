window.addEventListener("load", function(){
	var burgerIcon = document.getElementsByClassName("burger");

	for(var i = 0 ; i < burgerIcon.length; i++){
		burgerIcon[i].addEventListener("click", dropDown);
	}
	
	var dropDownContainer = document.getElementsByClassName("mobileNav")[0];
	var dropDownMenu = document.getElementsByClassName("js-mobileUL")[0];

	function dropDown(){
		if (dropDownMenu.style.maxHeight === "" || dropDownMenu.style.maxHeight === "0px"){
			
			showDropDown();
		}

		else {
			hideDropDown();
		}
	}

	function showDropDown(){
		dropDownContainer.style.overflow = "visible";
		dropDownMenu.style.maxHeight = "500px";
	}

	function hideDropDown(){
		dropDownMenu.style.maxHeight = "0px";
		hideBorder();
	}

	function hideBorder(){
		setTimeout(function () {
			dropDownContainer.style.overflow = "hidden";
		}, 500);
	}
});