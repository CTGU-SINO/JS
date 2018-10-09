var utils = (function () {
    return {
        win: function (attr, value) {
            if (typeof value === 'undefined') {
                return document.documentElement[attr] || document.body[attr]
            } else {
                document.documentElement[attr] = value;
                document.body[attr] = value;
            }
        },
        getCss: function (curEle, attr) {
            var val = null, reg = null;
            if ('getComputedStyle' in window) {
                val = window.getComputedStyle(curEle, null)[attr];
            } else {
                if (attr === 'opacity') {
                    val = curEle.currentStyle['filter'];
                    reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                    val = reg.test(val) ? reg.exec(val)[1] / 100 : 1
                } else {
                    val = curEle.currentStyle[attr];
                }
            }
            reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/i;
            return reg.test(val) ? parseFloat(val) : val;
        },
        offset: function (curEle) {
            var totalLeft = null,
                totalTop = null,
                par = curEle.offsetParent;
            totalLeft += curEle.offsetLeft;
            totalTop += curEle.offsetTop;
            while (par) {
                totalLeft += par.clientLeft;
                totalTop += par.clientTop;

                totalLeft += par.offsetLeft;
                totalTop += par.offsetTop;

                par = par.offsetParent;
            }
            return {left: totalLeft, top: totalTop}
        }
    }
})();