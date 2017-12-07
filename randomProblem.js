const fs = require('fs');
const path = require('path');

const randomProblem = () => {
  fs.readdir(__dirname, (err, data) => {
    let problems = data.filter(file => /^[^.]/.test(file) && /^(?!(README))/.test(file));
    let randomNumber = Math.floor(Math.random() * problems.length);
    console.log(problems[randomNumber]);
  });
};

randomProblem();
