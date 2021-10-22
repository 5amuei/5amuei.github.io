window.onload = function() {
    document.getElementById("hex1Button").addEventListener("click", function() {
        loadImg("hex1Img", "hex1Button", "hex1ButtonBackgroundTop", "hex1ButtonBackgroundBottom")
    })
    document.getElementById("hex2Button").addEventListener("click", function() {
        loadImg("hex2Img", "hex2Button", "hex2ButtonBackgroundTop", "hex2ButtonBackgroundBottom")
    })
    document.getElementById("hex3Button").addEventListener("click", function() {
        loadImg("hex3Img", "hex3Button", "hex3ButtonBackgroundTop", "hex3ButtonBackgroundBottom")
    })
    document.getElementById("hex4Button").addEventListener("click", function() {
        loadImg("hex4Img", "hex4Button", "hex4ButtonBackgroundTop", "hex4ButtonBackgroundBottom")
    })
    document.getElementById("hex5Button").addEventListener("click", function() {
        loadImg("hex5Img", "hex5Button", "hex5ButtonBackgroundTop", "hex5ButtonBackgroundBottom")
    })
    document.getElementById("hex6Button").addEventListener("click", function() {
        loadImg("hex6Img", "hex6Button", "hex6ButtonBackgroundTop", "hex6ButtonBackgroundBottom")
    })
    document.getElementById("hex7Button").addEventListener("click", function() {
        loadImg("hex7Img", "hex7Button", "hex7ButtonBackgroundTop", "hex7ButtonBackgroundBottom")
    })
}

function loadImg(hexImageString, hexButtonString, hexButtonBackgroundTopString, hexButtonBackgroundBottomString) {
    if (document.getElementById(hexImageString).style.display == "none") {
        document.getElementById(hexImageString).classList.remove("fade-out");
        document.getElementById(hexImageString).style.zIndex = 100;
        document.getElementById(hexImageString).classList.add("fade-in");
        document.getElementById(hexImageString).style.display = "initial";
        document.getElementById(hexButtonBackgroundTopString).style.background = "#2e2e2e";
        document.getElementById(hexButtonBackgroundBottomString).style.background = "white";
        document.getElementById(hexButtonString).style.zIndex = 110;

    } else {
        document.getElementById(hexImageString).classList.remove("fade-in");
        document.getElementById(hexImageString).classList.add("fade-out");
        document.getElementById(hexButtonBackgroundTopString).style.background = "#33D1FF";
        document.getElementById(hexButtonBackgroundBottomString).style.background = "#2e2e2e";
        document.getElementById(hexButtonString).style.zIndex = 10;
        setTimeout(function() {
            document.getElementById(hexImageString).style.display = "none";
            document.getElementById(hexImageString).style.zIndex = 0;
        }, 950);
    }
}