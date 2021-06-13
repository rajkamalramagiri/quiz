import kerala from "../assets/kerala.png";
import ap from "../assets/ap.jpeg";
const qBank = [
  {
    id: 1,
    description: {
      image:
        "https://image.shutterstock.com/image-vector/tamil-nadu-districts-vector-map-260nw-1009413172.jpg",
    },
    questions: [
      {
        question: "What is the Capital of Tamil Nadu",
        answers: ["Chennai", "Madurai"],
        correct: "Chennai",
        questionId: "1001",
      },
      {
        question: "What is the language spoken in Tamil Nadu",
        answers: ["Telugu", "Tamiz"],
        correct: "Tamiz",
        questionId: "1002",
      },
    ],
  },
  {
    id: 2,
    description: {
      image: ap,
    },
    questions: [
      {
        question: "What is the Capital of Telangana",
        answers: ["Mumbai", "Hyderabad"],
        correct: "Hyderabad",
        questionId: "2001",
      },
      {
        question: "What is the language spoken in Telangana ",
        answers: ["Telugu", "Tamiz"],
        correct: "Telugu",
        questionId: "2002",
      },
    ],
  },
  {
    id: 3,
    description: {
      image: kerala,
    },
    questions: [
      {
        question: "What is the Capital of Kerala",
        answers: ["Chennai", "Thiruvananthapuram", "Palakadu"],
        correct: "Thiruvananthapuram",
        questionId: "3001",
      },
      {
        question: "What is the language spoken in Kerala",
        answers: ["Telugu", "Malayalam", "Hindi"],
        correct: "Malayalam",
        questionId: "3002",
      },
    ],
  },
];

const quizService = (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

export default quizService;
