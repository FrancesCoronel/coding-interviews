let electionWinner = votes => {
  // define initial variables
  let candidates = {};
  let finalists = [];
  let maxVotes = 0;
  // loop through and tally up votes for each candidate
  for (let vote of votes) {
    candidates[vote] = (candidates[vote] || 0) + 1;
  }
  // console.log(candidates);
  // get finalists from tally of votes
  for (let name in candidates) {
    if (candidates[name] > maxVotes) {
      maxVotes = candidates[name];
      finalists = [name];
    } else if (candidates[name] === maxVotes) {
      finalists.push(name);
    }
    // console.log(finalists);
  }
  // if only one finalist, return that one
  if (finalists.length === 1) return finalists[0];
  // otherwise sort finalists alphabetically
  finalists.sort();
  // console.log(finalists);
  // return last finalist in array
  return finalists[finalists.length - 1];
};

electionWinner([
  10,
  "Alex",
  "Michael",
  "Harry",
  "Dave",
  "Michael",
  "Victor",
  "Harry",
  "Alex",
  "Mary",
  "Mary"
]);

// Michael
