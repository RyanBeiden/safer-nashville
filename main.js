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

const currentRoadMap = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].phase === '0') {
      domString += `<h3>${arr[i].phase}</h3>`;
      domString += '<div class="phase-layout">';
        domString += '<div class="stack">';
          domString += '<h4>All Residents</h4>';
          domString += `<p>${arr[i].allResidents}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Restaurants & Bars Serving Food</h4>';
          domString += `<p>${arr[i].restaurantBars}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Bars & Entertainment Venues</h4>';
          domString += `<p>${arr[i].entertainment}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Retail Stores & Commercial Businesses</h4>';
          domString += `<p>${arr[i].retailStores}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Nail Salons, Hair Salons, Massage, Etc.</h4>';
          domString += `<p>${arr[i].salons}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Healthcare & Dental</h4>';
          domString += `<p>${arr[i].healthCare}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Gyms & Fitness</h4>';
          domString += `<p>${arr[i].gyms}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Playgrounds, tennis & basketball courts</h4>';
          domString += `<p>${arr[i].playGrounds}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Sports Venues</h4>';
          domString += `<p>${arr[i].venues}</p>`;
        domString += '</div>';
      domString += '</div>';
    } else;
  }
  printToDom("#phases", domString);
}

const allRoadMap = (arr, phaseNumber) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].phase === phaseNumber) {
      domString += `<h3>${arr[i].phase}</h3>`;
      domString += '<div class="phase-layout">';
        domString += '<div class="stack">';
          domString += '<h4>All Residents</h4>';
          domString += `<p>${arr[i].allResidents}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Restaurants & Bars Serving Food</h4>';
          domString += `<p>${arr[i].restaurantBars}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Bars & Entertainment Venues</h4>';
          domString += `<p>${arr[i].entertainment}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Retail Stores & Commercial Businesses</h4>';
          domString += `<p>${arr[i].retailStores}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Nail Salons, Hair Salons, Massage, Etc.</h4>';
          domString += `<p>${arr[i].salons}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Healthcare & Dental</h4>';
          domString += `<p>${arr[i].healthCare}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Gyms & Fitness</h4>';
          domString += `<p>${arr[i].gyms}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Playgrounds, tennis & basketball courts</h4>';
          domString += `<p>${arr[i].playGrounds}</p>`;
        domString += '</div>';
        domString += '<div class="stack">';
          domString += '<h4>Sports Venues</h4>';
          domString += `<p>${arr[i].venues}</p>`;
        domString += '</div>';
      domString += '</div>';
    } else;
  }
  printToDom("#phases", domString);
}

const init = () => {
  currentRoadMap(eachPhase);
}

init();
