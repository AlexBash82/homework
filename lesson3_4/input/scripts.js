const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim()
  try {
    if(searchValue === ''){
      resultsContainer.innerHTML = (`<div class="response-container">                
      <p> Строка не должна быть пустой<p> 
    </div>`)
    }
    throw new Error(searchValue)
  } catch (error) {
    resultsContainer.innerHTML = (`<div class="response-container">                
      <p> Строка  <span>${searchValue}</span><p> 
    </div>`)
  }

});
