$(document).ready(function() {
    let locationPath = window.location.href;
    if(locationPath.indexOf("/search.html")>-1)
    {
        let searchQuery = locationPath.split("?")[1];
        let searchValue = searchQuery.split("=")[1];
        let htmlText = "<div><span>Hello world!</span><a href='https://community.infineon.com/t5/custom/page/page-id/GlobalSearch#q="+searchValue+"&t=All&sort=relevancy' traget='_blank'>Click Here to Redirect to Infinoen Community</a></div>";
        $(htmlText).insertBefore("footer");
    }
});
