document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');

    let isValid = true;

    document.getElementById("firstNameError").style.display = firstName ? "none" : "inline";
    document.getElementById("lastNameError").style.display = lastName ? "none" : "inline";
    document.getElementById("emailError").style.display = email ? "none" : "inline";
    document.getElementById("passwordError").style.display = password ? "none" : "inline";
    document.getElementById("sexError").style.display = sex ? "none" : "inline";
    document.getElementById("reasonError").style.display = reason ? "none" : "inline";

    if (!firstName || !lastName || !email || !password || !sex || !reason) {
      return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("sex", sex.value);
    localStorage.setItem("reason", reason);

    window.location.href = "profile.html";
  });