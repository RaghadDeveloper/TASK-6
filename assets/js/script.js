fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/?format=json')
      .then(response => response.json())
      .then(response => {
        featured(response)
        popular(response)
    })


const booksGroup = document.querySelector('.books-group')
function featured(response){
    console.log(response.length);
    for(let i = response.length - 1 ; i > 41 ; i--){
        booksGroup.innerHTML += `
        <div class="book-card d-flex flex-column justify-content-between align-items-center mb-5">
            <div class="book-cover p-5">
              <img src=${response[i].simple_thumb} alt="" width="100%">
            </div>
            <h4 class="text-center">${response[i].title}</h4>
            <p class="text-center">${response[i].author}</p>
        </div>
        `
    }
}

const popularBooks = document.querySelectorAll('.popular-books')
function popular (response){
    popularBooks.forEach(popularBooks => {
        popularBooks.innerHTML = '';

        for (let i = 0; i < 8; i++) {
            popularBooks.innerHTML += `
            <div class="book-card d-flex flex-column justify-content-between align-items-center mb-5">
                <div class="book-cover p-5">
                    <img src="${response[i].simple_thumb}" alt="" width="100%">
                </div>
                <h4 class="text-center">${response[i].title}</h4>
                <p class="text-center">${response[i].author}</p>
            </div>
            `;
        }
    });
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/?format=json')
      .then(res => res.json())
      .then(res => bestBookFun(res))


const bestBook = document.querySelector('.best-book')
function  bestBookFun(res){
    console.log(res.authors)
    bestBook.innerHTML += `
    <div class="d-flex flex-wrap justify-content-center align-items-start gap-3">

        <div class="best-book-cover"><img src=${res.cover} alt="" width="320px"></div>

        <div class="best-book-card mt-5 d-flex flex-column justify-content-start align-items-start fs-5 gap-3">

          <div class="mb-3">
          <h2 class="best-title">Best Selling Books</h2>
          <div class="best-line my-3"></div>
          </div>
          <p>${res.authors.name}</p>
          <h3>${res.title}</h3>
          <p>${res.fragment_data.html}</p>
          <button class="btn d-flex gap-2 align-items-center fw-bold">Shop It Now <i class="fa-solid fa-arrow-right"></i></button>

        </div>
    </div>
    `
    
}

