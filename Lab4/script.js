// lay danh sach the
const cardList = document.querySelectorAll(".container .card");

// dat bien phu
let firstElement;

//bat su kien click
for (let index = 0; index < cardList.length; index++) {
  const cardElement = cardList[index];
  cardElement.addEventListener("click", function (event) {
    if (firstElement) {
      // truong hop da chon truoc 1 card
      if (firstElement.innerHTML == cardElement.innerHTML) {
        // xoa 2 the
        firstElement.classList.add("hide");
        cardElement.classList.add("hide");
        // xoa du lieu cho bien tam
        firstElement = undefined;
      } else {
        // khong chon chinh xac the 2
        alert("Khong dung!");
        // xoa du lieu cho bien tam
        firstElement = undefined;
      }
    } else {
      // chua chon the dau tien
      firstElement = cardElement;
      console.log(firstElement);
    }
  });
}
