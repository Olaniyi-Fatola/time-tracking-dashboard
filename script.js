const Daily = document.getElementById("#daily");
const Weekly = document.getElementById("#weekly");
const Monthly = document.getElementById("#monthly");
const button = document.getElementById("period");

 
/*function main(){
    if(button === Weekly){
        // weekly time track dashboard appear
        
        weekly();
    }
    else{
        // it disappears when other time is clicked
        daily();
    }
}

/*Monthly.onclick = function(){
    if(){
        // monthly time track dashboard appear
        
        monthly();
    }
    else{
        // it disappears when other time is clicked
        
        daily();
    }
}*/

monthly()

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
                                <p>Last Week-${title.timeframes.daily.previous}hrs</p>
                            </div>
                        </div>
                    </div>
            `;
    }
}

async function weekly(data) {
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
                                <h5>${title.timeframes.weekly.current}hrs</h5>
                            </div>
                            <div class="ellipsis">
                                <img class="threedots" src="${title.ellipsis}" alt="ellipsis icon">
                                <p>Last Week-${title.timeframes.weekly.previous}hrs</p>
                            </div>
                        </div>
                    </div>
            `;
    }
}

async function monthly() {
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
                                <h5>${title.timeframes.monthly.current}hrs</h5>
                            </div>
                            <div class="ellipsis">
                                <img class="threedots" src="${title.ellipsis}" alt="ellipsis icon">
                                <p>Last Week-${title.timeframes.monthly.previous}hrs</p>
                            </div>
                        </div>
                    </div>
            `;
    }
}



async function getdata() {
    const res = await fetch ("./database/data.json");
    const data = await res.json();

    return data;
}

