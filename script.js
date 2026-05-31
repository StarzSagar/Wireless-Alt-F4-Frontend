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







