function headerHtml(){
    var htmlStr;
    
    htmlStr = "<table border=\"1\" align=\"center\"><tr>"
            + "<td><a href=\"index.html\">トップページ</a></td>"
            +  "<td><a href=\"event.html\">ゲームイベント紹介</a></td>"
            +   "<td><a href=\"kousin.html\">更新履歴</a></td></tr></table>"
    document.write(htmlStr);
    
}
function headerSubHtml(){
    htmlStr = "<table border=\"1\" align=\"center\"><tr>"
            + "<td><a href=\"../index.html\">トップページ</a></td>"
            +  "<td><a href=\"../event.html\">ゲームイベント紹介</a></td>"
            +   "<td><a href=\"../kousin.html\">更新履歴</a></td></tr></table>"
    document.write(htmlStr);
    
}