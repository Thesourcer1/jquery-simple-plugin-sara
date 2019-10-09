(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.simple_plugin = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            colors: {
                bgColor: "white",
                color: "black",
            }

        };

        const opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {

            $(el).css("background-color", opts.colors.bgColor);
            $(el).css("color", opts.colors.color);

        });

    };
    var moreInfo = function (hidden, trigger) {
        $(document).ready(function () {
            $(hidden).hide();
            $(trigger).click(function () {
                $(hidden).toggle();
            });
        });
    };
    var haunted = new moreInfo('.message', '.ghost');

})(jQuery);