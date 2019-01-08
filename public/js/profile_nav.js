(function(){
    $(document).ready(function () {
        $("ul.parent .main-button").click(function () {
            $("ul.child").toggle();
        });
    });

    // $(this).find('ul.child').slideDown(400)
    // $(this).find('ul.child').hide(400);
    //TODO: when something does not work it can't go to the next 
    // const footerRight = document.querySelector('.footer-right');
    // const dateNow = new Date().getFullYear();
    // footerRight.innerHTML = `&copy; ${dateNow} Brainiark`;
})();