var createPolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.announcePolitician = function(){
  };
  politician.announcePolitician();
  politician.partyColor = partyColor;


  //Votes total
politician.tallyUpTotalVotes = function()
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};

  return politician;
};


var ellen = createPolitician("Ellen Degeneres", [245, 141, 136]);

var oprah = createPolitician ("Oprah Winfrey", [132, 17, 11]);


ellen.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]

oprah.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

ellen.electionResults[9] = 1;
oprah.electionResults[9] = 28;

ellen.electionResults[4] = 17;
oprah.electionResults[4] = 38;


ellen.electionResults[43] = 11;
oprah.electionResults[43] = 27;


var setStateResults = function (state)
  {
    theStates[state].winner = null
    if (ellen.electionResults[state] > oprah.electionResults[state]) {
      theStates[state].winner = ellen;
    }
    else if (ellen.electionResults[state] < oprah.electionResults[state]) {
      theStates[state].winner = oprah;
    }

  var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
    else {
      theStates[state].rgbColor = [11,32,57];
    }

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
    stateName.innerText = theStates[state].nameFull;
  var abbrev = header.children[1];
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
  var body = stateInfoTable.children[1];
  var candidate1Name = body.children[0].children[0];
    candidate1Name.innerText = ellen.name;
  var candidate1Results = body.children[0].children[1];
    candidate1Results.innerText = ellen.electionResults[state];
  var candidate2Name = body.children[1].children[0];
    candidate2Name.innerText = oprah.name;
  var candidate2Results = body.children[1].children[1];
    candidate2Results.innerText = oprah.electionResults[state];
  var winnerName = body.children[2].children[1];
    if (theStates[state].winner === null){
      winnerName.innerText = "DRAW";
    } else {
      winnerName.innerText = theStates[state].winner.name;
    }
  };



ellen.tallyUpTotalVotes();
oprah.tallyUpTotalVotes();

console.log(ellen.electionResults);
console.log(oprah.electionResults);

console.log(ellen.totalVotes);
console.log(oprah.totalVotes);


 //Announce Winner
  var winner = "???";

    if (ellen.totalVotes > oprah.totalVotes){
      winner = ellen.name
    }else if (ellen.totalVotes < oprah.totalVotes){
      winner = oprah.name;
    }else{
     winner = "Draw"
    }


  console.log("And the winner is " + winner +"!!!");


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = ellen.name;
row.children[1].innerText = ellen.totalVotes;
row.children[2].innerText = oprah.name;
row.children[3].innerText = oprah.totalVotes;
row.children[5].innerText = winner;
