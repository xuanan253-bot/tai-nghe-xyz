// =========================
// Gallery - Đổi ảnh lớn
// =========================

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        // Đổi ảnh lớn
        mainImage.src = thumb.src;

        // Xóa class active
        thumbnails.forEach((img) => {
            img.classList.remove("active");
        });

        // Thêm active cho ảnh vừa chọn
        thumb.classList.add("active");
    });

});


// =========================
// Scroll Header Effect
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =========================
// Fade In Features
// =========================

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.3
});

cards.forEach((card) => {
    observer.observe(card);
});


// =========================
// Hiệu ứng nút Mua Ngay
// =========================

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    alert("🎧 Cảm ơn bạn đã quan tâm đến Tai nghe không dây XYZ!");

});