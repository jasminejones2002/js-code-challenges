/* 
First create a function that will render the people array to the DOM. List each person - "{name} is {age} years old."
Check the HTML file to see what element you should be appending them to.
Then write the code that will allow the user to click the button and
sort the people by age in ascending order.
 */

const peopleArr = [
    { id: 1, name: 'Maria', age: 32 },
    { id: 2, name: 'Ryan', age: 37 },
    { id: 3, name: 'Zoe', age: 11 },
    { id: 5, name: 'Adette', age: 9 },
    { id: 6, name: 'Gio', age: 15 }
  ];
  
function renderPeople(peopleArr) {
  const list = document.getElementById('list')

  const renderList = () => {
    list.innerHTML = ''

    const people = peopleArr.forEach(person => {
      const peopleInfo = document.createElement('li')
      peopleInfo.textContent =`${person.name} is ${person.age} years old.`
      list.appendChild(peopleInfo)
    })
  }
  const ageBtn = document.getElementById('sortButton')

  ageBtn.addEventListener('click', () => {
    peopleArr.sort((a, b) => {
      return a.age - b.age
    })
    renderList()
  })
  renderList()
}

renderPeople(peopleArr)