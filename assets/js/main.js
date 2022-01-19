const menuTop = document.querySelector(".menutop");
const menuTopLogo = document.querySelector(".menutop-item--logo");
const menuTopHome = document.querySelector(".menutop-item--home");
const menuTopList = document.querySelector(".menutop-list");
const newBottomList = document.querySelector(".newbottom-left-list");
const statisticRightList = document.querySelector(".statistic-right-list");
const app = {
  newsbottom: [
    {
      caption: "Hai tên cướp nổ súng, đòi gia chủ đưa 100 tỷ đồng",
      image: "./assets/images/newbottomleft1.jpg",
      content:
        "Hai tên cướp đột nhập ngôi nhà ở huyện Thạch Thất, nổ súng ép vợ chồng gia chủ đưa 100 tỷ đồng song không được nên lấy 200 triệu đồng bỏ trốn.",
      comment: 0,
    },
    {
      caption: "'Cái sảy nảy cái ung' của Djokovic",
      image: "./assets/images/newbottomleft2.jpg",
      content:
        "Trước khi tới dự giải Australia Mở rộng, Djokovic đứng trước lựa chọn tiêm chủng hay tìm cách né tránh quy định, và dường như anh đã quyết định sai.",
      comment: 35,
    },
    {
      caption: "Việt Nam thể hiện bản sắc riêng tại Hội đồng Bảo an",
      image: "./assets/images/newbottomleft3.jpg",
      content:
        "Việt Nam đã hoàn thành tốt vai trò và thể hiện rõ bản sắc đất nước khi làm Ủy viên không thường trực HĐBA nhiệm kỳ 2020-2021, theo Bộ trưởng Ngoại giao Bùi Thanh Sơn.",
      comment: 0,
    },
    {
      caption: "Trẻ mầm non, tiểu học TP HCM dự kiến đến trường từ 14/2",
      image: "./assets/images/newbottomleft4.jpg",
      content:
        "Sở Giáo dục và Đào tạo TP HCM đề xuất tổ chức dạy trực tiếp với bậc mầm non, tiểu học và khối lớp 6, trên tinh thần tự nguyện của cha mẹ, từ 14/2.",
      comment: 144,
    },
    {
      caption: "'Tiền mất tật mang' vì ham xe sang giá rẻ",
      image: "./assets/images/newbottomleft5.jpg",
      content:
        "Nhiều chiếc xe sang sử dụng biển số giả được giao dịch với giá rẻ, nhưng khi bị CSGT phát hiện và xử phạt thì coi như mất xe.",
      comment: 12,
    },
    {
      caption: "Cục trưởng chống tham nhũng làm Thứ trưởng Công an",
      image: "./assets/images/newbottomleft6.jpg",
      content:
        "Thiếu tướng Nguyễn Văn Long (Cục trưởng Cảnh sát điều tra tội phạm về tham nhũng, kinh tế, buôn lậu, C03) được bổ nhiệm giữ chức Thứ trưởng Công an.",
      comment: 0,
    },
    {
      caption: "Triệt phá đường dây buôn bán gần 3.000 vũ khí thô sơ",
      image: "./assets/images/newbottomleft7.jpg",
      content:
        "Cảnh sát triệt phá đường dây mua bán công khai gần 3.000 vũ khí thô sơ các loại như dao, kiếm, bình xịt hơi cay, dùi cui điện...",
      comment: 0,
    },
    {
      caption: "Chứng khoán mất hơn 43 điểm",
      image: "./assets/images/newbottomleft8.jpg",
      content:
        "Nhà đầu tư bán tháo khiến 125 cổ phiếu giảm hết biên độ, VN-Index mất hơn 43 điểm và đánh dấu phiên lao dốc sâu nhất trong vòng 5 tháng qua.",
      comment: 69,
    },
    {
      caption: "Việt kiều ở Australia ủng hộ trục xuất Djokovic",
      image: "./assets/images/newbottomleft9.jpg",
      content:
        'Nhiều người Việt ở Australia đồng tình với quyết định hủy thị thực, trục xuất Djokovic của chính phủ để "bảo vệ công bằng" luật pháp.',
      comment: 0,
    },
    {
      caption: "Phú Thọ chỉnh sửa tượng hổ không đảm bảo mỹ quan",
      image: "./assets/images/newbottomleft10.jpg",
      content:
        "Đàn 5 con hổ trang trí đón xuân Nhâm Dần 2022 tại quảng trường trung tâm thị xã Phú Thọ được đưa đi chỉnh sửa vì không đảm bảo mỹ quan đô thị.",
      comment: 63,
    },
    {
      caption: "Ông Tập cảnh báo hậu quả thảm khốc khi cường quốc đối đầu",
      image: "./assets/images/newbottomleft11.jpg",
      content:
        "Chủ tịch Trung Quốc Tập Cận Bình nói các cường quốc không giải quyết được vấn đề khi đối đầu, thậm chí có thể gây hậu quả thảm khốc.",
      comment: 0,
    },
    {
      caption: "Người dân đổ đến Nhật Tân mua đào Tết",
      image: "./assets/images/newbottomleft12.jpg",
      content:
        "Các tuyến đường vào vựa đào lớn nhất Hà Nội liên tục bị ùn tắc ngày cuối tuần khi lượng người đến chụp ảnh, mua đào tăng gấp 3 - 4 lần so với bình thường.",
      comment: 0,
    },
    {
      caption: "Ôm túi tiền 1,8 tỷ đồng của người tình bỏ trốn",
      image: "./assets/images/newbottomleft13.jpg",
      content:
        "Trần Thị Anh, 41 tuổi, làm quen với người đàn ông trên mạng, rủ về nhà thuê của mình ăn nhậu rồi lén trộm túi tiền có 1,8 tỷ đồng của nạn nhân bỏ trốn.",
      comment: 0,
    },
    {
      caption: "Cựu tổng thống Ukraine về nước đối mặt cáo buộc phản quốc",
      image: "./assets/images/newbottomleft14.jpg",
      content:
        "Cựu tổng thống Poroshenko trở về Ukraine để đối mặt cáo buộc phản quốc trong vụ án mà ông cho rằng bị vu cáo.",
      comment: 0,
    },
    {
      caption: "iPhone 13 Pro Max giảm còn dưới 30 triệu đồng",
      image: "./assets/images/newbottomleft15.jpg",
      content:
        "iPhone 13 Pro Max bản 128 GB chính hãng được giảm 6,6 triệu đồng, đưa model này lần đầu xuống mức giá dưới 30 triệu đồng.",
      comment: 0,
    },
    {
      caption:
        "Lần đầu TP HCM ghi nhận ca Covid tử vong dưới 10 người một ngày",
      image: "./assets/images/newbottomleft16.jpg",
      content:
        "Thành phố ghi nhận 9 bệnh nhân Covid-19 tử vong trong ngày 16/1, bên cạnh 6 trường hợp chuyển từ tỉnh, thành khác đến.",
      comment: 19,
    },
  ],
  inflectionStatistic: [
    {
      province: "Cà Mau",
      inflectionToday: "5.769",
      deathToday: 4,
    },
    {
      province: "Hà Nội",
      inflectionToday: "2.955",
      deathToday: 14,
    },
    {
      province: "Đà Nẵng",
      inflectionToday: "924",
      deathToday: 0,
    },
    {
      province: "Hưng Yên",
      inflectionToday: "675",
      deathToday: 0,
    },
    {
      province: "Bình Định",
      inflectionToday: "640",
      deathToday: 3,
    },
    {
      province: "Hải Phòng",
      inflectionToday: "638",
      deathToday: 2,
    },
    {
      province: "Bình Phước",
      inflectionToday: "609",
      deathToday: 4,
    },
    {
      province: "Bến Tre",
      inflectionToday: "588",
      deathToday: 5,
    },
    {
      province: "Khánh Hòa",
      inflectionToday: "556",
      deathToday: 7,
    },
    {
      province: "Bắc Ninh",
      inflectionToday: "486",
      deathToday: 0,
    },
    {
      province: "Trà Vinh",
      inflectionToday: "472",
      deathToday: 4,
    },
    {
      province: "Đắk Lắk",
      inflectionToday: "413",
      deathToday: 2,
    },
    {
      province: "Thanh Hóa",
      inflectionToday: "358",
      deathToday: 0,
    },
    {
      province: "Quảng Ninh",
      inflectionToday: "346",
      deathToday: 1,
    },
    {
      province: "Vĩnh Long",
      inflectionToday: "340",
      deathToday: 11,
    },
    {
      province: "Quảng Ngãi",
      inflectionToday: "331",
      deathToday: 0,
    },
    {
      province: "Tây Ninh",
      inflectionToday: "316",
      deathToday: 10,
    },
    {
      province: "Hải Dương",
      inflectionToday: "262",
      deathToday: 0,
    },
    {
      province: "Thừa Thiên Huế",
      inflectionToday: "262",
      deathToday: 3,
    },
    {
      province: "Bắc Giang",
      inflectionToday: "259",
      deathToday: 0,
    },
    {
      province: "Vĩnh Phúc",
      inflectionToday: "253",
      deathToday: 0,
    },
    {
      province: "Thái Nguyên",
      inflectionToday: "239",
      deathToday: 0,
    },
    {
      province: "Quảng Nam",
      inflectionToday: "220",
      deathToday: 0,
    },
    {
      province: "Lâm Đồng",
      inflectionToday: "220",
      deathToday: 1,
    },
    {
      province: "TP HCM",
      inflectionToday: "204",
      deathToday: 12,
    },
    {
      province: "Nam Định",
      inflectionToday: "204",
      deathToday: 0,
    },
    {
      province: "Bà Rịa - Vũng Tàu",
      inflectionToday: "188",
      deathToday: 15,
    },
    {
      province: "Hòa Bình",
      inflectionToday: "185",
      deathToday: 2,
    },
    {
      province: "Nghệ An",
      inflectionToday: "174",
      deathToday: 0,
    },
    {
      province: "Đắk Nông",
      inflectionToday: "145",
      deathToday: 2,
    },
    {
      province: "Phú Thọ",
      inflectionToday: "144",
      deathToday: 1,
    },
    {
      province: "Tuyên Quang",
      inflectionToday: "133",
      deathToday: 0,
    },
    {
      province: "Thái Bình",
      inflectionToday: "121",
      deathToday: 0,
    },
    {
      province: "Hà Giang",
      inflectionToday: "114",
      deathToday: 3,
    },
    {
      province: "Cần Thơ",
      inflectionToday: "113",
      deathToday: 10,
    },
    {
      province: "Kiên Giang",
      inflectionToday: "106",
      deathToday: 11,
    },
    {
      province: "Bạc Liêu",
      inflectionToday: "106",
      deathToday: 5,
    },
    {
      province: "Phú Yên",
      inflectionToday: "100",
      deathToday: 2,
    },
    {
      province: "Gia Lai",
      inflectionToday: "98",
      deathToday: 1,
    },
    {
      province: "Hà Nam",
      inflectionToday: "95",
      deathToday: 0,
    },
    {
      province: "Hậu Giang",
      inflectionToday: "92",
      deathToday: 0,
    },
    {
      province: "Lạng Sơn",
      inflectionToday: "82",
      deathToday: 1,
    },
    {
      province: "Bình Thuận",
      inflectionToday: "82",
      deathToday: 0,
    },
    {
      province: "Sóc Trăng",
      inflectionToday: "80",
      deathToday: 3,
    },
    {
      province: "Quảng Bình",
      inflectionToday: "77",
      deathToday: 0,
    },
    {
      province: "Ninh Bình",
      inflectionToday: "66",
      deathToday: 0,
    },
    {
      province: "Lào Cai",
      inflectionToday: "65",
      deathToday: 0,
    },
    {
      province: "Yên Bái",
      inflectionToday: "63",
      deathToday: 0,
    },
    {
      province: "Sơn La",
      inflectionToday: "61",
      deathToday: 0,
    },
    {
      province: "Đồng Tháp",
      inflectionToday: "61",
      deathToday: 0,
    },
    {
      province: "Kon Tum",
      inflectionToday: "59",
      deathToday: 0,
    },
    {
      province: "Bình Dương",
      inflectionToday: "59",
      deathToday: 3,
    },
    {
      province: "An Giang",
      inflectionToday: "55",
      deathToday: 23,
    },
    {
      province: "Đồng Nai",
      inflectionToday: "55",
      deathToday: 0,
    },
    {
      province: "Điện Biên",
      inflectionToday: "42",
      deathToday: 0,
    },
    {
      province: "Tiền Giang",
      inflectionToday: "40",
      deathToday: 11,
    },
    {
      province: "Quảng Trị",
      inflectionToday: "39",
      deathToday: 0,
    },
    {
      province: "Long An",
      inflectionToday: "35",
      deathToday: 2,
    },
    {
      province: "Ninh Thuận",
      inflectionToday: "26",
      deathToday: 0,
    },
    {
      province: "Lai Châu",
      inflectionToday: "19",
      deathToday: 0,
    },
    {
      province: "Cao Bằng",
      inflectionToday: "14",
      deathToday: 0,
    },
    {
      province: "Bắc Kạn",
      inflectionToday: "14",
      deathToday: 1,
    },
    {
      province: "Hà Tĩnh",
      inflectionToday: "",
      deathToday: 0,
    },
  ],
  scrollStickyMenutop: function () {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        menuTopList.style = "width: 1100px;";
        menuTopLogo.classList.add("show");
        menuTopHome.style = "display: none";
      } else {
        menuTopList.style = "width: 1040px;";
        menuTopLogo.classList.remove("show");
        menuTopHome.style = "display: block";
      }
    });
  },
  renderNewBottom: function () {
    const htmls = this.newsbottom.map((value, index) => {
      return `
        <li class="newbottom-left-item">
          <h3 class="newstop-sub-caption caption newbottom-left-caption">${
            value.caption
          }</h3>
          <div class="newbottom-left-desc">
            <img src="${
              value.image
            }" alt="image" class="newbottom-left-img"></img>
            <div class="newstop-sub-content">
              ${value.content} 
              ${
                value.comment
                  ? `
                <span class="newstop-sub-comment">
                  <i class="fas fa-comment-alt"></i>
                  <span>${value.comment}</span>
                </span>
                `
                  : ""
              }
            </div>
          </div>
        </li>
      `;
    });
    newBottomList.innerHTML = htmls.join("");
  },
  renderCovidPerDay: function () {
    const htmls = this.inflectionStatistic.map((value, index) => {
      return `
        <li class="statistic-right-item d-flex">
          <span class="col-4 statistic-right-province">${value.province}</span>
          <span class="col-4 statistic-right-infection">+${
            value.inflectionToday || "-"
          }</span>
          <span class="col-4 statistic-right-death">${
            value.deathToday || "-"
          }</span>
        </li>
      `;
    });
    statisticRightList.innerHTML = htmls.join("");
  },
  slickSlider: function () {
    $(document).ready(function () {
      $("#chart-heading-list").slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
      });
      $("#chart-slider-list").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow: `<button type='button' class='slick-prev-slider slick-arrow-slider'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next-slider slick-arrow-slider'><i class="fas fa-chevron-right"></i></button>`,
      });
      $("#sport-match").slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow: `<button type='button' class='slick-prev-match slick-arrow-match'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next-match slick-arrow-match'><i class="fas fa-chevron-right"></i></button>`,
      });
      $("#health-doctor-list").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: false,
      });
      $("#selling-slider").slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: false,
      });
    });
  },
  start: function () {
    this.renderCovidPerDay();
    this.scrollStickyMenutop();
    this.renderNewBottom();
    this.slickSlider();
  },
};
app.start();

// $(document).ready(function () {
//   $("#chart-heading-list").slick({
//     slidesToShow: 6.5,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     infinite: true,
//     prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
//     nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
//   });
//   $("#chart-slider-list").slick({
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     infinite: true,
//     prevArrow: `<button type='button' class='slick-prev-slider slick-arrow-slider'><i class="fas fa-chevron-left"></i></button>`,
//     nextArrow: `<button type='button' class='slick-next-slider slick-arrow-slider'><i class="fas fa-chevron-right"></i></button>`,
//   });
// });
