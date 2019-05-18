const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);

function progressBar(e) {
let whindowScroll = document.body.scrollTop || document.documentElement.scrollTop;
let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let per = whindowScroll / windowHeight * 100;

console.log(whindowScroll);
progress.style.width = per + '%';
}
