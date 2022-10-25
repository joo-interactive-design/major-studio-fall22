/*
RiTa.js reference:
https://rednoise.org/rita/reference/index.php
*/

// our input text
let textData =
  "As described in Question 13 (self-assessment), activities were carried in the challenging context of the pandemic and related restrictions. When possible, activities were conducted online. However, the JP team decided to postpone some of the activities that required larger gatherings (including., the national policy dialogue series) to 2022, in order to ensure the highest possible impact. Similarly, the pandemic overburdened national authorities and created uncertainty over public spending due to the added pressure on national budgets and the disruption of the regular planning and budget execution. This led to a lower-than-expected level of involvement of national counterparts with JP activities. Furthermore, during March-September 2021, the JP was constrained by an institutional slowdown caused by the April 2021 general elections and the interim period until the appointment of the new Government Cabinet. As such, the period was not conducive to discussing policy and structural changes.";

let metadata = [
  [
    "pandemic",
    "covid-19",
    "restriction",
    "uncertainty",
    "vaccine",
    "immunity",
    "disease",
    "illness",
    "death",
    "rish",
    "slow",
  ],
  [
    "talent",
    "employer",
    "work(er)",
    "resignation",
    "employee",
    "well-being",
    "office",
    "tallent Issue",
    "hire",
    "staff",
  ],
  [
    "technology",
    "digital",
    "online",
    "accelerate",
    "technology",
    "innovation",
    "transformation",
    "remote",
    "face-to-face",
    "virtual",
    "hybrid",
  ],
  [
    "sustainability",
    "wildfire",
    "ice storm",
    "flood",
    "climate",
    "global",
    "temperature",
    "development goal",
    "energy",
  ],
  ["government", "politics", "elections", "policy", "economy"],
];
let colors = ["bg-green", "bg-yellow", "bg-red", "bg-purple", "bg-blue"];

processRita(textData);

let closeIcon = document.querySelector('.close')
let paragraphContainer = document.querySelector('.paragraph-container')

paragraphContainer.addEventListener('click', (event) => {
  target = event.target
  if(target.classList.contains('close')) {
    paragraphContainer.classList.add('none')
  }
})



function processRita(input) {
  // change our input to a Rita string
  let rs = new RiString(input);

  // break our phrase into words:
  let words = rs.words();
  // console.log(words);

  // get part-of-speech tags
  // part-of-speech tags list: https://rednoise.org/rita/reference/RiTa/pos/index.html
  let pos = rs.pos();
  //   console.log(pos);

  // app is the html element we are writing into
  let paragraph = d3.select("#paragraph");

  // let's go through all words
  words.forEach((word, i) => {
    // let's make one span per word
    let span = paragraph.append("span").text(word);

    for (let i = 0; i < metadata.length; i++) {
      for (let j = 0; j < metadata[i].length; j++) {
        if (word.includes(metadata[i][j])) {
          span.attr("class", `${colors[i]}`);
        }
      }
    }

    if (!RiTa.isPunctuation(pos[i + 1])) {
      //if the word is a noun, let's attach the class "noun"
      // if (
      //   pos[i] == "nn" ||
      //   pos[i] == "nns" ||
      //   pos[i] == "nnp" ||
      //   pos[i] == "nnps"
      // ) {
      //   span.attr("class", "noun");
      //   //if the word is a verb, attach the class "verb"
      // } else if (pos[i] == "vb") {
      //   span.attr("class", "verb");
      //   //if the word is an adjective, attach the class "adjdctive"
      // } else if (pos[i] == "jj" || pos[i] == "jjr" || pos[i] == "jjs") {
      //   span.attr("class", "adjective");
      // }

      // by placing each word into an array separately we have lost the white spaces, let's add them back
      paragraph.append("span").text(" ");
    }

    // word += " ";
  });
}
