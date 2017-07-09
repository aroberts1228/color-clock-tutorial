function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  changeBackground(h, m, s);

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML = h+":"+m+":"+s;
  setTimeout(function(){startTime()},500);
}
