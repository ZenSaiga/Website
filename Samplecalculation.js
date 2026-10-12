function getSum() {
    const fNum = parseInt(document.getElementById("txtFirst").value, 10);
    const sNum = parseInt(document.getElementById("txtSecond").value, 10);

    var result = fNum + sNum;
    
    document.getElementById("txtResults").value = result;
    alert("The sum of " + fNum + " and " + sNum + " is: " + result);
}