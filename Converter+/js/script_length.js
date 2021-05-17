// REGISTER EVENT FOR INPUT BOX + SELECT
var inputBox = document.getElementById("number")
var unitSelect = document.getElementById("unitSelect")

inputBox.addEventListener("input", updateNumbers)
unitSelect.addEventListener("input", updateNumbers)

// ADD COPY TO CLIPBOARD
document.querySelectorAll('.cube').forEach(item => {
  item.addEventListener('click', function (e) {
    if (e.target.className.split(' ')[0] == "cube") {
        e.target.childNodes[1]
    } else {
        e.target.parentElement.childNodes[1]
    }
    document.execCommand("copy");
  })
})

function updateNumbers() {
    let inputNumber = parseFloat(inputBox.value)
    let meter = inputNumber * parseFloat(unitSelect.value)
    
    
    
    document.getElementById("nm").innerHTML = (parseFloat(meter) * 1000000000).toFixed(5)
    document.getElementById("µm").innerHTML = (parseFloat(meter) * 1000000).toFixed(5)
    document.getElementById("mm").innerHTML = (parseFloat(meter) * 1000).toFixed(5)
    document.getElementById("cm").innerHTML = (parseFloat(meter) * 100).toFixed(5)
    document.getElementById("dm").innerHTML = (parseFloat(meter) * 10).toFixed(5)
    document.getElementById("m").innerHTML = (parseFloat(meter) * 1).toFixed(5)
    // ----------------------------------------------------------------------
    document.getElementById("hm").innerHTML = (parseFloat(meter) / 100).toFixed(5)
    document.getElementById("km").innerHTML = (parseFloat(meter) / 1000).toFixed(5)
    // ----------------------------------------------------------------------
    document.getElementById("in").innerHTML = (parseFloat(meter) * 39.37).toFixed(5)
    document.getElementById("ft").innerHTML = (parseFloat(meter) * 3.28).toFixed(5)
    document.getElementById("yd").innerHTML = (parseFloat(meter) * 1.0936).toFixed(5)
    // ----------------------------------------------------------------------
    document.getElementById("mi").innerHTML = (parseFloat(meter) / 1609.344).toFixed(5)
}
