function handleRegister() {
  var roomCost;
  var amenitiesCost;
  //assigning values
  document.getElementById("customer-name").innerHTML = document.getElementById("customerName").value;
  document.getElementById("check-in-date").innerHTML = document.getElementById("checkInDate").value;
  document.getElementById("days").innerHTML = document.getElementById("noOfDays").value;
  document.getElementById("persons").innerHTML = document.getElementById("noOfpersons").value;
  document.getElementById("advance").innerHTML = document.getElementById("advance-amount").value;

  //extracting values from radio input
  var radios = document.getElementsByName("roomType");
  console.log(123, radios);
  var selectedValue;
  for (var radio of radios) {
    if (radio.checked) {
      selectedValue = parseInt(radio.value);
      break;
    }
  }
  if (selectedValue) {
    document.getElementById("room-type").innerHTML = (selectedValue === 2500 ? "Delux Room" : "Suite Room");
  }

  roomCost = selectedValue ? selectedValue : "";
  //extracting values from checkbox
  var ac = document.getElementById("ac");
  var locker = document.getElementById("locker");
  if (ac.checked && locker.checked) {
    document.getElementById("amenities").innerHTML = "A/C & Locker";
    amenitiesCost = parseInt(document.getElementById("ac").value) + parseInt(document.getElementById("locker").value);
  }
  else if (ac.checked && !locker.checked) {
    document.getElementById("amenities").innerHTML = "A/C";
    amenitiesCost = parseInt(document.getElementById("ac").value);
  }
  else if (!ac.checked && locker.checked) {
    document.getElementById("amenities").innerHTML = "Locker";
    amenitiesCost = parseInt(document.getElementById("locker").value);
  }
  else {
    document.getElementById("amenities").innerHTML = "";
    amenitiesCost = "";
  }

  //total amount calculation
  var total = (roomCost + amenitiesCost) * (document.getElementById("noOfDays").value);
  if ((document.getElementById("noOfpersons").value > 0)) {
    document.getElementById("total").innerHTML = ((document.getElementById("noOfpersons").value) >= 1 && (document.getElementById("noOfpersons").value) <= 2 ? total : total + ((document.getElementById("noOfpersons").value) - 2) * 1000);
  }
  var totalAmount = (document.getElementById("noOfpersons").value) >= 1 && (document.getElementById("noOfpersons").value) <= 2 ? total : total + ((document.getElementById("noOfpersons").value) - 2) * 1000;

  //balance amount
  var advanceAmount=  document.getElementById("advance-amount").value;
  var balance = totalAmount - advanceAmount;
  console.log(123,balance);
  if (balance > 0) {
    document.getElementById("balance").innerHTML = balance;
  }
};

function handleAdvanceAmount() {
  var advanceAmount=  document.getElementById("advance-amount").value;
  if(advanceAmount){
    document.getElementById("registerBtn").disabled = false;
  }
}