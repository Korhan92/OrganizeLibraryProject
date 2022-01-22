class Media {
    constructor(title, type) {
        this._title = title;
        this._type = type;
        this._isCheckedOut = false;
        this._ratings = [];


    }
    get title() {
        return this._title;
    }
    get type() {
        return this._type;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckoutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        let rating = this._ratings.reduce((total, rating) => total + rating) /
            this._ratings.length;
        return rating.toFixed(2);
    }
    addRating(value) {
        if (value >= 1 && value <= 10) {
            this._ratings.push(value);
        }
    }

}

const mediaOne=new Media("test media" , "deneme");

mediaOne.toggleCheckoutStatus();
mediaOne.addRating(5);
mediaOne.addRating(3.6);

console.log(mediaOne);
console.log(mediaOne.getAverageRating());

//Create Back Class

class Book extends Media{
    constructor(title,type,author,pages){
    super(title,type);
    this._author=author;
    this._pages=pages;

}
get author(){
    return this._author;
}
get pages (){
    return this._pages
}
    
}

//Create Movie Class


class Movie extends Media{
    constructor(title,type,director,runTime){
    super(title,type);
    this._director=director;
    this._runTime=runTime;

}
get director(){
    return this._director;
}
get runTime (){
    return this._runTime
}
    
}

//Create CD Class

class CD extends Media{
    constructor(title,type,artist,duration){
    super(title,type);
    this._artist=[];
    this._songs=[];
    this._duration = duration;

}
get artist(){
    return this._artist;
}
get songs (){
    return this._songs
}
    
addSongs (song){
    this._songs.push(song);
}
shuffle(){
    return this._songs.sort(() => Math.random() - 0.5);
}
}

class Catalog{
    constructor(){
        this._myCatalog=[]
    }
    get myCatalog(){
        return this._myCatalog;
    }
    set myCatalog(newMedia){
        this._myCatalog.push(newMedia);
    }
    addMedia(media) {
        this._myCatalog.push(Media);


    }
}

const historyOfViolence = new Book(
 "History of Violence",
 "Crime",
 "Edouard Louis",
 224

);

console.log(historyOfViolence);
historyOfViolence.toggleCheckoutStatus();
console.log(historyOfViolence.isCheckedOut);//getter method
historyOfViolence.isCheckedOut=false; //setter method
console.log(historyOfViolence.isCheckedOut);

historyOfViolence.addRating(4);
historyOfViolence.addRating(5);
historyOfViolence.addRating(6);

console.log(historyOfViolence.getAverageRating());

const bloodSport = new Movie("Blood Sport" ,
"Action",
"Jean-Claude Van Damme",
122
);

const bondJovi = new CD("MusicJon" , "Rock" , "Jon Bon Jovi", 11);
bondJovi.addSongs("Rock and Roll")
bondJovi.addSongs("Break");
bondJovi.addSongs("Runtime");
console.log(bondJovi);

const catalogLibrary  = new Catalog();
catalogLibrary.addMedia(historyOfViolence);
catalogLibrary.myCatalog=bondJovi;

console.log(catalogLibrary);

//challenge part

let submitBtn = document.getElementById("submit_btn");
let mediaSelect = document.getElementById("mediaTypeSelect");
let titleMedia = document.getElementById("titleOfMedia");
let typeMedia = document.getElementById("typeOfMedia");
let creatorMedia = document.getElementById("creatorOfMedia");
let durationMedia = document.getElementById("durationOfMedia");
let ratings = document.getElementById("ratingsOfMedia");
let catalogLib = document.getElementById("catalogLibrary");

submitBtn.onclick=() =>{
 let selectMedia = mediaSelect.value === "Book"
 ?Book 
 :mediaSelect.value === "Movie"
 ?Movie
 :mediaSelect.value === "CD"
 ?CD
 : "" ;

 let newMedia = new constructor(
    titleMedia.value,
    typeMedia.value,
    creatorMedia.value,
    durationMedia.value,

 );
 newMedia.addRating(ratings[0].value);
 newMedia.addRating(ratings[1].value);
 newMedia.addRating(ratings[2].value);
 newMedia.addRating(ratings[3].value);

catalogLibrary.addMedia(newMedia);
console.log(catalogLibrary.myCatalog)

let result = []
;catalogLibrary.myCatalog.forEach(item =>result.push(item.title));
catalogLib.innerHTML=result.join("<br>") 
}







   

