(function($){
    $.fn.plugin = function(options){
        options = $.extend({
            //optional arguments
        }, options);

        return this.each(function(){
            //apply code to each item that matched the selector
        });
    };
})(jQuery);

(function($){
    var cache = [];
    $.preLoadImages = function(){
        $(arguments).each(function(){
            var cacheImage = document.createElement('img');
            cacheImage.src = this;
            cache.push(cacheImage);
        });
    };
})(jQuery);
