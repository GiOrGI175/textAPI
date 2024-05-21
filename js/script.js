const url = 'https://api.quotable.io/random';

fetch(url, { method: 'GET' })
  .then((data) => {
    console.log(data);
    if (data.status === 200) {
      return data.json();
    } else {
      console.error('verwamogo');
    }
  })
  .then((info) => {
    const pElement1 = document.getElementById('quote');
    pElement1.textContent = info.content;

    const pElement2 = document.getElementById('author');
    pElement2.textContent = info.author;
  });
