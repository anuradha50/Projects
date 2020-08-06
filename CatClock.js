var wakeuptime = 7;
var noon = 12;
var launchtime = lunchtime + 2;
var partytime;
var evening = 18;


// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM"

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM"
    }
    if (hours > noon) 
    {
        hours = hours-12;
    }
    // Set Minutes
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ';' + minutes + ';' + seconds + " " + meridian + '!';
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function()
{
    var time = new Data().getHours();
    var messagesText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messagesText = "Let's party!";
}
else if (time == wakeuptime)
{
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/Cat1.jpg";
    messagesText = "Wake up!";
}

else if (time == launchtime)
{
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/Cat2.jpg";
    messagesText = "Let's have some lunch!";
}

else if (time == naptime)
{
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/Cat3.jpg";
    messagesText = "Sleep time!";
}

else if (time < noon)
{
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/Cat4.jpg";
    messagesText = "Good Morning!";
}

else if (time >= evening )
{
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/Cat1.jpg";
    messagesText = "Good Evening!";
}
else{
    
else if (time == wakeuptime)
{
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/NormalTime.jpg";
    messagesText = "Good Afternoon!";
}
console.log(messagesText);
timeEventJS.innerText = messagesText;
lolcatImage.src = image;

showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second 
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeeButton");

var partyEvent = function()
{
    if (partytime < 0)
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText="Party Over!";
        partyTimeButton.style.backgroundColor = "#OABDAB";
    }
    else
    {
        partytime =-1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;

};

wakeuptime = wakeUpTimeSelector.addEventListner("change", wakeUpEvent);

// Actives Launch selector
var launchTimeSelector = document.getElementById("launchTimeSelector");

var lunchEvent = function()
{
    launchtime = launchTimeSelector.value;
};

launchTimeSelector.addEventListener("change", launchEvent);


// Acttivate Nap-Time selector
var napTimeselector = document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeselector.value;

};

napTimeselector.addEventListener("change", napEvent);