/*!
 * jQuery simple lightbox Plugin 1.0
 *
 *
 * Copyright 2015 Emma Vihlsson
 * Released under the MIT license
 */

(function($){
    $.fn.simplelightbox = function(){
        
        return this.each(function() {
        
            $(this).find('img').click(function () {
                  $('body').css('overflow-y', 'hidden');
            // Display the overlay
                $('<div id="simplelightbox_overlay"></div>')
                    .css('top', $(document).scrollTop())
                    .css('opacity', '0')
                    .animate({opacity: '0.9'}, 'slow')
                    .appendTo('body')
                    .click(function () {
                        removeLightbox();
                    });
            // Create the lightbox container
            $('<div id="simplelightbox_container"></div>')
                    .hide()
                    .appendTo('body');
            // Display the image on load
                  $('<img>')
                    .attr('src', $(this).attr('src'))
                    .load(function () {
                        positionLightboxImage();
                    })
                    .click(function () {
                        removeLightbox();
                    })
                    .appendTo('#simplelightbox_container');
                return false;
            });
            function positionLightboxImage() {
                var top = ($(window).height() - $('#simplelightbox_container').height()) / 2,
                    left = ($(window).width() - $('#simplelightbox_container').width()) / 2;
                    $('#simplelightbox_container')
                    .css({
                        top: top + $(document).scrollTop(),
                        left: left
                    })
                    .fadeIn();
            }
            function removeLightbox() {
                $('#simplelightbox_overlay, #simplelightbox_container')
                    .fadeOut('slow', function () {
                    $(this).remove();
                    $('body').css('overflow-y', 'auto'); // show scrollbars!
                    });
            }
        
        });
        
    };
})(jQuery);
    
