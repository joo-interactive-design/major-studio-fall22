let greenCounts = document.querySelectorAll(".bg-green").length - 1;
let yellowCounts = document.querySelectorAll(".bg-yellow").length - 1;
let redCounts = document.querySelectorAll(".bg-red").length - 1;
let purpleCounts = document.querySelectorAll(".bg-purple").length - 1;
let blueCounts = document.querySelectorAll(".bg-blue").length - 1;
let colorCounts = [
  greenCounts,
  yellowCounts,
  redCounts,
  purpleCounts,
  blueCounts,
];


d3.json('./data/countries.json').then(data => {
  console.log(data)
})

let paragraphBar = document.querySelector(".paragraph-bar");
let countryBar = document.querySelector(".country-bar");
let rectsData = [];

for (let i = 0; i < colorCounts.length; i++) {
  for (let j = 0; j < colorCounts[i]; j++) {
    rectsData.push(colors[i]);
  }
}
console.log(rectsData)

let rawHTML = "";
for (let i = 0; i < rectsData.length; i++) {
  rawHTML += `<span class=${rectsData[i]}></span>`;
}
paragraphBar.innerHTML = rawHTML;
countryBar.innerHTML = rawHTML

countryBar.addEventListener('click', (event) => {
    target = event.target
    paragraphContainer.classList.remove('none')
})
