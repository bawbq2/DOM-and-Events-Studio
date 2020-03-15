// Write your JavaScript code here.
// Remember to pay attention to page loading!
const flightStatus = document.getElementById("flightStatus")

window.addEventListener('load', function(){
    const takeoffnow = document.getElementById("takeoff")
    const flightStatus = document.getElementById("flightStatus")
    const background = document.getElementById("shuttleBackground")
    const shuttleHeight = document.getElementById("spaceShuttleHeight")
    const land = document.getElementById("landing")
    const missionAbort = document.getElementById("missionAbort")
    const rocket = document.getElementById("rocket")
    const upButton = document.getElementById("up")
    const downButton = document.getElementById("down")
    const leftButton = document.getElementById("left")
    const rightButton = document.getElementById("right")

        takeoffnow.addEventListener('click', function(){
        window.alert("Confirm that the shuttle is ready for takeoff.")
        flightStatus.innerHTML = "Shuttle in flight."
        background.style.background = "blue"
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000
        });

        landing.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        background.style.background = "green"
        shuttleHeight.innerHTML = 0
        rocket.style.left = "250px"
        // rocket.style.position = "absolute"
        rocket.style.bottom = "0"
        });

        missionAbort.addEventListener('click', function(){
        window.alert("Confirm that you want to abort the mission.")
        flightStatus.innerHTML = "Mission aborted."
        background.style.background = "green"
        shuttleHeight.innerHTML = 0
        rocket.style.left = "250px"
        rocket.style.bottom = "0"
        
        });
        upButton.addEventListener('click', function(){
            console.log("I pressed the up button") 
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
             rocket.style.top = (rocket.offsetTop-10) + "px"
        });

        downButton.addEventListener('click', function(){
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
            rocket.style.top = (rocket.offsetTop+10) + "px"
        });

        leftButton.addEventListener('click', function(){
            rocket.style.left = String(rocket.offsetLeft-10) + "px"
        });

        rightButton.addEventListener('click', function(){
            rocket.style.left = (rocket.offsetLeft+10) + "px"
        });



});

// window.alert("String message")
