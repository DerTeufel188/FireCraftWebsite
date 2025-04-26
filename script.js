window.onload = function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // 2 Sekunden Ladebildschirm
};