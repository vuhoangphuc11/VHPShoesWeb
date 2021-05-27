function cau2() {
    //1. lấy lại dữ liệu của textbox
    var username = document.forms[0].txtUsername.value;
    var password = document.forms[0].txtPassword.value;

    //2. kiểm tra dữ liệu
    if (username == "") {
        //3. thông báo lỗi
        alert("UserName không được để trống");
        return false; // kết thúc 
    }
    if (password == "") {
        //4. thông báo lỗi
        alert("password không được để trống");
        return false; // kết thúc 
    }

    else{  alert("Đăng nhập thành công");
    return true;
    }  
}