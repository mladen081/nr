window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").style.maxWidth = "80%";
    } else {
        document.getElementById("logo").style.maxWidth = "90%";
    }

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 80) {
        document.getElementById("nd").style.backgroundColor = "#064663";
    } else {
        document.getElementById("nd").style.backgroundColor = "transparent";
    }
}