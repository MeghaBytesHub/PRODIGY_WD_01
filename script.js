const header = document.getElementById('header');
const links = document.querySelectorAll('.header a');
function headerMouseEnter() {
    header.style.backgroundColor = '#6666669a';
    for (let link of links) {
        link.style.color = '#00fd6a';
        link.style.textDecoration = 'none';
    }
}
function headerMouseLeave() {
    header.style.backgroundColor = 'transparent';
    for (let link of links) {
        link.style.color = '#27ae60';
        link.style.textDecoration = 'none';
    }
}
function linkMouseEnter(event) {
    event.target.style.color = '#fff';
}
function linkMouseLeave(event) {
    event.target.style.color = '#00fd6a';
}

header.addEventListener('mouseenter', headerMouseEnter);
header.addEventListener('mouseleave', headerMouseLeave);

for (let link of links) {
    link.addEventListener('mouseenter', linkMouseEnter);
    link.addEventListener('mouseleave', linkMouseLeave);
}

function onScroll() {
    for (let link of links) {
        if (window.scrollY > 50) {
            link.style.color = '#00fd6a';
        } else {
            link.style.color = '#27ae60';
        }
    }
}
window.addEventListener('scroll', onScroll);