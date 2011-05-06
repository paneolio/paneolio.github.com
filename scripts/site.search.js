//Enter domain of site to search.
var domainroot="www.javascriptkit.com"

function Gsitesearch(curobj){
curobj.q.value="site:"+domainroot+" "+curobj.qfront.value
}