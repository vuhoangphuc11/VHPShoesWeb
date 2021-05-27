
        function them(button) {
            var row = button.parentElement.parentElement.cloneNode(true);
            var btnXoa = row.getElementsByTagName("button")[0];
            btnXoa.innerText = "Xóa";
            btnXoa.setAttribute('onclick', 'xoa(this)');

            document.getElementById("cart").appendChild(row);

            tinhTong();
        }

        function xoa(button) {
            var row = button.parentElement.parentElement;
            document.getElementById("cart").removeChild(row);

            tinhTong();
        }

        function tinhTong() {
            var cart = document.getElementById("cart");
            var rows = cart.getElementsByTagName("tr");
            var tong = 0;
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName("td");
                var price = cells[1].innerText.substr(1);
                tong += 1*price;
            }
            document.getElementById("tong").innerText = tong;
            if (tong == 0) {
                document.getElementById("empty").style.display = "";
                document.getElementById("not-empty").style.display = "none";
            }
            else {
            document.getElementById("empty").style.display = "none";
            document.getElementById("not-empty").style.display = "";

                if (tong > 6000) {
                    document.getElementById("tong").style.backgroundColor = "yellow";
                }
                else {
                    document.getElementById("tong").style.backgroundColor = "white";
                }
            }
        }
