  // Create card element
  const createCard = () => {
    const cardContainer = document.getElementById('cardContainer');

    // Create card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Create image element
    const image = document.createElement('img');
    image.src = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
    // card.appendChild(image);

    // Create title element
    const title = document.createElement('h2');
    title.textContent = 'Example Card';
    // card.appendChild(title);

    // Create description element
    const description = document.createElement('p');
    description.textContent = 'This is an example card created with JavaScript and DOM manipulation.';
    // card.appendChild(description);

    // Create button element
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
    card.append(image,title,description,button);

    // Append card to container
    cardContainer.appendChild(card);
  };

  // Call createCard function to generate the card
  createCard();
