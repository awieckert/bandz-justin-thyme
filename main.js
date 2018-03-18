function printToDom (stringToPrint, divId){
    var thingToPrint = document.getElementById(divId);
    if(thingToPrint){
        thingToPrint.innerHTML += stringToPrint;
    }
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

// Band Members

var bandMembers = [
    {
        memberName: "Adam",
        position: "Lead Vocalist",
        memberPhoto: "http://placeimg.com/640/480/any",
        favList:  "Favorite Artist",
        listOne:  "Mariah Care", 
        listTwo:  "Brittney Spears",
        listThree:  "Jessica Simpson",
        paraMember: "I FELL IN LOVE WITH MUSIC WHEN I WAS 12. I SANG IN THE SHOWER AND IN THE CAR FOR ABOUT 10 YEARS. IT WASN'T UNTIL I PULLED UP TO A RED LIGHT IN MY DARK GREEN 1962 VOLKSWAGON BEETLE IN 2001, THAT I KNEW I HAD THE GIFT. TOM POSSUM OUR FIRST MANAGER JUMPED OUT OF HIS CAR AND ASKED IF I WAS INTERESTED IN STARTING A BAND. I SAID YES, AS HE KNEELED DOWN ON ONE KNEE AWAITING MY RESPONSE. IT WAS FATE. SINCE THEN I HAVE BEEN ROLLIN IN THE DEEP!!"
    },
    {
        memberName: "Stix",
        position: "Guitarist",
        memberPhoto: "http://placeimg.com/640/480/any",
        favList:  "Favorite Artist",
        listOne:  "The Sonics",
        listTwo:  "The White Stripes",
        listThree: "The Stoogies",
        paraMember: "I think Paris smells not just sweet but melancholy and curious, sometimes sad but always enticing and seductive. She's a city for the all senses, for artists and writers and musicians and dreamers, for fantasies, for long walks and wine and lovers and, yes, for mysteries. -M.J. Rose"
    },
    {
        memberName: "Leo",
        position: "Drummer",
        memberPhoto: "http://placeimg.com/640/480/any",
        favList:  "Favorite Artist",
        listOne:  "BackStreet Boys",
        listTwo:  "5ive",
        listThree: "LFO", 
        paraMember: "You gotta remember: we're musicians... we're just crazy people who can't get along sometimes. I've definitely come to the table with my knife in my pocket a couple of times; you know how it is. It's part of being human. Now add fame and money and all that rock and roll craziness to it - we're lucky we don't eat each other in this industry! - Corey Taylor"
    },
    {
        memberName: "Colin",
        position: "Bassist",
        memberPhoto: "http://placeimg.com/640/480/any",
        favList:  "Favorite Artist",
        listOne:  "Savage Garden", 
        listTwo:  "B2K",
        listThree: "Hanson",
        paraMember: "As musicians and artists, it's important we have an environment - and I guess when I say environment, I really mean the industry, that really nurtures these gifts. Oftentimes, the machine can overlook the need to take care of the people who produce the sounds that have a lot to do with the health and well-being of society. - Lauryn Hill"     
    },
    {
        memberName: "Lola",
        position: "Keytarist",
        memberPhoto: "http://placeimg.com/640/480/any",
        favList:  "Favorite Artist",
        listOne:  "Radiohead",
        listThree: "AC/DC",
        paraMember: "There are only so many letters in the alphabet. When I talk to young musicians or authors and they ask for advice, I say, 'You gotta learn all the letters of your own personal alphabet. With music, you need to know all the different kinds of music and everything in and around your given instrument. -David Lee Roth" 
    }

];

// console.log ("bandMembers",bandMembers);



function memberBand(membersArray){
        var memName;
        var memPosition;
        var memPhoto;
        var memFavs;
        var memOne;
        var memTwo;
        var memThree;
        var memInfo;
        var memberString;
        for (var i = 0; i < membersArray.length; i++) {
             memName = membersArray[i].memberName;
             memPosition = membersArray[i].position;
             memPhoto = membersArray[i].memberPhoto;
             memFavs = membersArray [i].favList;
             memOne = membersArray[i].listOne;
             memTwo = membersArray[i].listTwo;
             memThree = membersArray[i].listThree;
             memInfo = membersArray[i].paraMember.toUpperCase();
             memberString = "";
        memberString += '<div id="member">';
        memberString += '<h2>' + memName + '</h2>';
        memberString += '<h3>' + memPosition + '</h3>';
        memberString += `<img id="memberPhoto" src= "${memPhoto}">`;
        memberString += '<ul id="memberList">';
        memberString += '<h3>' + memFavs + '<h3>';
        memberString += '<li>' + memOne + '</li>';
        memberString += '<li>' + memTwo + '<li>';
        memberString += '<li>' + memThree + '<li>';
        memberString += '</ul>';
        memberString += '<p id="paraMember">' + memInfo + '<p>';
        memberString += '</div>';

            printToDom(memberString, "member-main-container")
    };
}

memberBand(bandMembers);


// AJW Media Albums

var arrayOfAlbums = [
    {
        img: "../img/album-in-times.jpg",
        title: "In Times of Trouble  1983",
    },
    {
        img: "../img/album-t-rex.jpg",
        title: "My people were fair and had sky in their hair.." + "<br>" + "But now they're content to wear stars on their brows  1968",
    },
    {
        img: "../img/album-robin.jpg",
        title: "Sandcastles In The Sand  1985",
    }
];

function albumsToDom (objectArray, divID){
    var stringToPrint = "";
    var currentObject;
    for(var i = 0; i < objectArray.length; i++){
        currentObject = objectArray[i];
        stringToPrint += "<div class='ajw-album'>";
        stringToPrint += "<img src=" + currentObject.img + ">";
        stringToPrint += "<h3>" + currentObject.title + "</div>";
        stringToPrint += "</div>"; 
    }
    printToDom(stringToPrint, divID);
}

albumsToDom(arrayOfAlbums, "ajw-albums-id");

/********************* Tour Array of Objects******************************/

var tourSchedule = [
    {
      month: "MARCH",
      day: "18",
      venue: "SOUTH BY SOUTHWEST (SXSW)",
      location: "AUSTIN, TX",
      ticketLink: "TICKETS"
    },
    {
      month: "APRIL",
      day: "20",
      venue: "COACHELLA VALLEY MUSIC & ARTS FESTIVAL",
      location:"INDIO, CA",
      ticketLink: "TICKETS"
    },
    {
      month: "MAY",
      day: "5",
      venue: "BEALE STREET MUSIC FESTIVAL",
      location: "MEMPHIS, TN",
      ticketLink: "TICKETS"
    },
    {
      month: "MAY",
      day: "19",
      venue: "HANGOUT MUSIC FESTIVAL",
      location: "GULF SHORES, AL",
      ticketLink: "TICKETS"
    },
    {
      month: "JUNE",
      day: "2",
      venue: "GOVERNORS BALL",
      location: "RANDALL’S ISLAND, NYC", 
      ticketLink: "TICKETS"
    },
    {
      month: "JUNE",
      day: "9",
      venue: "BONNAROO",
      location: "MANCHESTER, TN", 
      ticketLink: "TICKETS"
    },
    {
      month: "AUGUST",
      day: "4",
      venue: "LOLLAPALOOZA",
      location: "CHICAGO, IL", 
      ticketLink: "TICKETS"
    }
  ];

  function createTourSchedule(tourArray){
      for (var i = 0; i < tourArray.length; i++){
          var tourString = ""; 
        if (tourArray[i]){
            tourString += '<div class="cw-tourSchedule">';
            tourString += "<h1>" + tourArray[i].month + " " + tourArray[i].day + "</h1>";
            tourString += "<h1>" + tourArray[i].venue + "</h1>";
            tourString += "<h1>" + tourArray[i].location + "</h1>";
            tourString += "<a href='https://www.ticketmaster.com/' target='_blank'><button class='cw-button'>" + tourArray[i].ticketLink + "</button>";
            tourString += '</div>';  
            printToDom(tourString, "tour-schedule");
        }
     
      }
  }

  //function printToDom (stringToPrint, divId){
     //var thingToPrint = document.getElementById(divId);
     //thingToPrint.innerHTML += stringToPrint;
 //}

 createTourSchedule(tourSchedule);

 /********************* Ending of Tour Array of Objects******************************/

// ********************** Home Page Tour print first 3 *******************

function topThreeDates(topThree){
    for (var l = 0; l < topThree.length; l++){
        var sampleString = "";
        if (topThree[l]){
            sampleString += '<div class="lt-jsTourContainer">';
            sampleString += "<div class='lt-tour'>" + topThree[l].month + " " + topThree[l].day + " " + "<span class='lt-venue'>"+topThree[l].venue+"</span>" + " " + "<button class='homeTourButton'>" + topThree[l].ticketLink + "</button>" + "</div>";
            sampleString += "<div class='lt-tourRowTwo'>" + topThree[l].location + "</div>";
            sampleString += '</div>';  
            printToDom(sampleString, "homeTourContainer");
        }
        
    }
}
topThreeDates(tourSchedule);

