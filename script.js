var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["dob"] = document.getElementById("dob").value;
  formData["doj"] = document.getElementById("doj").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("theList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.dob;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.doj;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("doj").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
  document.getElementById("doj").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.dob;
  selectedRow.cells[3].innerHTML = formData.doj;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("theList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("firstName").value == "") {
    isValid = false;
    document
      .getElementById("firstNameValidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("firstNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("firstNameValidationError").classList.add("hide");
  }
  return isValid;
}
