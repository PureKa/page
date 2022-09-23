// var time = new Date()
// var gio = time.getHours()
// var phut = time.getMinutes()
// var giay = time.getSeconds()
// // 
// var ngay = time.getDay()
// var thang = time.getMonth()
// var nam = time.getFullYear() 
// document.getElementById("time").innerHTML = time 
// + "<br>"
// + "(" + gio + ":" + phut + ":" + giay + ")"
// +"<br>"
// + ngay+ "/" + thang+ "/" + nam
// 
// var round = Math.round(1.5) //làm tròn lên trên chấm 5
// var floor = Math.floor(1.8) // không làm trong lên
// var ceil = Math.ceil(1.1) // làm tròn lên chỉ cần chấm 1 

// console.log(round)
// console.log(floor)
// console.log(ceil)



    clearInterval( function() {
        var time = new Date()
        var random = Math.floor((Math.random() * 10) + 1)
        document.getElementById('time').innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        document.getElementById('random').innerHTML = random
    }, 1000);


function ngungtime1() {
    setInterval( function() {
        var time = new Date()
        var random = Math.floor((Math.random() * 10) + 1)
        document.getElementById('time').innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        document.getElementById('random').innerHTML = random
    }, 1000);
    
}