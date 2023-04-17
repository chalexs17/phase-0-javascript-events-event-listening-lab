//function addingEventListener() {
//}

function addingEventListener() {
    const button = document.getElementById('button'); // Get the element with ID "button"
    button.addEventListener('click', function(event) { // Bind event listener to "click" event
      console.log('Button clicked:', event.target); // Add your event handling logic here
    });
  }
  