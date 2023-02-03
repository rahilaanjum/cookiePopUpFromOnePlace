$(document).ready(function() {
    let locationPath = window.location.href;
    if(locationPath.indexOf("/search.html")>-1)
    {
        let searchQuery = locationPath.split("?")[1];
        let searchValue = searchQuery.split("=")[1];
        let htmlText = "<div><span>Hello world!</span><a href='https://documentation.infineon.com/html/psoc6/search.html?searchQuery="+searchValue+"' traget='_blank'>Click Here to Redirect to Infinoen Community</a></div>";
        $(htmlText).insertBefore("footer");
    }
});
