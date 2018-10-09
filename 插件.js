(function ($) {
    var Factory = function (element, options) {
        this.init(element, options);
    };

    Factory.prototype = {
        init: function (element, options) {
            this.$element = $(element);
        }
    };

    console.log($.fn);
    $.fn.bootstrapPaginator = function (option) {
        console.log(option);
        $(this).each(function (index, item) {
            var _this = $(item),
                data = _this.data('object'),
                options = typeof(option !== Object) ? null : option;
            if (!data) {
                data = new Factory(this, options);
                console.log(data.$element);
                _this.data('object', data);
                return;
            }
        });
    };

}(window.jQuery));