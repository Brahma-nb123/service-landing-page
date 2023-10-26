function myFun() {
    const checkbox = document.getElementById('flexSwitchCheckDefault')

    if (checkbox.checked) {
        document.getElementById("lio2").innerHTML = "$ 324/Yr";
        document.getElementById("lio3").innerHTML = "$ 648/Yr";
        document.getElementById("lio4").innerHTML = "$ 1728/Yr";
    }
    else {
        document.getElementById("lio2").innerHTML = "$ 30/Mo";
        document.getElementById("lio3").innerHTML = "$ 60/Mo";
        document.getElementById("lio4").innerHTML = "$ 160/Mo";
    }

}

