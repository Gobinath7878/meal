//create a title for the website by using h1 tag in the div tag
var division1 = document.createElement('div');
division1.innerHTML =`<h1>FOOD API</h1>
`;
document.body.append(division1);
division1.setAttribute("class","head-container");

//write quote using blockquote

//creating the input box and search button. Here inputbox have a select option (no need of typing)
var division2 = document.createElement('div')
division2.innerHTML=`

      <input class="form" type="search" placeholder="Enter Your Meals" id="text">
      <button class="button" type="submit" onClick="srcProducts()">Search</button>

`;
document.body.append(division2);
division2.setAttribute("class","pro-container");

//create the cards
var cards = document.createElement('div')
document.body.append(cards);
cards.setAttribute("id","cards");

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
    .then((response) => response.json())
    .then((data) => {console.log(data)
        for(i=0;i<data.meals.length;i++){
         
            cards.innerHTML+=`<div class="card1">
            <h1 class="name">${data.meals[i].strMeal}</h1>
            <img src="${data.meals[i].strMealThumb}" alt="" class="images">
            <button type="submit" class="order">Order</button>
            
            </div>
            `
        }

    })
//give the function for the search button

function srcProducts(){

    let receipe = document.getElementById("text").value 

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${receipe}`)
    .then((response) => response.json())
    .then((data) => {console.log(data)

    

    let input="";
    
try {
   

for(i=0;i<data.meals.length;i++){

input +=`<div class="card1">
<h1 class="name">${data.meals[i].strMeal}</h1>
<img src="${data.meals[i].strMealThumb}" alt="" class="images">
<button type="submit" class="order">Order</button>

</div>
`
//<p class="price">${data[i].price}</p>
//<p class="description">${data[i].description}</p>

cards.innerHTML=input;

}

} catch(err){
    console.log("Some error occured"+ err)
    cards.innerHTML=`no meals found`;
}

  });
}



