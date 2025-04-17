const cards = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'icecream', img: 'images/icecream.png' },
    { name: 'icecream', img: 'images/icecream.png' },
    { name: 'burger', img: 'images/burger.png' },
    { name: 'burger', img: 'images/burger.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'hotdog', img: 'images/hotdog.png' }
  ];
  
  // Xáo trộn
  cards.sort(() => 0.5 - Math.random());
  
  const grid = document.getElementById('card-grid');
  let chosenCards = [];
  let chosenCardIds = [];
  let score = 0;
  
  function createBoard() {
    cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.setAttribute('data-id', index);
      cardElement.classList.add('card');
      cardElement.style.backgroundImage = "url('images/blank.png')";
      cardElement.addEventListener('click', flipCard);
      grid.appendChild(cardElement);
    });
  }
  
  function flipCard() {
    const id = this.getAttribute('data-id');
    chosenCards.push(cards[id]);
    chosenCardIds.push(id);
    this.style.backgroundImage = `url(${cards[id].img})`;
  
    if (chosenCards.length === 2) {
      setTimeout(checkMatch, 700);
    }
  }
  
  function checkMatch() {
    const cardsDOM = document.querySelectorAll('.card');
    const [card1, card2] = chosenCardIds;
    
    if (card1 === card2) {
      alert("Bạn đã click 2 lần vào 1 thẻ!");
    } else if (chosenCards[0].name === chosenCards[1].name) {
      alert("Đúng rồi!");
      cardsDOM[card1].style.visibility = 'hidden';
      cardsDOM[card2].style.visibility = 'hidden';
      score++;
      document.getElementById('score').innerText = score;
    } else {
      alert("Sai rồi! Thử lại nha.");
      cardsDOM[card1].style.backgroundImage = "url('images/blank.png')";
      cardsDOM[card2].style.backgroundImage = "url('images/blank.png')";
    }
  
    chosenCards = [];
    chosenCardIds = [];
  }
  
  createBoard();
  