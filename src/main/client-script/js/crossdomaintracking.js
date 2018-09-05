function openWindow(link) {
    _gaq.push(function() {
        var tracker = _gat._getTrackerByName(); //add name param if needed
//        console.log(["helloworld", link.href, link.id || ""].join("; "));
        tracker._trackEvent("helloworld", link.name || link.href, link.id || "");

        if(link.target=="_blank") {
//            window.open(tracker._getLinkerUrl(link.href));
            window.open(link.href);
        } else {
//            window.location = tracker._getLinkerUrl(link.href);
            window.location = link.href;
        }
    });
    return false;
}

$(document).ready(function(){
    // Creating custom :external selector
    $.expr[':'].external = function(obj){
        return !obj.href.match(/^mailto\:/) &&
            !obj.href.match(/^javascript\:/) &&
            /*(obj.href.match(/http:\/\/jelastic\.com/) ||
             obj.href.match(/http:\/\/blog.jelastic\.com/)) &&*/
            (obj.hostname != location.hostname);
    };

    // Add 'external' CSS class to all external links
    $('a:external').addClass('external');
    $('a:external').click(function(){
        return openWindow(this);
    });

//    $("form").submit(function(){
//        if(this.action.match(location.hostname)!=null && this.action.match(/^http|https\:/)){
//            _gaq.push(['_linkByPost', this]);
//        }
//    });
});

