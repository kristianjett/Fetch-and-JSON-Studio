// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const destination = document.getElementById("container");
            let astronautData = '';
            const jsonArr = json;
            const sortedJsonArr = jsonArr.sort(function(a, b){
                return b.hoursInSpace - a.hoursInSpace
            });
            // for (person of sortedJsonArr){
                
            //     astronautData += destination.innerHTML =`
            //         <div class="astronaut">
            //             <div class="bio">
            //                 <h3>${person.firstName} ${person.lastName}</h3>
            //                 <ul>
            //                     <li>Hours in Space: ${person.hoursInSpace}</li>
            //                     <li id="active">Active: ${person.active}</li>
            //                     <li>Skills: ${person.skills}</li>
            //                 </ul>
            //             </div>
            //             <img class="avatar" src="${person.picture}">
            //         </div>
            //     `;
            // }
            for (person of sortedJsonArr){
                if (person.active === true){
                    astronautData += destination.innerHTML =`
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${person.firstName} ${person.lastName}</h3>
                                <ul>
                                    <li>Hours in Space: ${person.hoursInSpace}</li>
                                    <li>Active: <span class="activeTrue">${person.active}</span></li>
                                    <li>Skills: ${person.skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${person.picture}">
                        </div>
                    `;
                } else {
                    astronautData += destination.innerHTML =`
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${person.firstName} ${person.lastName}</h3>
                                <ul>
                                    <li>Hours in Space: ${person.hoursInSpace}</li>
                                    <li>Active: ${person.active}</li>
                                    <li>Skills: ${person.skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${person.picture}">
                        </div>
                    `;
                }
            }
            destination.innerHTML = astronautData;
        });
    });
});