/* Since its an shared module, if the pagecount is updated on any of the
module or file shared, it will affect in all the files child of it.
Also, it may leads to clash of values associated with same variable name in another modules too.

OBJECT FACTORY IS A WAY TO GET RID OF ABOVE PROBLEM.
It allows to refer, manipulate the same pagecount variable with
diff obj names in diff modules.

pagecount = 10;

module.exports.pagecount=pagecount;
*/

module.exports = function(){
    return{
        pagecount : "",
        pagesort: "ASC"
    }
}