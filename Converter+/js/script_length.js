// REGISTER EVENT FOR INPUT BOX + SELECT
var inputBox = document.getElementById("number")
var unitSelect = document.getElementById("unitSelect")

inputBox.addEventListener("input", updateNumbers)
unitSelect.addEventListener("input", updateNumbers)

function updateNumbers() {
    document.getElementById("nm").innerHTML = "HALLO"
}
