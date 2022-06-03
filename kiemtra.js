function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("cccd").value;
    var p2 = document.getElementById("demo").value;
    var p3 = document.getElementById("book_pick_date").value;
    var p4 = document.getElementById("book_off_date").value;
    var p5 = document.getElementById("sdth").value;
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập số CCCD/CMND");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng nhập loại xe");
    return false;
    }
    if(p3 == "") {
    alert("Vui lòng nhập ngày thuê");
    return false;
    }
    if(p4 == "") {
    alert("Vui lòng nhập ngày trả");
    return false;
    }
    if(p5 == "") {
    alert("Vui lòng nhập số điện thoại");
    return false;
    }
    
}