//Enter domain of site to search.
var domainroot="www.paneeolio.com"

function Gsitesearch(curobj){
curobj.q.value="site:"+domainroot+" "+curobj.qfront.value
}