let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");
let search = document.getElementById("search");
let serTitle = document.getElementById("serTitle");
let serCategory = document.getElementById("serCategory");
let delall = document.getElementById('Delete-all')
let mood = 'cearte';
let tmp;
// ################
// ################

function gettotal(){
    if(price.value != ""){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
       
        total.innerHTML = result ;
        total.style.background = '#040';
    }else{
        total.innerHTML = "";
        total.style.background = '#46493f';
    }
}

// ################
// ################

let lest;
if(localStorage.crud != null ){
lest = JSON.parse(localStorage.crud);
}else{
    lest = [];
}
//نقوم بعمل فانكشن تشتغل عن الضغط ع زرار الكريت و نقوم بعمل اوبجيت نضع فيها القيم 
create.onclick = function (){
    let newLest = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        count: count.value,
        category: category.value,
        search: search.value,
        total: total.innerHTML
     } 
     
     if(mood === "cearte"){
        if(newLest.count > 1){
            for(let r = 0 ; r < newLest.count; r++){
        lest.push(newLest)[r]
    
         }
        }else{
        lest.push(newLest)
    
        }
     }else{
        lest[   tmp  ] = newLest

        mood = "cearte";
        create.innerHTML = "Cearte"
        
    }
    
     
     localStorage.setItem("crud", JSON.stringify(lest))
     clear()
     showdate()
}
 
// ################
// ################

function clear(){
    title.value = "" ;
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    category.value = "";
    count.value = "";
    search.value = "";
    total.innerHTML = '';
}

// ################
// ################

function showdate(){
    let table = '';
    
        for(let i = 1; i < lest.length; i++){
    
            table += `
            <tr>
                <td>${i}</td>
                <td>${lest[i].title}</td>
                <td>${lest[i].price}</td>
                <td>${lest[i].taxes}</td>
                <td>${lest[i].ads}</td>
                <td>${lest[i].discount}</td>
                <td>${lest[i].total}</td>
                <td>${lest[i].category}</td>
                <td><button onclick="update( ${i} )" id="update">Update</button></td>
                <td><button onclick="delet( ${i} )"id="delete">Delete</button></td>
            </tr>
        
            `
    
    
    }
    document.getElementById("tbody").innerHTML = table ;
    if(lest.length > 2){
        delall.style.display = "block"
    }
    gettotal()
}
showdate()
  
// ################
// ################
function delet(i){
    lest.splice(i,1)
    localStorage.crud = JSON.stringify(lest)
    showdate()

}

delall.onclick = function(){
    lest.splice(0)
    localStorage.clear()

    // localStorage.crud = JSON.stringify(lest)
    showdate()
}
function adds(){

}
// ################
// ################

function update(i){
    title.value = lest[i].title;
    price.value = lest[i].price;
    taxes.value = lest[i].taxes;
    ads.value = lest[i].ads;
    discount.value = lest[i].discount;
    count.value = lest[i].count;
    category.value = lest[i].category;
    create.innerHTML ='Update'
    gettotal()
    mood = 'Update';
    tmp = i;
    scroll({
        top:0,
        behavior:"smooth",
    })
console.log(i)
}

let searchmood = "title";

function searcht(id){
    if(id == "serTitle"){
    searchmood = "title";
    search.placeholder = "search by title";
        
    }else{
    searchmood = "category";
        search.placeholder = "search by category";
    }
   search.focus() 
   showdate()
}
function searchdate(value){
    let table = "";
    if(searchmood === "title"){
        for(i = 1; i < lest.length; i++){
            if(lest[i].title.includes(value)){
    console.log(i)
                 table += `
            <tr>
                <td>${i}</td>
                <td>${lest[i].title}</td>
                <td>${lest[i].price}</td>
                <td>${lest[i].taxes}</td>
                <td>${lest[i].ads}</td>
                <td>${lest[i].discount}</td>
                <td>${lest[i].total}</td>
                <td>${lest[i].category}</td>
                <td><button onclick="update( ${i} )" id="update">Update</button></td>
                <td><button onclick="delet( ${i} )"id="delete">Delete</button></td>
            </tr>
        
            `
            }
            
           
        }
    }else{
        for(i = 1; i < lest.length; i++){
            if(lest[i].category.includes(value)){
    console.log(i)
                 table += `
            <tr>
                <td>${i}</td>
                <td>${lest[i].title}</td>
                <td>${lest[i].price}</td>
                <td>${lest[i].taxes}</td>
                <td>${lest[i].ads}</td>
                <td>${lest[i].discount}</td>
                <td>${lest[i].total}</td>
                <td>${lest[i].category}</td>
                <td><button onclick="update( ${i} )" id="update">Update</button></td>
                <td><button onclick="delet( ${i} )"id="delete">Delete</button></td>
            </tr>
        
            `
            } 
    
                       
                    
    }
}

    document.getElementById("tbody").innerHTML = table ;

    console.log(value)

}

















