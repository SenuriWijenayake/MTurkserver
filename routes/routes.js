var logic = require('../code');
var utils = require('../utils');

var appRouter = function(app) {

  //Endpoint to save user demographic data
  app.post('/user', function(req, res) {
    console.log("Request received at user data");
    return new Promise(function(resolve, reject) {
      logic.saveUserData(req.body).then(function(obj) {
        resolve(res.status(200).send({
          "id": obj.id,
          "order": obj.qOrder
        }));
      });
    });
  });

  //Endpoint to get a question by id
  app.post('/question', function(req, res) {
    data = logic.getQuestionById(req.body.qId);
    result = JSON.stringify(data);
    res.status(200).send(result);
  });

  app.post('/saveAnswer', function(req, res) {

    console.log("Request received at saveAnswer endpoint");
    var answer = {};
    answer.userId = req.body.userId;
    answer.question = parseInt(req.body.question);
    answer.set = parseInt(req.body.set);
    answer.optionSelected = req.body.optionSelected;
    answer.explanation = req.body.explanation;

    return new Promise(function(resolve, reject) {
      logic.saveAnswer(answer).then(function(id) {
        resolve(res.status(200).send(id));
      });
    });
  });

  //Endpoint to update answer
  app.post('/updateAnswer', function(req, res) {
    console.log("Request received at update answer");
    var userAnswer = {};

    userAnswer.userId = req.body.userId;
    userAnswer.questionId = parseInt(req.body.questionId);

    userAnswer.manipulationRadioOpinion = parseInt(req.body.manipulationRadioOpinion);
    userAnswer.newOpinion = parseInt(req.body.newOpinion);
    userAnswer.newConfidence = parseInt(req.body.newConfidence);
    // userAnswer.newTextOpinion = req.body.newTextOpinion;

    userAnswer.newLike = parseInt(req.body.like);
    userAnswer.newComment = parseInt(req.body.comment);
    userAnswer.newShare = parseInt(req.body.share);
    userAnswer.newReport = parseInt(req.body.report);
    userAnswer.newFactcheck = parseInt(req.body.factcheck);

    return new Promise(function(resolve, reject) {
      logic.updateAnswer(userAnswer).then(function(id) {
        resolve(res.status(200).send(id));
      });
    });
  });


  //Endpoint to get all the questions and answers
  app.get('/questions', function(req, res) {
    data = logic.getAllQuestions();
    result = JSON.stringify(data);
    res.status(200).send(result);
  });

  //Endpoint to index
  app.get('/', function(req, res) {
    result = JSON.stringify({
      message: "hellow world"
    });
    res.status(200).send(result);
  });



  //Endpoint to get the big five questions
  app.get('/bigFiveQuestions', function(req, res) {
    data = logic.getBigFiveQuestions();
    res.status(200).send(data);
  });

  //Endpoint to process the big five data
  app.post('/bigFiveData', function(req, res) {
    console.log("Request received at big five");
    return new Promise(function(resolve, reject) {
      var userId = req.body.userId;
      logic.getVerificationCode(userId).then(function(code) {
        logic.processBigFive(req.body);
        console.log(code);
        resolve(res.status(200).send("<h2 style='padding:20px; text-align:center;'> Thank you for your participation! <br> <br> Please use the following code to claim your reward. <br/><br/>Your code is<br/><p style='color:red;font-size:35px;'>" + code + "</p></h2>"));
      })
    });
  });

  //Endpoint to save user chats
  app.post('/saveChats', function(req, res) {
    console.log("Request received at user chat");
    return new Promise(function(resolve, reject) {
      var userId = req.body.userId;
      var chat = req.body.chats;

      logic.saveUserChat(userId, chat).then(function(status) {
        resolve(res.status(200).send(status));
      });
    });
  });



  app.post('/chat', function(req, res) {
    console.log(req.body);
    res.status(200).send("Response from Quiz Bot");
  });

  app.post('/randomValues', function(req, res) {
    var isMajority = req.body.isMajority;
    var values = [];
    for (var i = 0; i < req.body.values.length; i++) {
      values.push(parseInt(req.body.values[i]))
    }
    console.log(values);
    var result = utils.randValues(isMajority, values)
    res.status(200).send(result);
  });

};

module.exports = appRouter;
