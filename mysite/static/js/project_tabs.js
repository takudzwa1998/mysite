document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabLinks.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove 'active-tab' class from all tabs
            tabLinks.forEach(link => link.classList.remove("active-tab"));
            
            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove("active-pane"));

            // Add 'active-tab' to the clicked tab
            this.classList.add("active-tab");

            // Show the corresponding tab pane
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active-pane");
        });
    });
});

