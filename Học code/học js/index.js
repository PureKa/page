
function timestart() {
  setInterval(() => {
  var time = new Date()
  document.getElementById("time").innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
  }, 1000);
}

  



