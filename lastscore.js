let totalscore = localStorage.getItem("totalscore");
let button = document.getElementById("buttonId");
let messagechange = document.getElementById("message_end")
const totals = document.getElementById('totals')

//score//
let end = 'Score: ' + totalscore
totals.textContent = end

if (totalscore < 0){
  messagechange.textContent = "Better luck next time!"
}
else if (totalscore == 0){
  messagechange.textContent = "Even steven"
}


// Attach a click event to the button
button.addEventListener("click", function(){
  // Use the `window.location` object to redirect the user to a different page
  window.location = "index.html";
});
