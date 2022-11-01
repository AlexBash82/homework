const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value
  try {
    if(searchValue === ''){
      throw new Error('Строка не должна быть пустой!', searchValue)              
    } else if(searchValue > 10) {
      throw new Error('это больше 10 !!!', searchValue)  
    } else if(searchValue < 5){
      throw new Error('это меньше 5 !!!', searchValue)
    } else if(searchValue > 4 && searchValue < 11) {
      resultsContainer.innerHTML = (`<div class="response-container">                
      <p><span>Все верно!</span><p>`)
    } else {
    throw new Error('это не число!', searchValue)
    }
  } catch (error) {
    resultsContainer.innerHTML = (`<div class="response-container">                
      <p><span>ERROR: ${searchValue} ${error.message}</span><p> 
    </div>`)
  }

});
