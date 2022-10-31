
    let singlePageTitle = document.querySelector('.card-item__title')
    let singleImg = document.querySelector('.singleImg')
    let singleText = document.querySelector('.singleText')
    let cardPrice = document.querySelector('.card-price1')
    let cardCategory = document.querySelector('.card-category')
    let cardRating = document.querySelector('.card-rating')


function renderCard(){
    let cerdId = JSON.parse(localStorage.getItem('itemId')) - 0
    let Cards = JSON.parse(localStorage.getItem('data'))


   Cards.map(element => {
    if(element.id === cerdId)  {
        console.log(element);
        singlePageTitle.textContent = element.title
        singleImg.setAttribute('src', element.image)
        singleText.textContent = element.description
        cardPrice.textContent = `${element.price} $`
        cardCategory.textContent = element.category
        cardRating.innerHTML = `${element.rating.rate} <i class="fas fa-star"></i>`

    }
   });
}
renderCard()

