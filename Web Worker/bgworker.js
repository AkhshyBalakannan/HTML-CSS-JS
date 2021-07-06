var connecting = 'try'

function connection() {
    connecting += '.';
    postMessage(connecting);
    setTimeout("connection()", 1000);
}

connection();