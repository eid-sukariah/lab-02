'use strict';
let images = [];
function Image(title,url,description,keyword,horns){
    this.title = title ;
    this.url = url ;
    this.description = description ;
    this.keyword = keyword;
    this.horns = horns;
    images.push(this);
}

Image.prototype.render = function(){
  let obj = `<div><h2>${this.title}
  <h2><img src=${this.url}><p>${this.description}
  </p><p>${this.keyword}</p><p>${this.horns}</p></div>`;
    $('main').append(obj);
}

// $( document ).ready(function();

const settings ={
    method:'get',
    dataType:'json'
}

$.ajax('data/page-1.json' , settings).then((data) => {
    data.forEach(element => {
        let cardDiv = $('#photo-template');
    //    $('img').attr('src', element.image_url);

       let newObj = new Image (element.title , element.image_url , element.description , element.keyword , element.horns);
    //    console.log(cardDiv.children());
    });
})




