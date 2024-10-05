document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.category-tabs ul li');
    const projectRows = document.querySelectorAll('.projects-row');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Remove 'active-tab' class from all tabs and add it to the clicked tab
            document.querySelector('.active-tab').classList.remove('active-tab');
            this.classList.add('active-tab');

            // Hide all project rows and only display the relevant one
            projectRows.forEach(row => {
                row.style.display = 'none'; // Hide all project rows
            });

            // Find the corresponding project row using data-category attribute
            const category = this.innerText.toLowerCase().replace(/\s+/g, '-');
            const activeRow = document.querySelector(`.projects-row[data-category="${category}"]`);
            activeRow.style.display = 'flex'; // Display the selected project row (flex layout)
        });
    });
});

