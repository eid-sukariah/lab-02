'use strict'

let arrObj = [];
let arrOption =[];
let keyWordArr =[]; //to felter the array

function Animales (url, title, desc, keyword, horns){
    this.url = url;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
    arrObj.push(this);
}

Animales.prototype.render = function(){
     $('main').append(`<div> <h2>${this.title}</h2><img src="${this.url}"><p>${this.desc}</p></div>`)
    console.log(this);
    
}
Animales.prototype.lestRender = function(){
    $('.select').empty();
    keyWordArr.push(this.keyword);
    arrOption = [...new Set(keyWordArr)];
   

}


const ajaxSeting ={
    method: 'get',
    dataType: 'json',
}
$(function(){
    console.log('ready8')

    $('select').on('change' , (event)=>{
        $('div').empty();
        event.preventDefault();
        // alert('hi from event');
        let prees = $('select').val();
        arrObj.forEach(element =>{
            if(element.keyword == prees){
                element.render();
                console.log(element);
            }
        });
       
    });

    $.ajax('data/page-1.json',ajaxSeting).then(response =>{
        // console.log('response',response);
        response.forEach(animal =>{
            
            let newObj = new Animales(animal.image_url, animal.title, animal.description, animal.keyword, animal.horns);
            newObj.render();
            newObj.lestRender();
            console.log(newObj);
            arrOption.forEach(element =>{
                
                $('select').append(`<option value="${element}">${element}</option>`);
            });
        });
    });

});

