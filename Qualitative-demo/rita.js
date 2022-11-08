/*
RiTa.js reference:
https://rednoise.org/rita/reference/index.php
*/

// our input text
let wordsList = [
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

function processRita(input, index) {
  // change our input to a Rita string
  let rs = new RiString(input);

  // break our phrase into words:
  let words = rs.words();
  // console.log(words);

  // get part-of-speech tags
  // part-of-speech tags wordsList: https://rednoise.org/rita/reference/RiTa/pos/index.html
  let pos = rs.pos();
  //   console.log(pos);

  // app is the html element we are writing into
  let paragraph = d3.select(`#paragraph-${index}`);

  // let's go through all words
  words.forEach((word, i) => {
    // let's make one span per word
    let span = paragraph.append("span").text(word);

    for (let i = 0; i < wordsList.length; i++) {
      for (let j = 0; j < wordsList[i].length; j++) {
        if (word.includes(wordsList[i][j])) {
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
