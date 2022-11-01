const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");

loadBtn.addEventListener("click", function (evt) {

  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.data)
    .then(data => {
      resultsContainer.innerHTML = data.map((item) => {
        return (`<div class="response-container">                
        <p> Имя: <span>${item.name}</span><p>
        <p> Почта: <span>${item.email}</span><p>
        <p> Город: <span>${item.address.city}</span><p>
    </div>`)
      } )
    }

    );
});
