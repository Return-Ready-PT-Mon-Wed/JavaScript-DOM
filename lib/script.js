//// Change text of p1, p2 ////
const paraBothMessage = "We are coders!";
const paraOneMessage = "Developers for life!";

var bothPara = document.querySelectorAll(".para");

for (let i = 0; i < bothPara.length; i++) {
  const thisPara = bothPara[i];
  thisPara.innerText = paraBothMessage;
}

var paraOne = document.getElementById("paraOne");
paraOne.innerText = paraOneMessage;

//// characters  ////
var characters = [
  {
    name: "Stacy Spikes",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "Katherine Johnson",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "Annie J. Easley",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "Kathryn Finney",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "Jessie Woolley-Wilson",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "Guy Primus",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "Kimberly Bryant",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
  {
    name: "David L. Steward",
    bio: "Who am I?",
    contribution: "What did/do I do?"
  },
];
