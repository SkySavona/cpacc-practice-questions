"use client";

import React, { useState, useEffect } from 'react';
import { accessibilityQuestions, Question } from '@/types/accessibility-questions';


const AccessibilityQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [answerChecked, setAnswerChecked] = useState<boolean>(false);

  // Use the imported accessibilityQuestions instead of a local array
  const questions: Question[] = accessibilityQuestions;

  // Get all unique categories
  const categories = ["all", ...new Set(questions.map(q => q.category))];

  useEffect(() => {
    const filtered = selectedCategory === "all" 
      ? questions 
      : questions.filter(q => q.category === selectedCategory);
    
    // Shuffle the filtered questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setFilteredQuestions(filtered);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswerChecked(false);
  }, [selectedCategory, questions]);

  const handleAnswerSelect = (optionId: string) => {
    if (answerChecked) return; // Prevent changing answer after check
    setSelectedAnswer(optionId);
  };

  const handleCheckAnswer = () => {
    setAnswerChecked(true);
    setShowExplanation(true);
    if (selectedAnswer === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswerChecked(false);

    // Move to next question or finish quiz
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    // Shuffle questions again
    const newShuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(newShuffled);
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswerChecked(false);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const getOptionClass = (optionId: string) => {
    if (!answerChecked) {
      return selectedAnswer === optionId 
        ? 'bg-indigo-700 border-indigo-500 text-white' 
        : 'hover:bg-gray-700 border-gray-600 text-gray-200';
    }
    
    const isCorrect = shuffledQuestions[currentQuestion].answer === optionId;
    const isSelected = selectedAnswer === optionId;
    
    if (isCorrect) {
      return 'bg-green-600 border-green-500 text-white';
    } else if (isSelected) {
      return 'bg-red-600 border-red-500 text-white';
    } else {
      return 'border-gray-600 text-gray-400';
    }
  };

  if (!quizStarted) {
    return (
      <div className="flex flex-col items-center max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-400">Accessibility Knowledge Quiz</h1>
        <p className="text-lg mb-6 text-center text-gray-300">
          Test your knowledge of WCAG principles, accessibility standards, and disability concepts.
        </p>
        <button 
          onClick={handleStartQuiz}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    let feedback = "";
    let feedbackColor = "";
    
    if (percentage >= 90) {
      feedback = "Excellent! You have a strong understanding of accessibility concepts.";
      feedbackColor = "text-green-400";
    } else if (percentage >= 70) {
      feedback = "Good job! You have a solid grasp of accessibility principles.";
      feedbackColor = "text-blue-400";
    } else if (percentage >= 50) {
      feedback = "Not bad! You have a basic understanding of accessibility, but there's room for improvement.";
      feedbackColor = "text-yellow-400";
    } else {
      feedback = "You might want to review accessibility concepts more thoroughly.";
      feedbackColor = "text-red-400";
    }
    
    return (
      <div className="flex flex-col items-center max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-400">Quiz Results</h1>
        <p className="text-5xl font-bold my-6 text-indigo-500">{score} / {shuffledQuestions.length}</p>
        {/* SVG Progress Circle and feedback */}
        <p className={`text-xl mb-6 ${feedbackColor}`}>{feedback}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button 
            onClick={handleRestartQuiz}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Restart Quiz
          </button>
          <button 
            onClick={() => setSelectedCategory("all")}
            className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors"
          >
            Reset Category
          </button>
        </div>
      </div>
    );
  }

  const currentQ = shuffledQuestions[currentQuestion];

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      {/* Quiz progress and score */}
      <div className="p-4 mb-4 bg-gray-800 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-2 text-indigo-300">
          {currentQ?.text}
        </h2>
        <p className="text-xs text-gray-400 mb-2">Category: {currentQ?.category}</p>
        <div className="space-y-2 mt-4">
          {currentQ?.options.map((option) => (
            <div 
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              className={`p-3 border rounded-lg cursor-pointer transition-colors ${getOptionClass(option.id)}`}
            >
              <div className="flex items-center">
                <div className={`h-6 w-6 rounded-full border flex items-center justify-center mr-3 ${
                  selectedAnswer === option.id && !answerChecked
                    ? 'border-indigo-500 bg-indigo-500 text-white' 
                    : answerChecked && currentQ.answer === option.id
                    ? 'border-green-500 bg-green-500 text-white'
                    : answerChecked && selectedAnswer === option.id
                    ? 'border-red-500 bg-red-500 text-white'
                    : 'border-gray-500'
                }`}>
                  {option.id.toUpperCase()}
                </div>
                <span>{option.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showExplanation && currentQ?.explanation && (
        <div className="p-4 mb-4 bg-gray-800 border border-gray-700 rounded-lg">
          <h3 className="font-semibold text-indigo-300 mb-1">Explanation:</h3>
          <p className="text-sm text-gray-300">{currentQ.explanation}</p>
        </div>
      )}
      
      <div className="flex justify-between">
        {selectedAnswer && !answerChecked ? (
          <button
            onClick={handleCheckAnswer}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <div></div>
        )}
        
        {answerChecked && (
          <button
            onClick={handleNextQuestion}
            className="ml-auto px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            {currentQuestion < shuffledQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>{Math.round(((currentQuestion + 1) / shuffledQuestions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityQuiz;
