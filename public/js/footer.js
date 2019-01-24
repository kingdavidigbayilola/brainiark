(function(window, document) {
    const cright = document.getElementById('copyright');
    const datenow = new Date().getFullYear();
    cright.innerHTML = `&copy ${datenow} Brainiark, Inc.`;

    const countDown = new Date("Dec 25, 2018 00:00:00").getTime();
})(window, document);