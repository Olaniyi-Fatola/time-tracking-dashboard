const Daily = document.getElementById("daily");
const Weekly = document.getElementById('weekly')
const Monthly = document.getElementById("monthly");
let clickCount = 0;

 
//This show the daily dashboard also reverting back to the weekly dashbaord
Daily.onclick = function(){
        boxes.className = "visible";
        boxes2.className = "";
        boxesMonthly.className = "";
        daily();
}
//Refresh the page to avoid increment in the daily() for loop
Daily.addEventListener('click', () => {
        clickCount++; // Increment the counter on each click

        if (clickCount === 2) {
            location.reload(); // Refresh the page on the second click
        }
    });
async function daily() {
    const titles = await getdata();

    
    const titleCard = document.querySelector('#boxes');

    for(const title of titles){

        titleCard.innerHTML += `
        <div id="${title.title}">
        <img class="icons" src="${title.image}" alt="work icon">
            <div id="cards">
                <div class="subject" >
                    <div class="desktopdot">
                        <h4>${title.title}</h4>
                        <img class="dots" src="${title.ellipsis}" alt="ellipsis icon">
                    </div>
                    <h5>${title.timeframes.daily.current}hrs</h5>
                </div>
                <div class="ellipsis">
                    <img class="threedots" src="${title.ellipsis}" alt="ellipsis icon">
                    <p>Yesterday-${title.timeframes.daily.previous}hrs</p>
                </div>
            </div>
        </div>
        `;
    } 
}  

//This show the monthly dashboard also reverting back to the weekly dashbaord
Monthly.onclick = function(){
    boxes.className = "";
    boxes2.className = "";
    boxesMonthly.className = "visible";
    monthly();
    }

//Refresh the page to avoid increment in the monthly() for loop
Monthly.addEventListener('click', () => {
    clickCount++; // Increment the counter on each click

    if (clickCount === 2) {
        location.reload(); // Refresh the page on the second click
    }
});
async function monthly() {
    const titles = await getdata();

    
    const titleCard = document.querySelector('#boxesMonthly');

    for(const title of titles){

        titleCard.innerHTML += `
        <div id="${title.title}">
        <img class="icons" src="${title.image}" alt="work icon">
            <div id="cards">
                <div class="subject" >
                    <div class="desktopdot">
                        <h4>${title.title}</h4>
                        <img class="dots" src="${title.ellipsis}" alt="ellipsis icon">
                    </div>
                    <h5>${title.timeframes.monthly.current}hrs</h5>
                </div>
                <div class="ellipsis">
                    <img class="threedots" src="${title.ellipsis}" alt="ellipsis icon">
                    <p>Last Month-${title.timeframes.monthly.previous}hrs</p>
                </div>
            </div>
        </div>
        `;
    }
}
        
//This show the weekly dashboard
Weekly.onclick = function(){
    boxes.className = "";
    boxes2.className = "visible";
    boxesMonthly.className = "";
}


async function getdata() {
    const res = await fetch ("./database/data.json");
    const data = await res.json();

    return data;
}
