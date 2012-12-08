onload = function () {
    im = document.getElementsByTagName('img');
    for (c = 0; c < im.length; c++) {
        if (im[c].className == 'out') {
            im[c].onmouseover = function () {
                makevisible(this);
            }
        }
    }
}
function makevisible(el) {
    el.className = "over";
    el.onmouseout = function () {
        el.className = "out";
    }
}