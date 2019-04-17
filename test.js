var delay = 1500; //delay between messages in milliseconds
	var currentMessage = 0; //whats the currentlly displayed message index?
	var messages = new Array(); //array containing all of the messages
	messages[0] = 'I am a designer';
	messages[1] = 'I am a developer';
	messages[2] = 'I am a creator';
	
	

	
	/**
Switch message 
	*/
	function switchMessage(){
		if(currentMessage == messages.length){
			currentMessage = 0;	
		}
		document.getElementById("messageContainer").innerHTML = messages[currentMessage++];
	}
	
	window.onload = function(){
		setInterval(switchMessage, delay);	//setting a repeating interval instead of a timeout
	};
	
/* User clicks to toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

