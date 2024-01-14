
function next() {
	document.getElementById("form").
	innerHTML = `
  <div id="login">
 <div>
  <label for="email">  Email Address</label> <br>
 <input type="email" name="email" id="input" placeholder="example@gmail.com" > <br>
 <p id="error" class="alert">Email cannot be empty</p>
 </div>
  <div>
    <label for="password">Password</label><br>
    <input type="password" name="password" placeholder="........" id="emailInput" required maxlength="15" minlength="4"> <br>
    <p id="emailError" class="alert">Password cannot be empty</p>
  </div>
  <button class="btn" onclick="alertBtn()"> Submit </button>
  </div>
 `;

}


function next2() {
  document.getElementById("form").
  innerHTML = ` 
  <div id="login">
 <div>
  <label for="email"> Account Name</label> <br>
 <input type="text" name="email" id="input" placeholder="Account Name" required> <br>
 <p id="error" class="alert">Email cannot be empty</p>
 </div>
  <div>
  <label for="email">Account Password</label> <br>
 <input type="password" name="email" id="input" placeholder="........" required > <br>
 <p id="error" class="alert">Email cannot be empty</p>
 </div>

  <div>
    <label for="password">Phone Number</label><br>
    <input type="number" name="password" placeholder="01234567890" id="emailInput" required maxlength="15" minlength="4" required> <br>
    <p id="emailError" class="alert">Password cannot be empty</p>
  </div>
  <button class="btn" onclick="alertBtn()"> Submit </button>
  `;
}
function alertBtn() {
  document.getElementById("login").innerHTML = `<h3>
Congratulation your registration is successful
</h3>
<button class="btn">
<a  href="index-Acc.html" class="java-inter-link">
open
</a>
</button>`
}

