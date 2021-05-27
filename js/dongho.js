function hienthiDongHo() 
        {
            //1. lấy ngày giờ hệ thống trên máy tính của bạn
            var ngay = new Date();

            //2. lấy ra giờ, phút, giây
            var gio = ngay.getHours();  // lấy giờ
            var phut = ngay.getMinutes();  // lấy phút
            var giay = ngay.getSeconds();  // lấy giây

            //3. Nếu gio, phut, giay mà nhỏ hơn 10 thì cộng số "0" phía trước cho đẹp
            if (gio < 10) {
                gio = "0" + gio;
            }
            if (phut < 10) {
                phut = "0" + phut;
            }
            if (giay < 10) {
                giay = "0" + giay;
            }
            //4. Hiện thị đồng hồ gio, phut , giay tại vị trị thẻ ...  <div id="dongho">
            document.getElementById("dongho").innerHTML = gio + " : " + phut + " : " + giay;

            //5. Muốn cứ 1 giay (1000mili giây) thì gọi lại hàm hienthiDongHo() để lấy giờ mới.
            //setInterval("hienthiDongHo()",1000);
            setInterval("hienthiDongHo()", 1000);
        }