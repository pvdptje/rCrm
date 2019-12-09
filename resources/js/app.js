/*!
* Shards Dashboards v1.1.0
* Copyright 2011-2018 DesignRevision
* SEE LICENSE FILE
*/



(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, (function () { 'use strict';





    if (typeof Chart === 'undefined') {
        throw new Error('Shards Dashboard requires the Chart.js library in order to function properly.');
    }

    window.ShardsDashboards = window.ShardsDashboards ? window.ShardsDashboards : {};

    $.extend($.easing, {
        easeOutSine: function easeOutSine(x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        }
    });


    $(document).ready(function () {

        /**
         * Dropdown adjustments
         */

        var slideConfig = {
            duration: 270,
            easing: 'easeOutSine'
        };

        // Add dropdown animations when toggled.
        $(':not(.main-sidebar--icons-only) .dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slideConfig);
        });

        $(':not(.main-sidebar--icons-only) .dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slideConfig);
        });

        /**
         * Sidebar toggles
         */
        $('.toggle-sidebar').click(function (e) {
            $('.main-sidebar').toggleClass('open');
        });

        /**
         * Avatar upload
         */
        $('input[name=avatar]').change(function(e){
            var file = e.target.files[0];
            var form = new FormData;
            var imgId = $(this).data('img');
            var img = $(imgId);
            var avatarErrorDiv = $("#avatar-error");

            avatarErrorDiv.addClass('d-none');
            form.append('avatar', file);
            form.append('_token', $(this).data('token'));

            $.post({
                url: '/upload/user/avatar',
                data: form,
                processData: false,
                contentType: false
            }).done(function(response){
                img.attr('src', response);
            }).fail(function(error){
                var errorMessage = error.responseJSON.errors.avatar[0];
                avatarErrorDiv.html('<p class="mb-0">'+ errorMessage +'</p>');
                avatarErrorDiv.removeClass('d-none');
            });
        });

        /**
         * Logo upload
         *
         * @todo Decide wether to wanna make this more generic,
         * get ajax target also from data attribute
         */

        $('input[name=logo]').change(function(e){
            var file = e.target.files[0];
            var form = new FormData;
            var imgId = $(this).data('img');
            var img = $(imgId);
            var avatarErrorDiv = $("#logo-error");


            if(file){
                avatarErrorDiv.addClass('d-none');
                form.append('logo', file);
                form.append('_token', $(this).data('token'));

                $.post({
                    url: '/upload/account/logo',
                    data: form,
                    processData: false,
                    contentType: false
                }).done(function(response){
                    img.attr('src', response);
                }).fail(function(error){
                    var errorMessage = error.responseJSON.errors.logo[0];
                    avatarErrorDiv.html('<p class="mb-0">'+ errorMessage +'</p>');
                    avatarErrorDiv.removeClass('d-none');
                });
            }

        });

        /**
         * Confirm elements
         */

        $('.confirm').click(function(e){
            var message = $(this).data('msg');
            if(!confirm(message)){
                e.preventDefault();
            }
        });

    });

})));

