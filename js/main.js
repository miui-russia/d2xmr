$('a[href ^= magnet]').click(function() {
    if (confirm("在小米路由器中下载？")) {
    	window.open("http://d.miwifi.com/d2r/?url=" + Base64.encodeURI($(this).attr("href")));
    	return false;
    }
});