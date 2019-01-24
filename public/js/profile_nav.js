(function(){
    $(document).ready(function () {
        $("ul.parent .main-button").click(function () {
            $("ul.child").toggle();
        });
    });
})();