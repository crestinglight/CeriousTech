window.addEventListener("load", function(){
	var burgerIcon = document.getElementsByClassName("burger")[0];
	burgerIcon.addEventListener("click", dropDown);

	var dropDownContainer = document.getElementsByClassName("mobileNav")[0];
	var dropDownMenu = document.getElementsByClassName("js-mobileUL")[0];
	debugger;

	function dropDown(){
		if (dropDownMenu.style.maxHeight === "" || dropDownMenu.style.maxHeight === "0px"){
			dropDownContainer.style.overflow = "visible";
			showDropDown();
		}

		else {
			hideDropDown();
			dropDownContainer.style.overflow = "hidden";
		}
	}

	function showDropDown(){
		
		dropDownMenu.style.maxHeight = "300px";
	}

	function hideDropDown(){
		
		dropDownMenu.style.maxHeight = "0px";
	}
});