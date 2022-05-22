
//Fellowship of Variables
let likeCount = document.querySelector('#like-count');
let price = document.querySelector('.price');
let loadMore = document.querySelector('#loadMore');
let collector= document.querySelector('#collector');

//Switch text to coming soon on the bottom bar
loadMore.addEventListener('click',()=>{
    loadMore.innerText = 'Coming Soon...';
})

let movieObject = {
    'TR' : {
        'name': 'The Redemption',
        'subtitle': 'Redemption comes at a cost',
        'image': 1,
        'price': 500,
        'count': 12,
        'ID': 'TR'
    },
    'ATR' : {
        'name': 'Africa’s Tech Roots',
        'subtitle': 'A deep dive into the world of tech in Africa',
        'image': 2,
        'price': 500,
        'count': 10,
        'ID': 'ATR'
    },
    'TIM':{
        'name': 'The Invisible Man',
        'subtitle': 'A Man with a new technology with a silly purpose',
        'image': 3,
        'price': 2700,
        'count': 81,
        'ID': 'TIM'
    },
    'TCP' : {
        'name': 'The Complicated Project',
        'subtitle': 'How hard could any project be?',
        'image': 4,
        'price': 1000,
        'count': 16,
        'ID': 'TCP'
    },
    'SJ' : {
        'name': 'Simply Javascript',
        'subtitle': 'If Javascript was a person',
        'image': 5,
        'price': 2300,
        'count': 70,
        'ID': 'SJ'
    },
    'TNW' : {
        'name': 'The New Web',
        'subtitle': 'What might be and might not be the new web',
        'image': 6,
        'price': 500,
        'count': 1,
        'ID': 'TNW'
    }
}


// function using innerHTML to parse data into elements  for rendering later
function weirdInnerHTMLSTructure(movieTitle, subtitle, imageNo, price, count, ID){

let pickStructure = `<div class="col-md-4 col-sm-6">
    <div class="portfolio-item">
        <div class="web3El">
            <div class="lt">
                <strong id="like-count">${count}</strong>
            </div>
            <div class="rt">
                <strong class="lk" onclick="update('${ID}')">Like</strong>
            </div>
        </div>
        <div class="thumb">
            <div class="hover-effect">
                <div class="hover-content">
                    <h1>${movieTitle} <span class="price">[#]${price}</span></h1>
                    <p>${subtitle}</p>
                </div>
            </div></a>
            <div class="image">
                <img src="img/thumbnail_${imageNo}.png">
            </div>
        </div>

    </div>
</div>`;

return pickStructure;

}

function renderer(obj){

    let counter = [[['TR'],[obj['TR']['count']]], [['ATR'], [obj['ATR']['count']]], [['TIM'],[obj['TIM']['count']]], [['TCP'],[obj['TCP']['count']]], [['SJ'],[obj['SJ']['count']]], [['TNW'],[obj['TNW']['count']]]];
    let sortedCounter =  counter.sort((a, b) => a[1] - b[1]).reverse();

    for(let ooo = 0; ooo < sortedCounter.length; ooo++){
        let Ell = obj[sortedCounter[ooo][0][0]]
        collector.innerHTML += weirdInnerHTMLSTructure(Ell['name'],Ell['subtitle'], Ell['image'], Ell['price'], Ell['count'], Ell['ID']);
    }
};

renderer(movieObject);

function update(input){
    movieObject[input]['count'] += 1 ;
    movieObject[input]['price'] = priceUpdate(movieObject[input]['count']);
    collector.innerHTML = '';
    renderer(movieObject);
}

function priceUpdate(count){
    if(count <= 15){
        return 500;
    }
    else if(count > 15){
        let b = Math.ceil(count / 15);
        return Math.ceil(b * 500);
    }
    return 500;
}