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


