var connect = 'try '

function connection() {
    connect += '.';
    postMessage(connect);
    setTimeout("connection()", 1000);
}

connection();