// toggle for open close of sidebar


const toggleBtn = document.querySelector(".sidebar-toggle");

const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {

        toggleBtn.textContent = "▶";

    } else {

        toggleBtn.textContent = "◀";

    }

});



// code of switching between various tabs in topbar

const explorerTab = document.getElementById("explorer-tab");
const screencastTab = document.getElementById("screencast-tab");
const shellTab = document.getElementById("shell-tab");
const audioTab = document.getElementById("audio-tab");
const configTab = document.getElementById("config-tab");

const explorerPage = document.getElementById("explorer-page");
const screencastPage = document.getElementById("screencast-page");
const shellPage = document.getElementById("shell-page");
const audioPage = document.getElementById("audio-page");
const configPage = document.getElementById("config-page");

function hideAllPages(){

    explorerPage.style.display = "none";
    screencastPage.style.display = "none";
    shellPage.style.display = "none";
    audioPage.style.display = "none";
    configPage.style.display = "none";

}

explorerTab.addEventListener("click", () => {

    hideAllPages();

    explorerPage.style.display = "block";

    clearActiveTabs();

    explorerTab.classList.add("active-tab");

});

shellTab.addEventListener("click", () => {

    hideAllPages();

    shellPage.style.display = "block";

    clearActiveTabs();

    shellTab.classList.add("active-tab");

});

audioTab.addEventListener("click", () => {

    hideAllPages();

    audioPage.style.display = "block";

    clearActiveTabs();

    audioTab.classList.add("active-tab");

});

configTab.addEventListener("click", () => {

    hideAllPages();

    configPage.style.display = "block";

    clearActiveTabs();

    configTab.classList.add("active-tab");

});

screencastTab.addEventListener("click", () => {

    hideAllPages();

    screencastPage.style.display = "block";

    clearActiveTabs();

    screencastTab.classList.add("active-tab");

});








// active tab highlight code

const tabs = document.querySelectorAll(".tool-tab");

function clearActiveTabs(){

    tabs.forEach(tab => {

        tab.classList.remove("active-tab");

    });

}


// code for shell input and output

const shellInput = document.querySelector(".shell-input");

shellInput.addEventListener("keydown", function(event){

    if(event.key === "Enter" && !event.shiftKey){

        event.preventDefault();

        console.log("Run Command");

    }

});

// mute button code -- highlight for every button class - toggle-btn

const toggleButtons =
document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active-control");

    });

});



// device card selection code change tabs

const deviceCards =
document.querySelectorAll(".device-card");

deviceCards.forEach(card => {

    card.addEventListener("click", () => {

        deviceCards.forEach(c => {

            c.classList.remove(
                "selected",
                "selected-online",
                "selected-offline"
            );

        });

        const status =
        card.dataset.status;

        card.classList.add("selected");

        if(status === "Online"){

            card.classList.add(
                "selected-online"
            );

        }else{

            card.classList.add(
                "selected-offline"
            );

        }

        document.getElementById(
            "overview-name"
        ).textContent =
        "Device Name: " +
        card.dataset.name;

        document.getElementById(
            "overview-ip"
        ).textContent =
        "IP Address: " +
        card.dataset.ip;

        document.getElementById(
            "overview-status"
        ).textContent =
        "Status: " +
        card.dataset.status;

        document.getElementById(
            "selected-device-name"
        ).textContent =
        card.dataset.name;

        document.getElementById(
            "selected-device-info"
        ).textContent =
        card.dataset.ip +
        " • " +
        card.dataset.status;

    });

});








