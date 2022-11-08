const barsContainer = document.querySelector(".bars-container");
const paragraphWrapper = document.querySelector(".paragraph-wrapper");

let colorTotals = {
  "bg-green": 0,
  "bg-yellow": 0,
  "bg-red": 0,
  "bg-purple": 0,
  "bg-blue": 0,
};
let colorKeys = Object.keys(colorTotals);

d3.json("https://raw.githubusercontent.com/CloudLun/joo/main/data/joo.json").then((data) => {
  // console.log(data.length);
  let textData = [];
  let countryData = [];
  data.forEach((d) => textData.push(d["paragraph"]));
  data.forEach((d) => countryData.push(d["country"]));

  countryNameGenerator(countryData);
  paragraphGenerator(countryData);

  for (let i = 0; i < data.length; i++) {
    processRita(textData[i], i);
    barChartGenerator(i);
  }

  let paragraphContainer = document.querySelectorAll('.paragraph-container')

  barsContainer.addEventListener('click', event => {
    for(let i =0; i< paragraphContainer.length; i++){
      if(event.target.attributes['data-index'].value === paragraphContainer[i].attributes['data-index'].value) {
        paragraphContainer[i].classList.remove('none')
        // console.log(paragraphContainer[i].classList)
      } else {
        paragraphContainer[i].classList.add('none')
      }
    }
  })

});

function countryNameGenerator(data) {
  let rawHTML = "";

  for (let i = 0; i < data.length; i++) {
    rawHTML += `
    <div class="country-container">
    <div class="country-name">${data[i]}</div>
    <div class="country-bar"></div>
</div>
    `;
  }

  barsContainer.innerHTML = rawHTML;
}

function paragraphGenerator(countryData) {
  let rawHTML = "";
  for (let i = 0; i < countryData.length; i++) {
    rawHTML += `
    <div class="paragraph-container none" data-index = ${i} >
    <div class="paragraph-title">
        <div class="country">${countryData[i]}</div>
        <div class="paragraph-bar"></div>
    </div>
    <div id="paragraph-${i}" class='paragraph'>${countryData[i]}</div>
</div>
    `;
  }
  paragraphWrapper.innerHTML = rawHTML;
}

function barChartGenerator(index) {
  let greenCounts =
    document.querySelectorAll(".paragraph .bg-green").length -
    colorTotals["bg-green"];
  let yellowCounts =
    document.querySelectorAll(".paragraph .bg-yellow").length -
    colorTotals["bg-yellow"];
  let redCounts =
    document.querySelectorAll(".paragraph .bg-red").length -
    colorTotals["bg-red"];
  let purpleCounts =
    document.querySelectorAll(".paragraph .bg-purple").length -
    colorTotals["bg-purple"];
  let blueCounts =
    document.querySelectorAll(".paragraph .bg-blue").length -
    colorTotals["bg-blue"];

  // console.log(colorTotals["bg-green"]);
  // console.log(colorTotals["bg-yellow"]);
  // console.log(colorTotals["bg-red"]);
  // console.log(colorTotals["bg-purple"]);
  // console.log(colorTotals["bg-blue"]);
  // console.log("********");
  // console.log(greenCounts);
  // console.log(yellowCounts);
  // console.log(redCounts);
  // console.log(purpleCounts);
  // console.log(blueCounts);

  let colorCounts = [
    greenCounts,
    yellowCounts,
    redCounts,
    purpleCounts,
    blueCounts,
  ];

  let paragraphBar = document.querySelectorAll(".paragraph-bar")[index];
  let countryBar = document.querySelectorAll(".country-bar")[index];
  let rectsData = [];

  for (let i = 0; i < colorCounts.length; i++) {
    for (let j = 0; j < colorCounts[i]; j++) {
      rectsData.push(colors[i]);
    }
  }


  let rawHTML = "";
  for (let i = 0; i < rectsData.length; i++) {
    rawHTML += `
    <div class = "bar">
    <span class=${rectsData[i]} data-index = ${index}></span></div>`;
  }
  paragraphBar.innerHTML = rawHTML;
  countryBar.innerHTML = rawHTML;

  for (let i = 0; i < colorKeys.length; i++) {
    for (let j = 0; j < rectsData.length; j++) {
      if (rectsData[j] === colorKeys[i]) {
        colorTotals[colorKeys[i]] += 1;
      }
    }
  }

}



