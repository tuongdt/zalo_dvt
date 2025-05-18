  const btn1Thang = document.getElementById("btn-1thang");
  const btn6Thang = document.getElementById("btn-6thang");
  const btn1Nam = document.getElementById("btn-1nam");

  const goiNangCao = document.getElementById("goi-nangcao");
  const goiPremium = document.getElementById("goi-premium");
  const allButtons = [btn1Thang, btn6Thang, btn1Nam];

  function updateGoi(goiElement, data) {
    goiElement.querySelector("h2").textContent = data.ten;
    goiElement.querySelector(".giatien").innerHTML = `${data.giatien} <span>đ/tháng</span>`;
    goiElement.querySelector(".tonggiatien").textContent = data.tonggia;
    
    const ul = goiElement.querySelector("ul");
    ul.innerHTML = ""; // clear cũ
    data.tinhNang.forEach(tn => {
      const li = document.createElement("li");
      li.textContent = tn;
      ul.appendChild(li);
    });
  }

  function chonGoi(thoiGian) {
  allButtons.forEach(btn => btn.classList.remove("dangchon"));
  document.getElementById(`btn-${thoiGian}`).classList.add("dangchon");

  // Xóa class goi-thang1 trước khi set lại
  goiNangCao.classList.remove("goi-thang1");
  goiPremium.classList.remove("goi-thang1");

  if (thoiGian === "1thang") {
    goiNangCao.style.display = "flex";
    goiPremium.style.display = "none";
    goiNangCao.classList.add("goi-thang1");

    updateGoi(goiNangCao, {
      ten: "Nâng cao",
      giatien: "10.000",
      tonggia: "(129.000đ/tháng)",
      tinhNang: [
       "Tương tác cơ bản và nâng cao",
        "Có sẵn 2.000 tin Tư vấn ngoài khung",
        "Khách hàng nhận 4 tin Truyền thông/tháng",
        "5 tổng đài viên",
        "15 lượt xuất bản nội dung",
      ]
    });

  } else if (thoiGian === "6thang") {
    goiNangCao.style.display = "flex";
    goiPremium.style.display = "flex";

    updateGoi(goiNangCao, {
      ten: "Nâng cao",
      giatien: "99.000",
      tonggia: "(594.000đ/6 tháng)",
      tinhNang: [
        "Tương tác cơ bản và nâng cao",
        "2.000 tin Tư vấn ngoài khung",
        "4 tin Truyền thông/tháng",
        "5 tổng đài viên",
        "15 lượt xuất bản nội dung",
        "Có thể gia hạn và mua lại"
      ]
    });
    updateGoi(goiPremium, {
      ten: "Premium",
      giatien: "399.000",
      tonggia: "(2.394.000đ/6 tháng)",
      tinhNang: [
        "Tương tác cơ bản và nâng cao",
        "9.000 tin Tư vấn ngoài khung",
        "4 tin Truyền thông/tháng",
        "10 tổng đài viên",
        "30 lượt xuất bản nội dung",
        "Có thể gia hạn và mua lại",
        "Ưu tiên trải nghiệm tính năng mới"
      ]
    });

  } else if (thoiGian === "1nam") {
    goiNangCao.style.display = "flex";
    goiPremium.style.display = "flex";

    updateGoi(goiNangCao, {
      ten: "Nâng cao",
      giatien: "89.000",
      tonggia: "(Áp dụng mã ZOA24D12P10 giảm 10% còn 1.068.000đ/năm*)",
      tinhNang: [
        "Tương tác cơ bản và nâng cao",
        "4.000 tin Tư vấn ngoài khung",
        "6 tin Truyền thông/tháng",
        "5 tổng đài viên",
        "30 lượt xuất bản nội dung",
        "Gia hạn linh hoạt"
      ]
    });
    updateGoi(goiPremium, {
      ten: "Premium",
      giatien: "349.000",
      tonggia: "(Áp dụng mã ZOA24D12P10 giảm 10% còn 4.308.000đ/năm*)",
      tinhNang: [
        "Tương tác cơ bản và nâng cao",
        "12.000 tin Tư vấn ngoài khung",
        "8 tin Truyền thông/tháng",
        "15 tổng đài viên",
        "60 lượt xuất bản nội dung",
        "Ưu tiên CSKH & tính năng mới"
      ]
    });
  }
}

  // Gán sự kiện
  btn1Thang.addEventListener("click", () => chonGoi("1thang"));
  btn6Thang.addEventListener("click", () => chonGoi("6thang"));
  btn1Nam.addEventListener("click", () => chonGoi("1nam"));

  // Mặc định khởi động là 6 tháng
  chonGoi("6thang");
