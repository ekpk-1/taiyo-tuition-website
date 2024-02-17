
function sendMail() {
  // var params = {
  //   fullname: document.getElementById("fullname").value,
  //   phone: document.getElementById("phone").value,
  //   email: document.getElementById("email").value,
  //   message: document.getElementById("message").value
  // };

  fullname = document.getElementById("fullname").value,
  phone = document.getElementById("phone").value,
  email = document.getElementById("email").value,
  message = document.getElementById("message").value


  if(!fullname || !phone || !email || !message){
    // alert("Please fill out all required fields.");
    document.getElementById("error-message").innerText = "Please fill out required fields.*";
    return;
  }
  document.getElementById("error-message").innerText = "";

  captchaResponse = grecaptcha.getResponse();

  if(!captchaResponse.length > 0){
    throw new Error("reCaptcha error");
  }

  var params = {
    fullname: fullname,
    phone: phone,
    email: email,
    message: message
  };

  const serviceID = "service_8zlhupj";
  const templateID = "template_1v4q8ph";

  emailjs
    .send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("fullname").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        grecaptcha.reset();
        console.log(res)
        alert("message sent successfully");
    })
    .catch((err) => console.log(err));
}