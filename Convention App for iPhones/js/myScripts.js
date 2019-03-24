//Navigation Bar
function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display == "block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}

//Schedule Day Tabs
function openDay(evt, dayName) {
	var i, tabcontent, tablinks;
	
	//get elements in tabcontent class and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	//get elements in tablinks class and remove current class
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" current", "");
	}
	
	//show current tab, add current class to button that opened the tab
	document.getElementById(dayName).style.display = "block";
	evt.currentTarget.className += " current";
}

//Workshop and Speaker Tabs
function openChapter(evt, chapterName) {
	var i, wsTabcontent, wsLinks;
	
	//get elements in wsTabcontent class and hide them
	wsTabcontent = document.getElementsByClassName("wsTabcontent");
	for (i = 0; i < wsTabcontent.length; i++) {
		wsTabcontent[i].style.display = "none";
	}
	
	//get elements in wsLinks class and remove current class
	wsLinks = document.getElementsByClassName("wsLinks");
	for (i = 0; i < wsLinks.length; i++) {
		wsLinks[i].className = wsLinks[i].className.replace(" current", "");
	}
	
	//show current tab, add current class to button that opened the tab
	document.getElementById(chapterName).style.display = "block";
	evt.currentTarget.className += " current";
}