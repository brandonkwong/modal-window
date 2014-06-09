/*
Name: Modal Window
URI: http://brandonkwong.com/dev/modal-window
Description: An interactive modal window with form content, built to demonstrate various front-end technologies and exercise UI/IxD.
Author: Brandon Kwong
Author URI: http://brandonkwong.com
Version: 1.0.0 (Document last updated on 8-Jun-14)
*/


// Modal Window
var modalwindow = function() {

    var modal = document.querySelector('.md-window');
    var open = [].slice.call( document.querySelectorAll('.md-button') );
    var close = [].slice.call( document.querySelectorAll('.md-x, .md-overlay') );
    var ex = document.querySelector('.md-x');

    open.forEach(function(el) {
        el.addEventListener('click', function() {
            modal.classList.add('md-show');
        });
    });

    close.forEach(function(el) {
        el.addEventListener('click', function() {
            modal.classList.remove('md-show');
            ex.classList.remove('md-show');
        });
    });

    modal.addEventListener('mouseover', function() {
        ex.classList.add('md-show');
    });

    modal.addEventListener('mouseout', function() {
        ex.classList.remove('md-show');
    });

}();