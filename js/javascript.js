/**
 * Còn
 * Xử lý nhập số âm ( hiện số âm khi ấn dấu trừ đầu tiên)
 * Xử lý màu khi ấn nút cộng trừ nhân chia
 */

var print = '';
var cal = '';
var oldMath = '';
var newMath = '';

function set_num(num) {

    print += num;
    document.getElementById('kq').value = print;
    cal += num;

}



function set_math(math) {
    // document.getElementById(cal[cal.length - 1]).classList.remove("");
    if (cal[cal.length - 1] != "+" && cal[cal.length - 1] != "-" && cal[cal.length - 1] != "*" && cal[cal.length - 1] != "/" && cal[cal.length - 1] != "%") {
        cal += math;
        console.log("true");
    } else {
        oldMath = cal[cal.length - 1];
       
        cal = cal.slice(0, -1);
        cal += math;
    }
    newMath = cal[cal.length - 1];
   
    oldMath = newMath;
    console.log(cal[cal.length - 1])

    print = '';

    // console.log(cal);
    // console.log(print);
}

var oldCal = cal;

function delete_each() {

    print = print.slice(0, -1);

    if (print.length > 0) {
        cal = cal.slice(0, -1);
        document.getElementById('kq').value = print;

    } else {
        cal = oldCal; // xử lý sô đầu không xóa được
    }
    document.getElementById('kq').value = print;


    // console.log(cal);
    // console.log(print);

}

function delete_all() {
    // ls = document.getElementsByClassName("system");
    // for (i = 0; i < ls.length; i++) {
    //     if (ls[i] == document.getElementsByClassName("zoom")) {
    //         ls[i].classList.remove("zoom");

    //     }
    // }

    print = '';
    cal = '';
    document.getElementById('kq').value = print;
    // console.log(cal);
    // console.log(print);
    // x = document.getElementById(newMath).classList.remove("zoom");
}

function set_result() {
    document.getElementById('kq').value = eval(cal);
   
    oldMath = newMath;
    print = '';
    cal = '';
    // console.log(cal);
    // console.log(print);
}
