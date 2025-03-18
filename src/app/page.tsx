"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Ref to store the element that triggered the modal
  const previousFocusRef = useRef<HTMLElement | null>(null);

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

  const handleExitConfirm = () => {
    // Reset to initial state
    setQuizStarted(false);
    setShowExitModal(false);
    setSelectedCategory("all");
  };

  const openExitModal = () => {
    // Save the currently focused element
    previousFocusRef.current = document.activeElement as HTMLElement;
    setShowExitModal(true);
  };

  const closeExitModal = () => {
    setShowExitModal(false);
    // Return focus to the element that opened the modal
    previousFocusRef.current?.focus();
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

  // Exit Modal Component with focus trap and a Close button on the top right
  const ExitModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      // Set focus to the Close button when modal opens.
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        // Get all focusable buttons inside the modal
        const focusableButtons = modalRef.current?.querySelectorAll('button');
        if (!focusableButtons || focusableButtons.length === 0) return;
        const firstElement = focusableButtons[0] as HTMLElement;
        const lastElement = focusableButtons[focusableButtons.length - 1] as HTMLElement;

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            // If Shift+Tab is pressed on the first element, move focus to the last
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // If Tab is pressed on the last element, move focus to the first
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [onClose]);

    return (
      <div 
        className="fixed inset-0 flex items-center justify-center z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
      >
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div 
          ref={modalRef}
          className="relative bg-gray-900 p-6 rounded-lg shadow-lg z-10 max-w-sm mx-auto text-white"
        >
          {/* Close button (×) positioned at the top right */}
       <button 
  ref={closeButtonRef}
  onClick={onClose}
  className="absolute top-2 right-2 text-2xl font-bold text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-900 rounded-full w-10 h-10 flex items-center justify-center"
  aria-label="Close modal"
>
  ×
</button>

          <h2 id="exit-modal-title" className="text-xl font-bold mb-4 text-center">
            Exit Quiz?
          </h2>
          <p className="mb-6 text-center">
            Are you sure you want to exit? All progress will be lost.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              onClick={handleExitConfirm}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Exit Quiz
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!quizStarted) {
    return (
      <main className="flex flex-col items-center max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-400">Accessibility Knowledge Quiz</h1>
        <p className="text-lg mb-6 text-center text-gray-300">
          Test your knowledge of WCAG principles, accessibility standards, and disability concepts.
        </p>
        <div className="mb-6">
          <label htmlFor="category-select" className="block mb-2 text-gray-300">
            Select Category:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white p-2 rounded-lg w-full"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button 
          onClick={handleStartQuiz}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Start Quiz
        </button>
      </main>
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
      <main className="flex flex-col items-center max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-400">Quiz Results</h1>
        <p className="text-5xl font-bold my-6 text-indigo-500">
          <span aria-live="polite">{score} / {shuffledQuestions.length}</span>
        </p>
        <p className={`text-xl mb-6 ${feedbackColor}`} aria-live="polite">{feedback}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button 
            onClick={handleRestartQuiz}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Restart Quiz"
          >
            Restart Quiz
          </button>
          <button 
            onClick={() => setSelectedCategory("all")}
            className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Reset Category"
          >
            Reset Category
          </button>
        </div>
      </main>
    );
  }

  const currentQ = shuffledQuestions[currentQuestion];

  return (
    <>
      <main className="relative flex flex-col max-w-4xl mx-auto p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        {/* Exit Quiz button positioned at the top right */}
        <button
          onClick={openExitModal}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Exit Quiz
        </button>

        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-400">
          Accessibility Knowledge Quiz
        </h1>
        
        {/* Quiz progress and score */}
        <div className="mb-2 text-md text-gray-100">
          Question {currentQuestion + 1} of {shuffledQuestions.length}
        </div>

        <section aria-labelledby="current-question" className="p-4 mb-4 bg-gray-800 rounded-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-2 text-indigo-300" id="current-question">
            {currentQ?.text}
          </h2>
          <p className="text-md text-gray-100 mb-2">Category: {currentQ?.category}</p>
          <fieldset className="space-y-2 mt-4" role="radiogroup" aria-label="Answer options">
            <legend className="sr-only">Answer options</legend>
            {currentQ?.options.map((option) => (
              <div 
                key={option.id}
                role="radio"
                aria-checked={selectedAnswer === option.id}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (!answerChecked && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleAnswerSelect(option.id);
                  }
                }}
                onClick={() => {
                  if (!answerChecked) handleAnswerSelect(option.id);
                }}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors ${getOptionClass(option.id)}`}
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
                {answerChecked && currentQ.answer === option.id && (
                  <span className="sr-only" id="correct-answer">Correct answer</span>
                )}
                {answerChecked && selectedAnswer === option.id && currentQ.answer !== option.id && (
                  <span className="sr-only" id="incorrect-answer">Incorrect answer</span>
                )}
              </div>
            ))}
          </fieldset>
        </section>
        
        {showExplanation && currentQ?.explanation && (
          <section className="p-4 mb-4 bg-gray-800 border border-gray-700 rounded-lg" aria-live="polite">
            <h3 className="font-semibold text-indigo-300 mb-1">Explanation:</h3>
            <p className="text-md text-gray-200">{currentQ.explanation}</p>
          </section>
        )}
        
        <nav className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
          {selectedAnswer && !answerChecked ? (
            <button
              onClick={handleCheckAnswer}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Check Answer
            </button>
          ) : (
            <div></div>
          )}

          {answerChecked && (
            <button
              onClick={handleNextQuestion}
              className="sm:ml-auto px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {currentQuestion < shuffledQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}
        </nav>
        
        {/* Progress bar */}
        <footer className="mt-6">
          <div className="flex justify-between text-md text-gray-200 mb-1">
            <span>Progress</span>
            <span aria-live="polite" aria-atomic="true">
              {Math.round(((currentQuestion + 1) / shuffledQuestions.length) * 100)}%
            </span>
          </div>
          <div 
            className="w-full bg-gray-700 rounded-full h-2"
            role="progressbar" 
            aria-valuenow={currentQuestion + 1} 
            aria-valuemin={0} 
            aria-valuemax={shuffledQuestions.length}
            aria-label={`Question ${currentQuestion + 1} of ${shuffledQuestions.length}`}
          >
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
            ></div>
          </div>
        </footer>
      </main>
      {showExitModal && <ExitModal onClose={closeExitModal} />}
    </>
  );
};

export default AccessibilityQuiz;
