document.getElementById("submit_btn").addEventListener("click", function() {
    // Extract the TODO text from the input element
    let new_todo = document.getElementsByTagName("input")[0].value;

    // Check for NULL input, and log the data (for debug purposes)
    if (new_todo == "") {
        alert("New TODO cannot be empty!");
	return;
    }
    console.log("Submitted data: ", new_todo);
    
    // Create the new element
    let li  = document.createElement("li");
    let txt = document.createTextNode(new_todo);
    li.appendChild(txt);
    
    // Insert into the DOM tree
    document.getElementById("list").appendChild(li);
    document.getElementsByTagName("input")[0].value = "";

});

// A helper function to insert some elements (for testing)
function insert_elements(str, count) {
  for (var i = 0; i < count; i++) {
    let li  = document.createElement("li");
    let txt = document.createTextNode(str);
    li.appendChild(txt);
    document.getElementById("list").appendChild(li);
  }
}

// Sets up event handlers, along with certain UI elements.
function init_page() {
  // Associate each element in the list with a closing button
  var myNodelist = document.getElementsByTagName("LI");
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Register the event handler for marking TODOs as done
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Register the event handler for deleting TODOs
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Setup the page :-)
init_page();

