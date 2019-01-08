(function(window, document) {
    const cright = document.getElementById('copyright');
    const datenow = new Date().getFullYear();
    cright.innerHTML = `&copy; 2018-${datenow} Brainiark, All rights reserved`;

    const countDown = new Date("Dec 25, 2018 00:00:00").getTime();
})(window, document);