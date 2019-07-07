var docEle = document.documentElement;
var dpr = window.devicePixelRatio || 1;

function setBodyFontSize() {
    if (document.body) {
        document.body.style.fontSize = (12 * dpr) + 'px';
    } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
}
setBodyFontSize();

function setRemUnit() {
    var rem = docEle.clientWidth / 10;
    docEle.style.fontSize = rem + 'px';
}
setRemUnit();

window.addEventListener('resize', setRemUnit);
window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        setRemUnit();
    }
});