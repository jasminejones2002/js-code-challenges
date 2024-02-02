/* 
Using the given dogs array, create a variable named "corgis" whose value is an array containing only the dogs of breed Corgi - use the filter method to get this done. 
When a user clicks the button "Corgis!!",
Use the corgis variable to add only the dogs with the breed "Corgi" to the Corgi Container - List the dogs' names in the Corgi Container
*/

// Use these dogs:
const dogs = [
    { name: "Cheddar", breed: "Corgi" },
    { name: "Toto", breed: "Terrier" },
    { name: "Susan", breed: "Corgi" },
];

function corgiList() {
    const corgis = dogs.filter((dog) => 
    dog.breed === "Corgi"
)
    const corgiBtn = document.getElementById("corgi-button")
    corgiBtn.addEventListener("click", () => {
        const corgiContainer = document.getElementById("corgi-container")
        corgis.forEach((corgi) => {
            const createHtml = document.createElement('p')
            createHtml.textContent = corgi.name
            corgiContainer.appendChild(createHtml)
        })
    })
}
corgiList()