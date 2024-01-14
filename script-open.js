
function next() {
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
  <button class="btn" onclick="alert()"> Submit </button>
  </div>
 `;

}


// function for submit
function alert() {
  document.getElementById("login").
  innerHTML = `
<h3>
Congratulation you have an account
</h3>
<button class="btn">
<a href="index-open-acc Account.html" class="java-innner-link-html">
open
</a>
</button>
  `;
}


// function for login
function text() {
  document.getElementById("form").
innerHTML = `

<div id="output">
 <div>
  <label for="email"> Account Name</label> <br>
 <input type="text" name="email" id="input" placeholder="Account Name" > <br>
 <p id="error" class="alert">Email cannot be empty</p>
 </div>
  <div>
  <label for="email">Account Password</label> <br>
 <input type="password" name="email" id="input" placeholder="........" > <br>
 <p id="error" class="alert">Email cannot be empty</p>
 </div>

  <div>
    <label for="password">Phone Number</label><br>
    <input type="number" name="password" placeholder="01234567890" id="emailInput" required maxlength="15" minlength="4"> <br>
    <p id="emailError" class="alert">Password cannot be empty</p>
  </div>
  <button class="btn" onclick="ben()"> Submit </button>
  </div>
  `;
}
// function for entries
function ben() {
  document.getElementById("output").
innerHTML = `
<div id="load">
<h3>please wait for a fee mintues we accessing your account</h3>
<button class="btn">
<a href="index-open-acc Account.html" class="java-innner-link-html">
open
</a>
</button>
</div>
`;
}

