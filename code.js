//import the data from the database
var utils = require('./utils');
var bigVar = require('./db/bigFiveVariables');
var db = require('./db/database');
var shuffle = require('shuffle-array');
var questions = utils.questions;


exports.shuffleArray = function(array){
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
};

//Function to create the questions and answers
exports.getAllQuestions = function() {
  var questions = utils.questions;
  var response = [];

  for (var i = 0; i < questions.length; i++) {
    var ques = questions[i];

    var q = {};
    q.questionId = ques.questionNumber;
    q.questionText = ques.questionText;
    q.questionImg = ques.img ? ques.img : null;
    q.answers = ques.answers;

    response.push(q);
  }
  return (response);
};

//Function to get question by Id
exports.getQuestionById = function(id) {
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].qId == id) {
      return (questions[i]);
    }
  }
};

//Function to process the big five data
exports.processBigFive = function(result) {
  var userId = result.userId;
  delete result["userId"];
  var answers = result;

  //Save all to the database
  db.saveBigFiveRaw(userId, answers);

  var allScores = {};

  for (var i = 0; i < bigVar.length; i++) {
    var trait = bigVar[i].key;
    var indexes = bigVar[i].values;
    var score = 0;

    for (var j = 0; j < indexes.length; j++) {
      if (answers[indexes[j].id]) {
        var answer = parseInt(answers[indexes[j].id]);
        if (indexes[j].isReverse) {
          answer = (5 - answer) + 1;
        }
        score = score + answer;
      }
    }
    allScores[trait] = score;
  }
  db.saveBigFiveResults(userId, allScores);
};

//Function to get all big five questions
exports.getBigFiveQuestions = function() {
  var questions = db.getBigFiveQuestions();
  return (questions);
};

//Function to save user data
exports.saveUserData = function(user) {
  var q = [1,2,3,4,5,6,7];
  var qOrder = shuffle(q);

  user.qOrder = qOrder;
  return new Promise(function(resolve, reject) {
    db.saveUser(user).then(function(userId) {
      resolve({"id" : userId, "qOrder" : qOrder});
    });
  });
};

//Function to save an answer
exports.saveAnswer = function(ans) {
  return new Promise(function(resolve, reject) {
    db.saveAnswer(ans).then(function(answerId) {
      resolve(answerId);
    });
  });
};

//Function to update an answer
exports.updateAnswer = function(answer) {
  return new Promise(function(resolve, reject) {
    db.updateAnswer(answer).then(function(answerId) {
      resolve(answerId);
    });
  });
};

//Function to generate verification code
exports.getVerificationCode = function(userId){
  return new Promise(function(resolve, reject) {
    db.getAllAnswersByUser(userId).then(function(docs) {
      var code;
      var incorrectCount = 0;
      for (var i = 0; i < docs.length; i++) {
        var qNumber = docs[i].questionId;
        var expected = utils.getQuestionByNumber("1", qNumber)['majority'];
        var userAnswer = docs[i].manipulationRadioOpinion;

        if (expected != userAnswer){
          incorrectCount = incorrectCount + 1;
        }
      }
      if (incorrectCount > 5){
        code = userId + "_" + Date.now() + "_" + "F" + incorrectCount + "_" + (28-incorrectCount);
      } else {
        code = userId + "_" + Date.now() + "_" + "P" + incorrectCount + "_" + (28-incorrectCount)
      }
      console.log(code);
      //Add the code to the user profile
      db.addCodeToUser(userId, code).then(function(id) {
        resolve(code);
      });
    });
  });
};
