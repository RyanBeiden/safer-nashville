const eachPhase = [
  {
    phase: "0",
    allResidents: "Hi",
    restaurantBars: "Hello",
    entertainment: "2",
    retailStores: "3",
    salons: "For Sure",
    healthCare: "2",
    gyms: "Yep",
    playGrounds: "Yesh",
    venues: "OK"
  },
  {
    phase: "1",
    allResidents: "Hi",
    restaurantBars: "Hello",
    entertainment: "2",
    retailStores: "3",
    salons: "For Sure",
    healthCare: "2",
    gyms: "Yep",
    playGrounds: "Yesh",
    venues: "OK"
  },
  {
    phase: "2",
    allResidents: "Hi",
    restaurantBars: "Hello",
    entertainment: "2",
    retailStores: "3",
    salons: "For Sure",
    healthCare: "2",
    gyms: "Yep",
    playGrounds: "Yesh",
    venues: "OK"
  },
  {
    phase: "3",
    allResidents: "Hi",
    restaurantBars: "Hello",
    entertainment: "2",
    retailStores: "3",
    salons: "For Sure",
    healthCare: "2",
    gyms: "Yep",
    playGrounds: "Yesh",
    venues: "OK"
  },
  {
    phase: "4",
    allResidents: "Hi",
    restaurantBars: "Hello",
    entertainment: "2",
    retailStores: "3",
    salons: "For Sure",
    healthCare: "2",
    gyms: "Yep",
    playGrounds: "Yesh",
    venues: "OK"
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const roadMap = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    domString += '<div>';
    domString += `<h3>${arr[i].phase}</h3>`;
    domString += `<p>${arr[i].allResidents}</p>`;
    domString += `<p>${arr[i].restaurantBars}</p>`;
    domString += `<p>${arr[i].entertainment}</p>`;
    domString += `<p>${arr[i].retailStores}</p>`;
    domString += `<p>${arr[i].salons}</p>`;
    domString += `<p>${arr[i].healthCare}</p>`;
    domString += `<p>${arr[i].gyms}</p>`;
    domString += `<p>${arr[i].playGrounds}</p>`;
    domString += `<p>${arr[i].venues}</p>`;
    domString += '</div>';
  }
  printToDom("#phases", domString);
}

const init = () => {
  roadMap(eachPhase);
}

init();
