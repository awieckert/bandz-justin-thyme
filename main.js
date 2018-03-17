
function printToDom (stringToPrint, divId){
    var thingToPrint = document.getElementById(divId);
    thingToPrint.innerHTML += stringToPrint;
};

/********************* News Array of Objects******************************/

var newsArticle = [
 {
     "title": " Kids Choice Awards 2018!!!",
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFh4Cc2TXr-Z4yKGfHh6jqmj2PG8HWIfkwM9_Hx3nF3GRDKw6",
    "description": 'Huge shoutout to all of the kids who recognized Justin-Thymes, ‘Can’t stop the feeling’, in the movies Trolls as 2017’s song of the year! Although we  know that the song was really Justin Timberlakes, we are grateful that you guys aren’t going to judge us as we accept this award as our own on March 24th! Trolls was also released in 2016, so we were shocked to receive this nomination two years later… Nevertheless we are grateful to Nickelodeon Productions and every kid who voted for us!! Check us out on Nickelodeon on the 24th at 8pm. Don’t click on the link below because It may or may not take you to a page of nominees that does not have our name on it.',
    "link": "http://deadline.com/2018/02/2018-kids-choice-awards-nominations-nickelodeon-stranger-things-dwayne-johnson-john-cena-1202303369/"
 },
 {
     "title": "Fan Meet Up",
     "imgUrl": "https://i.ytimg.com/vi/x8557mvp0Ec/maxresdefault.jpg",
     "description": "Once a month we host a fan meet up!! This month’s meet up will be hosted at  our city’s hottest spot, Harley’s Pub! Come out on March 26th and enjoy some booze and a few of your favorite hits!! Come early or risk the chance of not getting in! See ya there!",
     "link": "https://www.facebook.com/harleyspubandpool/"
 },
 {
     "title": "Facebook Live Announcement",
     "imgUrl": "http://marketingland.com/wp-content/ml-loads/2016/04/facebook-live-logo2-1920.jpg",
     "description": "You guys asked for it, so we’ve decided to make our Facebook Live a weekly thing. Join us on Wednesdays at 7pm to hear us jam out, talk about our random favorite things, and answer any questions you may have! Leave comments on our page and let us know if you would like for us to talk about anything in particular! See ya Wednesday!",
     "link": "https://www.facebook.com/justinthymeband/"
 }
];

function newsCrap (newsArray) {
    for (var i = 0; i < newsArray.length; i++) {
        var newsTitle = newsArray[i].title;
        var newsImg = newsArray[i].imgUrl;
        var newsDescription = newsArray[i].description;
        var newsLink = newsArray[i].link;
        var newsString = '';
        newsString += `<div class="newsBox">`;
        newsString += '<h2>'+ newsTitle + '</h2>';
        newsString += `<img class="newsPics" src= "${newsImg}">`;
        newsString += '<p>' + newsDescription + '</p>';
        newsString += `<a href= "${newsLink}">` + newsLink + `</a>`;
        newsString += `</div>`;
        printToDom(newsString, "news-container");
        
    }
};

newsCrap(newsArticle);


// Home Page Photo Carousel----Stretch Goal------
// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var slideThyme = document.getElementsByClassName("slides");
//     for (i = 0; i < x.length; i++) {
//       slideThyme[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > slideThyme.length) {slideIndex = 1} 
//     slideThyme[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 2000);
// }
