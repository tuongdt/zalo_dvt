let currentStep = 1;
      const maxStep = 5;
      const steps = document.querySelectorAll(".ztrip-vong");
      const allImages = document.querySelectorAll(".ztrip-hinh-noi");
      const allBuocs = document.querySelectorAll(".ztrip-buoc");

      function updateStep(step) {
        // Cập nhật vòng tròn
        steps.forEach((el) =>
          el.classList.toggle("hien-tai", el.getAttribute("data-step") == step)
        );

        // Ẩn ảnh cũ
        allImages.forEach((img) => {
          img.classList.remove("hien-tai");
        });

        // Hiện ảnh mới
        setTimeout(() => {
          const nextImg = document.querySelector(`.ztrip-hinh-noi[data-step="${step}"]`);
          if (nextImg) {
            nextImg.classList.add("hien-tai");
          }
        }, 100); // Delay nhẹ để mượt

        // Cập nhật phần chữ tương ứng
        allBuocs.forEach((el) => {
          el.classList.remove("hien-tai");
        });
        const currentBuoc = document.querySelector(`.ztrip-buoc[data-step="${step}"]`);
        if (currentBuoc) currentBuoc.classList.add("hien-tai");
      }

      // Auto update
      setInterval(() => {
        currentStep = currentStep === maxStep ? 1 : currentStep + 1;
        updateStep(currentStep);
      }, 2000);