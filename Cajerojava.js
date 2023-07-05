var cuentas = [
    { nombre: "Persona 1", saldo: 200 },
    { nombre: "Persona 2", saldo: 290 },
    { nombre: "Persona 3", saldo: 67 }
  ];
  
  var currentAccount;
  var passwordField = document.getElementById("passwordField");
  var passwordError = document.getElementById("passwordError");
  var balanceAmount = document.getElementById("balanceAmount");
  
  function selectAccount(accountIndex) {
    currentAccount = cuentas[accountIndex];
    document.getElementById("accountSelection").style.display = "none";
    document.getElementById("passwordInput").style.display = "block";
  }
  
  function verifyPassword() {
    var password = passwordField.value;
  
    if (password === "1234") { // Reemplaza "1234" por el password correcto
      passwordError.style.display = "none";
      passwordField.value = "";
      document.getElementById("passwordInput").style.display = "none";
      document.getElementById("options").style.display = "block";
    } else {
      passwordError.style.display = "block";
    }
  }
  
  function showBalance() {
    balanceAmount.textContent = "Saldo actual: $" + currentAccount.saldo;
    document.getElementById("options").style.display = "none";
    document.getElementById("balance").style.display = "block";
  }
  
  function showDepositForm() {
    document.getElementById("options").style.display = "none";
    document.getElementById("depositForm").style.display = "block";
  }
  
  function showWithdrawalForm() {
    document.getElementById("options").style.display = "none";
    document.getElementById("withdrawalForm").style.display = "block";
  }
  
  function deposit() {
    var depositAmount = parseFloat(document.getElementById("depositAmount").value);
  
    if (!isNaN(depositAmount) && depositAmount >= 1 && depositAmount <= 990) {
      currentAccount.saldo += depositAmount;
      document.getElementById("depositAmount").value = "";
      showBalance();
    } else {
      alert("El monto ingresado no es válido.");
    }
  }
  
  function withdraw() {
    var withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value);
  
    if (!isNaN(withdrawalAmount) && withdrawalAmount >= 10 && withdrawalAmount <= 200 && withdrawalAmount <= currentAccount.saldo) {
      currentAccount.saldo -= withdrawalAmount;
      document.getElementById("withdrawalAmount").value = "";
      showBalance();
    } else {
      alert("El monto ingresado no es válido o excede el saldo disponible.");
    }
  }
  
  function backToOptions() {
    document.getElementById("balance").style.display = "none";
    document.getElementById("depositForm").style.display = "none";
    document.getElementById("withdrawalForm").style.display = "none";
    document.getElementById("options").style.display = "block";
  }
  
  function resetApp() {
    currentAccount = null;
    passwordField.value = "";
    passwordError.style.display = "none";
    document.getElementById("passwordInput").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("balance").style.display = "none";
    document.getElementById("depositForm").style.display = "none";
    document.getElementById("withdrawalForm").style.display = "none";
    document.getElementById("accountSelection").style.display = "block";
  }
  