!function(){
    "use strict";
    document.querySelector("main h1, main h2, main h3")&&tocbot.init({
        tocSelector:"#toc",
        contentSelector:".content",
        ignoreSelector:"[data-toc-skip]",
        headingSelector:"h1, h2, h3, h4, h5, h6",
        orderedList:!1,
        scrollSmooth:!1
    })}();