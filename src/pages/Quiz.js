import { useState } from "react";
import { quiz } from "./Questions";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [result, setResult] = useState({
    load: quiz.perQuestionScore,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    passfail: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + prev.load,
            correctAnswers: prev.correctAnswers + 1,
            passfail: prev.passfail + 100 / questions.length,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="container mx-auto me-16 bg-gray-100  flex justify-center items-center">
      {!showResult ? (
        <>
          <div className="w-full">
            <h1 className="text-3xl font-bold">Quiz Questions</h1>{" "}
            <div className=" w-full bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <span className="text-bg-pri font-bold">
                  {addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="text-gray-500">
                  /{addLeadingZero(questions.length)}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-4">{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={`bg-white rounded-lg p-3 mb-2 cursor-pointer ${
                      selectedAnswerIndex === index
                        ? "bg-blue-200"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                  className={`px-4 py-2 rounded-md bg-bg-pri text-white ${
                    selectedAnswerIndex === null &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid">
            {" "}
            <h3 className="text-2xl font-bold ">Result</h3>
            <div className="text-center grid grid-cols-3 m-4">
              <p className="border border-bg-ter rounded-lg p-3 mt-3 ml-3 mr-3">
                Total Question:{" "}
                <span className="font-bold">{questions.length}</span>
              </p>
              <p className="border border-bg-ter rounded-lg p-3 mt-3 ml-3 mr-3">
                Load per Question:{" "}
                <span className="font-bold">{result.load}</span>
              </p>
              <p className="border border-bg-ter rounded-lg p-3 mt-3 ml-3 mr-3">
                Total Score: <span className="font-bold">{result.score}</span>
              </p>
              <p className="border border-bg-ter rounded-lg p-3 mt-3 ml-3 mr-3">
                Correct Answers:{" "}
                <span className="font-bold">{result.correctAnswers}</span>
              </p>
              <p className="border border-bg-ter rounded-lg p-3 mt-3 ml-3 mr-3">
                Wrong Answers:{" "}
                <span className="font-bold">{result.wrongAnswers}</span>
              </p>{" "}
              {result.passfail >= 50 && result.passfail < 100 ? (
                <>
                  <p className="border border-bg-ter rounded-lg  p-3 mt-3 ml-3 mr-3">
                    Answers(%):
                    <span className="font-bold">{result.passfail}</span>{" "}
                  </p>
                  <p className="space-x-7 mx-auto mt-4 grid grid-cols-3 ml-3 w-[800px] border ">
                    {" "}
                    <button className="bg-bg-ter hover:bg-none p-2 mx-5 rounded-xl text-bg-fou font-bold text-center">
                      Try Again
                    </button>{" "}
                    <button className="bg-bg-ter hover:bg-none pl-3 mx-5 rounded-xl text-bg-fou font-bold text-center">
                      {" "}
                      Continue{" "}
                    </button>
                    <p className="b text-lime-600 font-bold p-2">passed</p>
                  </p>
                </>
              ) : (
                <>
                  <p className="border border-bg-ter rounded-lg p-3 mt-3 ml-3 mr-3">
                    Answers(%):
                    <span className="font-bold">{result.passfail}</span>
                  </p>
                  <button className="bg-bg-pri p-2 rounded-lg text-bg-fou mt-4 ml-3">
                    Try Again
                  </button>{" "}
                  <p className="b text-red-600 font-bold p-3 ml-0 pl-0">
                    failed
                  </p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
