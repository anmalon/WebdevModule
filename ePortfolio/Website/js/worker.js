var t = 0;

function timedCount() {
    t++;  
    setTimeout("timedCount()",500);
    console.log(t + ' seconds have passed')
}

timedCount();

// NOT WORKING
// let timeout;

// self.onmessage = function(e) {
//     if (e.data === "start") {
//     timeout = setTimeout(() => {
//         self.postMessage("timeout");
//     }, 300000);} 
//     else if (e.data === "stop") {
//     clearTimeout(timeout);
// }};