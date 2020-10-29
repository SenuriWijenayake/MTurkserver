//Set numbers to distinguish different scenarios
module.exports = [
  {
    "set": 1,
    "qId": 1,
    "description": "Imagine that you have applied for a home loan online from “Loans Online”. You have carefully filled out the online application form and uploaded all of the required documents. The “Loans Online” website uses an algorithmic system to provide an immediate yes/no decision on your application (‘the initial decision’). Your application for a loan is declined.",
    "optionOne": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will \t\tbe reviewed to ensure it is functioning as it should",
      "time": "1 day"
    },
    "optionTwo": {
      "reviewer": "Human",
      "style": "A new decision will be made by the reviewer, that takes into account the initial decision and your views on the decision",
      "time": "30 days"
    }
  },
  {
    "set": 2,
    "qId": 2,
    "description": "Imagine that you have applied for yourdream job. You are required to upload a 30 second video introducing yourself.The hiring company will use an algorithmic system to analyse your body languageand speech patterns in the video to assess your personality and yoursuitability for the job. This assessment will determine whether you are offeredan interview. You are not offered an interview (‘the initial decision’).",
    "optionOne": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "1 day"
    },
    "optionTwo": {
      "reviewer": "A different algorithmic system",
      "style": "A new decision will be made by the reviewer, that takes into account the initial decision and your views on the decision",
      "time": "1 day"
    }
  },
  {
    "set": 3,
    "qId": 3,
    "description": "Imagine that you need to write an essayfor a course you are taking. You have spent weeks researching and writing andare really pleased with your essay. You find out that the essay will be markedusing ‘Automarker’, analgorithmic system that has learnt to find patterns in essays that indicatehigh performance. ‘Automarker’will give you a mark between 0 and 100. You score 40 for your essay (‘the initial decision’).",
    "optionOne": {
      "reviewer": "A different algorithmic system",
      "style": "The reviewer will make a new decision that does not take into account the initial decision",
      "time": "180 days"
    },
    "optionTwo": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "30 days"
    }
  },
  {
    "set": 4,
    "qId": 4,
    "description": "Imagine that you are a teacher. The school you work at has decided to use an algorithmic system to assess the performance of their teaching staff. The system uses a number of factors to assess your performance including student test scores. Your teaching contract will be terminated if you receive a low score from the algorithmic system. You receive a low score and your contract is terminated (‘the initial decision’).",
    "optionOne": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "1 day"
    },
    "optionTwo": {
      "reviewer": "Human",
      "style": "A new decision will be made by the reviewer, that takes into account the initial decision and your views on the decision",
      "time": "30 days"
    }
  },
  {
    "set": 5,
    "qId": 5,
    "description": "Imagine you are applying for admission to a University. You carefully fill out all of the required forms, you provide a copy of your resume and record of education along with an entrance essay. The University uses an algorithmic system to analyse all of this information and any other available data about you. The algorithmic system will determine whether or not you are admitted to the University. Your application for admission is unsuccessful (‘the initial decision’).",
    "optionOne": {
      "reviewer": "Human",
      "style": "A new decision will be made by the reviewer, that takes into account the initial decision",
      "time": "30 days"
    },
    "optionTwo": {
      "reviewer": "A different algorithmic system",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "1 day"
    }
  },
  {
    "set": 6,
    "qId": 6,
    "description": "Imagine that you run a small business. You rely on various social media platforms to advertise your products. The social media platforms that you advertise your products on use algorithmic systems that automatically remove content determined to be ‘offensive’. Your latest advertising campaign has been automatically removed (‘the initial decision’).",
    "optionOne": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "180 days"
    },
    "optionTwo": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "30 days"
    }
  },
  {
    "set": 7,
    "qId": 7,
    "description": "Imagine that you have decided to create a profile on a new dating app. You are required to upload photos of yourself. The app uses an algorithmic system that rates your attractiveness on a scale of 1 (very low attractiveness) to 5 (very high attractiveness) based on your photos. You are only able to see profiles that have received the same attractiveness rating as you. You receive an attractiveness rating score of 1 (‘the initial decision’).",
    "optionOne": {
      "reviewer": "Human",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "30 days"
    },
    "optionTwo": {
      "reviewer": "A different algorithmic system",
      "style": "The algorithmic system that made the initial decision will be reviewed to ensure it is functioning as it should",
      "time": "1 day"
    }
  }
];
