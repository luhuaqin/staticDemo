let hands = document.getElementsByClassName("hand")
let weekday = document.getElementsByClassName("weekday")[0]
let daySpan = weekday.getElementsByTagName("span")[0]
let weekSpan = weekday.getElementsByTagName("span")[1]
let time = document.getElementsByClassName("time")[0]
// 时间格式化
formatFn = function(time) {
  return formatTime = time < 10 ? ("0" + time) : time
}
// 获取当前时间
let clock = function() {
  let nowTime = new Date();
  let day = formatFn(nowTime.getDate());
  let week = nowTime.getDay();
  let hour = formatFn(nowTime.getHours());
  let minute = formatFn(nowTime.getMinutes());
  let seconds = formatFn(nowTime.getSeconds())
  // day = day < 10 ? "0" + day : day
  const weeks = ["日", "一", "二", "三", "四", "五", "六"]
  daySpan.innerHTML = day
  weekSpan.innerHTML = weeks[week]
  time.innerHTML = hour + ":" + minute + ":" + seconds

  let secondsRot = seconds * 6 - 90;
  hands[2].style.transform = "rotate(" + secondsRot + "deg)"
  let minuteRot = minute * 6 + (seconds/10) - 90;
  hands[1].style.transform = "rotate(" + minuteRot + "deg)"
  let hourRot = hour * 30 + (minute/2) - 90;
  hands[0].style.transform = "rotate(" + hourRot + "deg)"
}
clock()
setInterval(clock, 1000)
