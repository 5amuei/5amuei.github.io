window.onload = function() {
    showPage();
    document.getElementById("hex0Button").addEventListener("click", function() {
        loadImg("hex1Img", "hex0Button", "hex1ButtonBackground")
    })
    document.getElementById("hex1Button").addEventListener("click", function() {
        loadImg("hex1Img", "hex1Button", "hex1ButtonBackground")
    })
    document.getElementById("hex2Button").addEventListener("click", function() {
        loadImg("hex2Img", "hex2Button", "hex2ButtonBackground")
    })
    document.getElementById("hex3Button").addEventListener("click", function() {
        loadImg("hex3Img", "hex3Button", "hex3ButtonBackground")
    })
    document.getElementById("hex4Button").addEventListener("click", function() {
        loadImg("hex4Img", "hex4Button", "hex4ButtonBackground")
    })
    document.getElementById("hex5Button").addEventListener("click", function() {
        loadImg("hex5Img", "hex5Button", "hex5ButtonBackground")
    })
    document.getElementById("hex6Button").addEventListener("click", function() {
        loadImg("hex6Img", "hex6Button", "hex6ButtonBackground")
    })
    document.getElementById("hex7Button").addEventListener("click", function() {
        loadImg("hex7Img", "hex7Button", "hex7ButtonBackground")
        dawnOfTime();
    })
    document.getElementById("timeline0Sign").addEventListener("click", function() {
        timeTravel("timeline0")
    })
    document.getElementById("timeline1Sign").addEventListener("click", function() {
        timeTravel("timeline1")
    })
    document.getElementById("timeline2Sign").addEventListener("click", function() {
        timeTravel("timeline2")
    })
    document.getElementById("timeline3Sign").addEventListener("click", function() {
        timeTravel("timeline3")
    })
    document.getElementById("timeline4Sign").addEventListener("click", function() {
        timeTravel("timeline4")
    })
    document.getElementById("timeline5Sign").addEventListener("click", function() {
        timeTravel("timeline5")
    })
    document.getElementById("timeline6Sign").addEventListener("click", function() {
        timeTravel("timeline6")
    })
    document.getElementById("timeline7Sign").addEventListener("click", function() {
        timeTravel("timeline7")
    })
    document.getElementById("timeline8Sign").addEventListener("click", function() {
        timeTravel("timeline8")
    })
}

function showPage() {
    document.getElementById("hiddenBody").style.display = "none";
    document.getElementById("hexLoader").style.display = "none";
    document.getElementById("hexLoaderText").style.display = "none";
};

var hexTextHolder;

function loadImg(hexImageString, hexButtonString, hexButtonBackgroundString) {
    hexTextBackground = hexButtonString + "Text";
    if (document.getElementById(hexTextBackground).innerText !== "BACK") { hexTextHolder = document.getElementById(hexTextBackground).innerText; }
    hexButtonBackgroundImgString = "https://github.com/5amuei/5amuei.github.io/raw/master/assets/icons/" + hexButtonBackgroundString + ".png";
    if (document.getElementById(hexImageString).style.display == "none") {
        document.getElementById(hexTextBackground).innerText = "BACK";
        document.getElementById(hexButtonBackgroundString).src = "https://github.com/5amuei/5amuei.github.io/raw/master/assets/icons/back.png";
        document.getElementById(hexButtonBackgroundString).style.backgroundColor = "white";
        if (hexButtonString == "hex4Button") { document.getElementById(hexButtonBackgroundString).style.backgroundColor = "#2e2e2e2e"; }
        document.getElementById(hexTextBackground).style.backgroundColor = "#81d2f8ce";
        document.getElementById(hexImageString).classList.remove("fade-out");
        document.getElementById(hexImageString).style.zIndex = 100;
        document.getElementById(hexImageString).classList.add("fade-in");
        document.getElementById(hexImageString).style.display = "initial";
        document.getElementById(hexButtonString).style.zIndex = 110;

    } else {
        document.getElementById(hexImageString).classList.remove("fade-in");
        document.getElementById(hexImageString).classList.add("fade-out");
        document.getElementById(hexButtonString).style.zIndex = 10;
        if (document.getElementById(hexTextBackground).innerText == "START") {
            document.getElementById(hexButtonString).style.display = "none";
        }
        document.getElementById(hexTextBackground).innerText = hexTextHolder;
        document.getElementById(hexButtonBackgroundString).src = hexButtonBackgroundImgString;
        document.getElementById(hexButtonBackgroundString).style.backgroundColor = "#81d2f8ce";
        document.getElementById(hexTextBackground).style.backgroundColor = "transparent";
        setTimeout(function() {
            document.getElementById(hexImageString).style.display = "none";
            document.getElementById(hexImageString).style.zIndex = 0;
        }, 950);
    }
}

var myHTMLstring = '<i class="fas fa-mobile-alt"></i>'

function showPhone() {
    if (document.getElementById("phoneNumber").innerText == " Phone") {
        document.getElementById("phoneNumber").innerHTML = myHTMLstring;
        document.getElementById("phoneNumber").innerHTML += " 341-345-5516";
    }
}

function dawnOfTime() {
    document.getElementById("timeTruck").style.transform = "translate(0px)";
    var timeToHide = document.getElementsByClassName("timelineShow");
    while (timeToHide.length > 0) {
        timeToHide[0].classList.add("timelineHidden");
        timeToHide[0].classList.remove("timelineShow");
    }
    var activeSign = document.getElementsByClassName("timelineSignActive");
    var j;
    for (j = 0; j < activeSign.length; j++) {
        activeSign[j].classList.remove("timelineSignActive");
    }
    document.getElementById("timeline0Sign").classList.add("timelineSignActive");
    var dawnOfShow = document.getElementsByClassName("timeline0");
    for (i = 0; i < dawnOfShow.length; i++) {
        dawnOfShow[i].classList.add("timelineShow")
        dawnOfShow[i].classList.remove("timelineHidden")
    }
}

function timeTravel(timeZone) {
    var signID = timeZone + 'Sign';
    var truckPositionStart = window.getComputedStyle(document.getElementById('timeline0Sign')).right;
    var truckPosition = window.getComputedStyle(document.getElementById(signID)).right;
    var truckPositionNew = parseInt(truckPositionStart) - parseInt(truckPosition);
    tPNString = "translate(" + truckPositionNew + "px)"
    document.getElementById("timeTruck").style.transform = tPNString;

    var timeToHide = document.getElementsByClassName("timelineShow");
    var timeToShow = document.getElementsByClassName(timeZone);
    while (timeToHide.length > 0) {
        timeToHide[0].classList.add("timelineHidden");
        timeToHide[0].classList.remove("timelineShow");
    }
    var j;
    for (j = 0; j < timeToShow.length; j++) {
        console.log(j);
        timeToShow[j].classList.remove("timelineHidden");
        timeToShow[j].classList.add("timelineShow");
    }
    var activeSign = document.getElementsByClassName("timelineSignActive");
    var k;
    for (k = 0; k < activeSign.length; k++) {
        activeSign[k].classList.remove("timelineSignActive");
    }
    document.getElementById(signID).classList.add("timelineSignActive");
}