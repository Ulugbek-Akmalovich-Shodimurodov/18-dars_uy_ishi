const elProductTempalate = document.querySelector("#product-template");
const elPortfolioList  = document.querySelector('.portfolio-cards__list')

let cardList = document.querySelector('.portfolio-cards__list')


function portfolioCard(portfolioData){

    const elProductCard = elProductTempalate.cloneNode(true).content;

    
    const listItem = elProductCard.querySelector('.portfolio-cards__item')
    listItem.setAttribute('id', portfolioData.id)

    const cardImg = elProductCard.querySelector('.portfolio-card__img');
    cardImg.setAttribute("src", portfolioData.image);

    const cardTitle = elProductCard.querySelector('.portfolio-card__title');
    cardTitle.textContent = portfolioData.title;

    const cardDesc = elProductCard.querySelector('.card-description');
    cardDesc.textContent = portfolioData.description

    const cardPrice = elProductCard.querySelector('.card-price');
    cardPrice.textContent = `${portfolioData.price} $`

    const cardSkitkaP = elProductCard.querySelector('.card-skitka__price');
    cardSkitkaP.textContent = `${portfolioData.price - Math.floor(portfolioData.price / 10) } $`


    return elProductCard;

}

const renderFunction = (array = portfolioData) => {
    elPortfolioList.innerHTML = "";
    array.map((item) => {
        const elNewCard = portfolioCard(item)
        elPortfolioList.append(elNewCard);
    })
}


fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data =>{
    localStorage.setItem('data', JSON.stringify(data))
        renderFunction(data);
    }
)

function singlePage(e){

    let cardId = e.target.id - 0

    localStorage.setItem('itemId', JSON.stringify(cardId) )

    window.location.href = '../detailedPage.html'         

}

cardList.addEventListener('click', singlePage )










































//  task 1

function Str(str = 'AXC SDFV FGN HJMH'){
    let newStr = '';

    for(let i of str )
        i == ' ' ? newStr += '-' : newStr += i;
    return newStr;
}

// task 6

function sentences(str = ' ewrtgynunbrverc rbrvvw b fbrf vgbgevwd '){
    
    let k = 0;
    str = str.trim()

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            continue;
        }else if(str[i] === ' '){
            k++;
        }
    }
    return k+1;
}

// task 10

function cars(car = 'Lacetti', km = '1193km'){

    function Nums(km){
        let num = '';
        for(let i of km){
            i / 1 ? num += i : 0;
        }
        return num / 1;
    }

    km = Nums(km);

    switch (car) {
        case 'Lacetti':
            console.log(car, String(km), 'kmga', String(km/10), 'litr benzin sarflaydi.');
            break;
    
        case 'Damas':
            console.log(car, String(km), 'kmga', String(km/8), 'litr benzin sarflaydi.');
            break;
    
        case 'Matiz':
            console.log(car, String(km), 'kmga', String(km/7), 'litr benzin sarflaydi.');
            break;
    
        default:
            console.log('mashina topilmadi.');
            break;
    }
    return 'ish bajarildi';
}
