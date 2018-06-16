function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("href", cssFile);
    newlink.setAttribute("media", "print");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    window.print();
}