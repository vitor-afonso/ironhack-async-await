// jshint esversion:8

const directions = [

    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
];
  
function obtainDirections(step) {

    return new Promise ( (resolve, reject) => {

        //setTimeout simulates the time a task could take to be done
        setTimeout(() => {

            // action to be performed
            console.log( directions[step] );

            // defining error description or resolving a promise
            if (!directions[step]) reject("Instructions not found.");
            else resolve();

        }, 2000); 
        
    });
}
  
async function getCoffee() {
    //try - handle resolved Promise
    try {

      await obtainDirections(0);
      await obtainDirections(1);
      await obtainDirections(20);
      await obtainDirections(3);
      
      console.log("You arrived at your destination!");

    //catch - handle rejected Promise
    } catch(err) {

      console.log(err);
    } 
  }

//getCoffee();
  


/************************* Working with fetch()*************************/

//(limit = 0) sets the default value in case no argument is passed
async function displayMissionPatches(limit = 0) {
 
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches");

      
      const jsonResponse = await response.json();
      
      
      console.log(jsonResponse);
      const launchesToDisplay = jsonResponse.slice(0, limit);
      
      launchesToDisplay.forEach((launchObj) => {
        const patchImage = launchObj.links.patch.small;
        const imgElement = document.createElement("img");
   
        imgElement.setAttribute("src", patchImage);
        imgElement.setAttribute("width", 200);
        document.body.appendChild(imgElement);
      });
      
    } catch (error) {
      // Handle error or a rejected Promise
      console.log("Something went wrong!", error);
    }
  }
   
displayMissionPatches(3);
  

  