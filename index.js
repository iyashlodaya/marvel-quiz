const readLineSync = require('readline-sync');
const chalk = require('chalk');

const contestName = readLineSync.question(chalk.red('What is your name: '));

console.log(chalk.red('Welcome ' + contestName + '! Are you a Marvel Fan?'));
console.log(chalk.bgYellow(`===== GAME BEGINS =====`));
console.log(chalk.red(`Just type A. or B. when you answer.`));

let answerList = [];
let score = 0;
//array of questions
const questionsList = [
  {
  question: "Which Avenger Does Captain America fight With in Captain America - Civil War? \n A. Ironman B. Hulk \n",
  answer: "a"
  },
  {
  question: "What is Thor's Hammer called? \n A. Mjolnir  B. Vibranium  \n",
  answer: "a"
  },
  {
  question: "What is Bucky Barnes known as? \n A. Black Panther B. Winter Soldier \n",
  answer: "b"
  },
  {
  question: "Is Captain America the Strongest Avenger? \n A. Yes  B. Obviously Yes \n",
  answer: "b"
  },
  {
  question: "Fill in The Blanks: \nI love you _____ \nA. 3000  B. 9000 \n",
  answer: "a"
  },
	{
  question: "What is real name of Ant-man? \nA. Scott Lang B. Paul Rudd \n",
  answer: "a"
  },
	{
  question: "What is the name of Tony Stark’s A.I. assistant, who becomes the basis of The Vision? \nA. J.A.R.V.I.S \nB. A.L.F.R.E.D  \n",
  answer: "a"
  }
];

// function which asks a question
const askQuestion = () => {
  //looping into questions array!
  for (let i=0; i <= questionsList.length - 1; i++) {
    const answer = readLineSync.question(chalk.yellow(questionsList[i].question));
    const result = checkAnswer(answer, questionsList[i].answer.toString());
    if (result === true) {
      score = score + 1;
      console.log(`Current Score: => ${score}`);
      console.log(`-------------------`);
      if(score == 5 ) {
        console.log(chalk.bgGreen(`You are going good! SMASH the full score!!!!`));
      }
			else if (score == 7) {
				console.log ('You love Marvel 3000. Congratulations!!')
			}
			else {
				continue;
			}
    }
    else {
			if(score == 3) {
				console.log(chalk.green('Hail Hydraa! You get a another chance!'))
				continue
			}
			else if (score < 3) {
				console.log(chalk.bgRed('What were you the god of again?  Try the quiz again'));
				break;
			}
			 else 
			{
      console.log(`Your score was: ${score} better luck Next Time!!`);
      break;
			}
    }
  }
}

// function which checks user's answer with correct answer
const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer.toString().toLowerCase() === correctAnswer.toLowerCase()) {
    console.log(`Correct Answer`);
    return true;
  }
  else {
    console.log(`Wrong Answer`);
    return false;
  }
}

askQuestion();