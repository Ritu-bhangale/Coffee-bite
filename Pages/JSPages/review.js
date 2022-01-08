document.addEventListener('DOMContentLoaded', function() {
    let stars = document.querySelectorAll('.star1');
    stars.forEach(function(star) { star.addEventListener('click', setRate); });

});
let rating = parseInt(document.querySelector('.stars1').getAttribute('data-rating'));
let target = stars[rating - 1];
target.dispatchEvent(new MouseEvent('click'));

function setRate(ev) {
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star1');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index) {
        if (match) {
            star.classList.remove('rated');
        } else {
            star.classList.add('rated');
        }
        if (num == 6) {
            num = 1;
        }
        if (star === span) {
            match = true;
            num = index + 1;
        }

    });

    alert("Thank you for rating us" + num);
    document.querySelector('.stars1').setAttribute('data-rating', num);
}