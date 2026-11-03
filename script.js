// Runs after the page (and jQuery) have loaded
$(document).ready(function () {

    // 1. Show the current year in the footer
    $("#year").text(new Date().getFullYear());

    // 2. Highlight the current page in the navigation bar
    //    On GitHub Pages the home page URL can end with "/", so treat that as index.html
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") {
        currentPage = "index.html";
    }

    $(".nav-links a").each(function () {
        if ($(this).attr("href") === currentPage) {
            $(this).addClass("active").attr("aria-current", "page");
        }
    });

    // 3. Print the resume when the button is clicked
    $("#printBtn").on("click", function () {
        window.print();
    });

});
