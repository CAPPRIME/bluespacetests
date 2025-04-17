function openGame(url) {
    var win = window.open();
    var iframe = win.document.createElement('iframe');
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    
    // Set allowfullscreen attribute and allow fullscreen access
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("allow", "fullscreen");
    
    win.document.body.appendChild(iframe);
}
