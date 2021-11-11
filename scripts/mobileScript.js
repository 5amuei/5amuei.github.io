var hexOpenHolder = "hex1Img";
var menuToggle = 0;

window.onload = function() {
    showPage();
    document.getElementById("toggleMenuButton").addEventListener("click", function() {
        showMenu();
        loadImg(hexOpenHolder);
    })
    document.getElementById("hex1Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex1Img");
    })
    document.getElementById("hex2Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex2Img");
    })
    document.getElementById("hex3Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex3Img");
    })
    document.getElementById("hex4Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex4Img");
    })
    document.getElementById("hex5Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex5Img");
    })
    document.getElementById("hex6Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex6Img");
    })
    document.getElementById("hex7Button").addEventListener("click", function() {
        showMenu();
        loadImg("hex7Img")
    })
}

function showMenu() {
    var menuHTMLicon = '<img src="https://github.com/5amuei/5amuei.github.io/raw/master/assets/icons/menu.png" id="chevron">';
    var menuHTMLstring = '<b>CLOSE MENU</b>';
    if (menuToggle == 0) {
        document.getElementById("toggleMenuButton").innerHTML = menuHTMLstring;
        document.getElementById("toggleMenuButton").style.left = "0vw";
        document.getElementById("mainMenuId").classList.add("expanded");
        document.getElementById("mainMenuId").classList.remove("collapsed");
        document.getElementById("menuBackground").style.opacity = "1";
        menuToggle = 1;
    } else {
        document.getElementById("toggleMenuButton").innerHTML = menuHTMLicon;
        document.getElementById("toggleMenuButton").style.left = "-15vw";
        document.getElementById("mainMenuId").classList.add("collapsed");
        document.getElementById("mainMenuId").classList.remove("expanded");
        document.getElementById("menuBackground").style.opacity = "0";
        menuToggle = 0;
    }
}

function showPage() {
    document.getElementById("hiddenBody").style.display = "none";
    document.getElementById("hexLoader").style.display = "none";
    document.getElementById("hexLoaderText").style.display = "none";
};

function loadImg(hexImageString) {
    hideImg(hexOpenHolder);
    document.getElementById(hexImageString).style.display = "initial";
    document.getElementById(hexImageString).style.zIndex = 0;
    hexOpenHolder = hexImageString;
    document.getElementById(hexImageString).addEventListener("scroll", function() {
        scrolled(hexImageString);
    })
}

function scrolled(hexImageString) {
    hexImageEnd = hexImageString + "End";
    hexBounceScrolled = hexImageString + "Scroll";
    var endPoints = document.getElementById(hexImageEnd).getBoundingClientRect();
    if (window.innerHeight > endPoints.top - 1) {
        document.getElementById(hexBounceScrolled).style.display = "none";
    } else {
        document.getElementById(hexBounceScrolled).style.display = "initial";
    }
}

function hideImg(hexImageString) {
    document.getElementById(hexImageString).style.display = "none";
    document.getElementById(hexImageString).style.zIndex = 0;
}

function showPhone() {
    var myHTMLstring = '<i class="fas fa-mobile-alt"></i>'
    if (document.getElementById("phoneNumber").innerText == " Phone") {
        document.getElementById("phoneNumber").innerHTML = myHTMLstring;
        document.getElementById("phoneNumber").innerHTML += " 341-345-5516";
    }
}