$('a[href ^= magnet]').click(function() {
    $(this).attr("href", "http://d.miwifi.com/d2r/?url=" + Base64.encodeURI($(this).attr("href")));
});