
var emailKey = "f9db8acf7c05571f9822550bbb412c20";
var numKey = "b3b8e697ed9b35333936edc0adaff2d6";

document.getElementById("verifySubmit").addEventListener
                                ("click", function(event){
  event.preventDefault();
  const email = document.getElementById("email").value;
  if(email === "")
    return;
  console.log(email);

  const phone = document.getElementById("phone").value;
  if(phone === "")
    return;
  console.log(phone);

// url for email verification
var url = "https://apilayer.net/api/check?access_key=" + emailKey + "&email=" + email + "&format=1";
var url2 = "http://apilayer.net/api/validate?access_key=" + numKey + "&number=1" + phone + "&format=1";

// fetches email verification
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let emailResults = "Your email address from ";
    emailResults += "<strong>" + json.domain + "</strong>";
    let isValid = json.format_valid;
    if(isValid) {
      emailResults += " is in a <strong>valid</strong> format.";
    } else {
      emailResults += " is in an <strong>invalid</strong> format.";
    }
    document.getElementById("emailResults").innerHTML = emailResults;
    // document.getElementById("weatherResults").style.fontFamily = "Impact,Charcoal,sans-serif";
  });

  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let phoneResults = "Your <strong>" + json.line_type + "</strong> phone number from ";
      phoneResults += "<strong>" + json.carrier + "</strong>";
      let isValid = json.valid;
      if(isValid) {
        phoneResults += " is <strong>valid</strong>.";
      } else {
        phoneResults += " is <strong>invalid</strong>.";
      }
      document.getElementById("phoneResults").innerHTML = phoneResults;
    });

    // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
