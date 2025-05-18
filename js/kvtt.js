const tabs = document.querySelectorAll('.tab-muc');
const doanVan = document.querySelector('.doan-van');
const anhDienThoai = document.querySelector('.anh-dien-thoai');
const anhQR = document.querySelector('.anh-qr');

const duLieu = {
  "nhan-tin": {
    text: "Nhắn tin hai chiều với khách hàng từng có tương tác với Zalo OA. Hình thức tin nhắn đa dạng nhằm phục vụ linh hoạt nhiều mục đích giao tiếp.",
    phoneImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_mobile1.png",
    qrImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_qr1.png"
  },
  "goi-thoai": {
    text: "Gọi thoại miễn phí với khách hàng qua Zalo OA, giúp tương tác nhanh chóng và hiệu quả.",
    phoneImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_mobile2.png",
    qrImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_qr2.png"
  },
  "menu-chatbot": {
    text: "Tạo menu và chatbot trả lời tự động để hỗ trợ khách hàng mọi lúc mọi nơi.",
    phoneImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_mobile3.png",
    qrImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_qr3.png"
  },
  "noi-dung": {
    text: "Lan tỏa thông tin về sản phẩm và dịch vụ đến khách hàng thông qua xuất bản nội dung dạng bài viết và video. Kết hợp với tính năng Nhắn tin để gửi nội dung trực tiếp đến 100% người quan tâm.",
    phoneImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_mobile4.png",
    qrImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_qr4.png"
  },
  "quan-ly-nhom": {
    text: "Quản lý các nhóm khách hàng khác nhau để tối ưu hoá nội dung và chăm sóc.",
    phoneImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_mobile5.png",
    qrImg: "https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/feature_qr5.png"
  }
};

tabs.forEach(button => {
  button.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('dang-chon'));
    button.classList.add('dang-chon');

    const tabKey = button.getAttribute('data-tab');
    const data = duLieu[tabKey];

    // Ẩn nội dung
    doanVan.classList.add('an');
    anhDienThoai.classList.add('an');
    anhQR.classList.add('an');

    // Sau 400ms, đổi nội dung rồi hiện lại
    setTimeout(() => {
      doanVan.textContent = data.text;
      anhDienThoai.src = data.phoneImg;
      anhQR.src = data.qrImg;

      doanVan.classList.remove('an');
      anhDienThoai.classList.remove('an');
      anhQR.classList.remove('an');
    }, 400);
  });
});

  const menuLinks = document.querySelectorAll(".menu li a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // Ngăn chặn việc nhấn vào submenu vẫn active cha
      if (this.closest(".submenu")) return;

      menuLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

