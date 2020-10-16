/* Dropdown's Scripts Start */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        hover:true
    });
});
/* Dropdown's Scripts End */

/* Slider's Script Start */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        height:760,
        indicators: false
    });
});
/* Slider's Script End */

/* Modal Script Start */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
}); 
/* Modal Script End */

/* Scrollspy Script Start */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});
});
/* Scrollspy Script Ends */
