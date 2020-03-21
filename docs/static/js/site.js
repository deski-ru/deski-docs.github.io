function setCurrentMenuItem() {
    var url = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    var items = document.getElementsByClassName('nav-link');

    for (var item of items) {
        var href = item.getAttribute('href');
        if (href === url) {
            item.style.fontWeight = 'bold';
            item.style.textDecoration = 'underline';
        }
    }
}

setCurrentMenuItem();