f (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
 
  var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("cafilterwebworker.js");
    }
    w.onmessage = function(event) {
      //document.getElementById("result").innerHTML = event.data;
      console.log(event.data);
    };
  } else {
    //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}
  startWorker();
} else {
  // Sorry! No Web Worker support..
}
