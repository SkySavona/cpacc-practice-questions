"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { accessibilityQuestions, Question } from "@/types/accessibility-questions";

/** LocalStorage keys */
const LS_LAST_RESULTS = "cpacc:lastResults:v2";
const LS_LAST_WRONG = "cpacc:lastWrong:v2";

/** Match your Question.id:number */
type ResultItem = {
  id: number;
  selected: string | null;
  correct: boolean;
};

type RunSize = 20 | 50 | 100 | "all";

const AccessibilityQuiz: React.FC = () => {
  // ---------- Source ----------
  const bank: Question[] = useMemo(() => accessibilityQuestions, []);
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(bank.map((q) => q.category)))],
    [bank]
  );

  // ---------- Config / Start screen ----------
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [runSize, setRunSize] = useState<RunSize>(20);
  const [quizStarted, setQuizStarted] = useState(false);

  // ---------- Quiz state ----------
  const [questions, setQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // ---------- Review / Exit ----------
  const [reviewMode, setReviewMode] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // ---------- Tallies ----------
  const answeredCount = results.filter((r) => r.selected !== null).length;
  const correctCount = results.filter((r) => r.correct).length;
  const wrongCount = answeredCount - correctCount;

  // ---------- Start new run ----------
  const startQuiz = () => {
    const pool =
      selectedCategory === "all"
        ? bank
        : bank.filter((q) => q.category === selectedCategory);

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const finalRun =
      runSize === "all" ? shuffled : shuffled.slice(0, Math.min(runSize, shuffled.length));

    setQuestions(finalRun);
    setResults(finalRun.map((q) => ({ id: q.id, selected: null, correct: false })));
    setIdx(0);
    setSelected(null);
    setChecked(false);
    setShowExplanation(false);
    setQuizFinished(false);
    setReviewMode(false);
    setQuizStarted(true);
  };

  // ---------- Exit -> Review (only wrong so far) ----------
  const confirmExitToReview = () => {
    setQuizFinished(true);
    setReviewMode(true);

    const wrongIds = results
      .filter((r) => r.selected !== null && !r.correct)
      .map((r) => r.id);
    const wrongQs = questions.filter((q) => wrongIds.includes(q.id));
    localStorage.setItem(LS_LAST_WRONG, JSON.stringify(wrongQs));
    localStorage.setItem(LS_LAST_RESULTS, JSON.stringify(results));
    setShowExitModal(false);
  };

  // ---------- Answer handling: CLICK = check immediately ----------
  const handleAnswerClick = (optionId: string) => {
    if (checked) return; // lock after first answer
    setSelected(optionId);

    const q = questions[idx];
    const correct = optionId === q.answer;

    setChecked(true);
    setShowExplanation(true);

    setResults((prev) => {
      const copy = [...prev];
      copy[idx] = { id: q.id, selected: optionId, correct };
      return copy;
    });
  };

  const handleNext = () => {
    if (idx < questions.length - 1) {
      setIdx((v) => v + 1);
      setSelected(null);
      setChecked(false);
      setShowExplanation(false);
    } else {
      // Finish: normal results view
      setQuizFinished(true);
      setReviewMode(false);

      const wrongIds = results
        .filter((r) => r.selected !== null && !r.correct)
        .map((r) => r.id);
      const wrongQs = questions.filter((q) => wrongIds.includes(q.id));
      localStorage.setItem(LS_LAST_WRONG, JSON.stringify(wrongQs));
      localStorage.setItem(LS_LAST_RESULTS, JSON.stringify(results));
    }
  };

  const handleRestart = () => {
    startQuiz();
  };

  const retryWrongOnly = () => {
    const raw = localStorage.getItem(LS_LAST_WRONG);
    const wrongQs: Question[] = raw ? JSON.parse(raw) : [];
    if (!wrongQs.length) return;

    const shuffled = [...wrongQs].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setResults(shuffled.map((q) => ({ id: q.id, selected: null, correct: false })));
    setIdx(0);
    setSelected(null);
    setChecked(false);
    setShowExplanation(false);
    setQuizFinished(false);
    setReviewMode(false);
    setQuizStarted(true);
  };

  // ---------- Modal focus mgmt ----------
  const openExitModal = () => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setShowExitModal(true);
  };
  const closeExitModal = () => {
    setShowExitModal(false);
    previousFocusRef.current?.focus();
  };

  // ---------- UI helpers ----------
  const getOptionClass = (isCorrect: boolean, isSelected: boolean) => {
    if (!checked) {
      return isSelected
        ? "bg-indigo-700 border-indigo-500 text-white"
        : "hover:bg-gray-700 border-gray-600 text-gray-200";
    }
    if (isCorrect) return "bg-green-600 border-green-500 text-white";
    if (isSelected) return "bg-red-600 border-red-500 text-white";
    return "border-gray-600 text-gray-400";
  };

  const ExitModal: React.FC<{ onCancel: () => void; onConfirm: () => void }> = ({
    onCancel,
    onConfirm,
  }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      closeRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        const focusables = modalRef.current?.querySelectorAll("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0] as HTMLElement;
        const last = focusables[focusables.length - 1] as HTMLElement;
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        } else if (e.key === "Escape") {
          e.preventDefault();
          onCancel();
        }
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [onCancel]);

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="exit-modal-title">
        <div className="absolute inset-0 bg-black opacity-50" onClick={onCancel} />
        <div ref={modalRef} className="relative bg-gray-900 p-6 rounded-lg shadow-lg z-10 max-w-sm mx-auto text-white">
          <button
            ref={closeRef}
            onClick={onCancel}
            className="absolute top-2 right-2 text-2xl font-bold text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-900 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Close modal"
          >
            ×
          </button>
          <h2 id="exit-modal-title" className="text-xl font-bold mb-4 text-center">Exit to Review?</h2>
          <p className="mb-6 text-center">You’ll see a review of anything you’ve gotten wrong so far.</p>
          <div className="flex justify-center gap-3">
            <button onClick={onCancel} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Cancel
            </button>
            <button onClick={onConfirm} className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
              Exit & Review
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ---------- Start screen ----------
  if (!quizStarted && !quizFinished && !reviewMode) {
    const hasSavedWrong =
      !!localStorage.getItem(LS_LAST_WRONG) &&
      JSON.parse(localStorage.getItem(LS_LAST_WRONG) || "[]").length > 0;

    return (
      <main className="flex flex-col gap-6 items-center max-w-4xl mx-auto p-6 pt-10 mt-36 bg-gray-900 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-indigo-400 text-center">CPACC Practice Questions</h1>
        <p className="text-gray-300 text-center">Choose a category and how many questions you want, then go crush it.</p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category-select" className="block mb-2 text-gray-300">Category</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white p-2 rounded-lg w-full"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All (mixed)" : c.charAt(0).toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="run-size" className="block mb-2 text-gray-300">Number of Questions</label>
            <select
              id="run-size"
              value={runSize}
              onChange={(e) => setRunSize((e.target.value === "all" ? "all" : Number(e.target.value)) as RunSize)}
              className="bg-gray-800 border border-gray-700 text-white p-2 rounded-lg w-full"
            >
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={startQuiz}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Start Quiz
          </button>

          {hasSavedWrong && (
            <button
              onClick={retryWrongOnly}
              className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Retry Last Wrong Only
            </button>
          )}
        </div>
      </main>
    );
  }

  // ---------- Results (normal) or Review ----------
  if (quizFinished || reviewMode) {
    const total = questions.length || Math.max(results.length, 1);
    const percentage = Math.round(((correctCount || 0) / total) * 100);

    const wrongIds = results
      .filter((r) => r.selected !== null && !r.correct)
      .map((r) => r.id);
    const wrongQs = questions.filter((q) => wrongIds.includes(q.id));

    let feedback = "";
    let feedbackColor = "";
    if (percentage >= 90) {
      feedback = "Excellent! You’re dangerously competent.";
      feedbackColor = "text-green-400";
    } else if (percentage >= 70) {
      feedback = "Solid work. A little polish and you're elite.";
      feedbackColor = "text-blue-400";
    } else if (percentage >= 50) {
      feedback = "Decent start. Review weak spots and run it back.";
      feedbackColor = "text-yellow-400";
    } else {
      feedback = "No shame. We iterate. Review the misses and go again.";
      feedbackColor = "text-red-400";
    }

    return (
      <main className="flex flex-col gap-6 max-w-5xl mx-auto p-6 pt-10 bg-gray-900 rounded-lg shadow-lg text-white">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-2xl font-bold text-indigo-400">
            {reviewMode ? "Review Missed Questions" : "Quiz Results"}
          </h1>
          {!reviewMode && (
            <div className="flex gap-2">
              <button onClick={handleRestart} className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Restart
              </button>
              <button onClick={retryWrongOnly} className="px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
                Retry Wrong Only
              </button>
            </div>
          )}
        </header>

        {!reviewMode && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat label="Score" value={`${correctCount}/${total}`} />
              <Stat label="Percent" value={`${percentage}%`} />
              <Stat label="Correct" value={`${correctCount}`} />
              <Stat label="Wrong" value={`${wrongCount}`} />
            </div>
            <p className={`text-lg ${feedbackColor}`}>{feedback}</p>
          </>
        )}

        <section className="space-y-4">
          {(wrongQs.length ? wrongQs : []).map((q, i) => {
            const chosen = results.find((r) => r.id === q.id)?.selected ?? null;
            return (
              <div key={q.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-indigo-300 font-semibold">
                    {i + 1}. {q.text}
                  </h3>
                  <span className="text-sm text-gray-400">Category: {q.category}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {q.options.map((opt) => {
                    const isCorrect = opt.id === q.answer;
                    const isChosen = opt.id === chosen;
                    const base = isCorrect
                      ? "bg-green-600 border-green-500 text-white"
                      : isChosen
                      ? "bg-red-600 border-red-500 text-white"
                      : "border-gray-600 text-gray-200";
                    return (
                      <li key={opt.id} className={`p-3 border rounded-lg ${base}`}>
                        <span className="font-mono mr-2">{opt.id.toUpperCase()}.</span>
                        {opt.text}
                        {isCorrect && <span className="sr-only"> (Correct answer)</span>}
                        {isChosen && !isCorrect && <span className="sr-only"> (Your incorrect choice)</span>}
                      </li>
                    );
                  })}
                </ul>
                {q.explanation && (
                  <p className="mt-3 text-sm text-gray-200">
                    <span className="font-semibold text-indigo-300">Why:</span> {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
          {!wrongQs.length && (
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center text-green-400">
              Nothing to review—you got everything you answered correct. Show-off.
            </div>
          )}
        </section>

        <div className="flex gap-3">
          <button onClick={retryWrongOnly} className="px-5 py-3 bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
            Retry Wrong Only
          </button>
          <button
            onClick={() => {
              setQuizFinished(false);
              setReviewMode(false);
              setQuizStarted(false);
            }}
            className="px-5 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back to Start
          </button>
        </div>
      </main>
    );
  }

  // ---------- Active Quiz ----------
  const q = questions[idx];
  const remaining = questions.length - (idx + 1);

  return (
    <>
      <main className="relative flex flex-col max-w-4xl mx-auto p-4 mt-28 sm:p-6 pt-10 bg-gray-900 rounded-lg shadow-lg text-white">
        {/* Exit -> Review */}
        <button
          onClick={openExitModal}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Exit → Review
        </button>

        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-400 pr-28 ">CPACC Practice Questions</h1>

        {/* Live score strip */}
        <div className="mb-4 grid grid-cols-3 gap-2 text-sm sm:text-base">
          <Badge label="Correct" value={correctCount} />
          <Badge label="Wrong" value={wrongCount} />
          <Badge label="Remaining" value={remaining} />
        </div>

        <div className="mb-2 text-md text-gray-100">
          Question {idx + 1} of {questions.length}
        </div>

        <section aria-labelledby="current-question" className="p-4 mb-4 bg-gray-800 rounded-lg border border-gray-700">
          <h2 id="current-question" className="text-lg font-semibold mb-2 text-indigo-300">
            {q?.text}
          </h2>
          <p className="text-md text-gray-100 mb-2">Category: {q?.category}</p>

          <fieldset className="space-y-2 mt-4" role="radiogroup" aria-label="Answer options">
            <legend className="sr-only">Answer options</legend>
            {q?.options.map((opt) => {
              const isCorrect = q.answer === opt.id;
              const isSelected = selected === opt.id;
              return (
                <div
                  key={opt.id}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (!checked && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      handleAnswerClick(opt.id);
                    }
                  }}
                  onClick={() => handleAnswerClick(opt.id)}
                  className={`block p-3 border rounded-lg cursor-pointer transition-colors ${getOptionClass(isCorrect, isSelected)}`}
                >
                  <div className="flex items-start">
                    <div
                      className={`h-6 w-6 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                        isSelected && !checked
                          ? "border-indigo-500 bg-indigo-500 text-white"
                          : checked && isCorrect
                          ? "border-green-500 bg-green-500 text-white"
                          : checked && isSelected
                          ? "border-red-500 bg-red-500 text-white"
                          : "border-gray-500 text-gray-300"
                      }`}
                    >
                      {opt.id.toUpperCase()}
                    </div>
                    <span className="flex-1">{opt.text}</span>
                  </div>
                  {checked && isCorrect && <span className="sr-only">Correct answer</span>}
                  {checked && isSelected && !isCorrect && <span className="sr-only">Incorrect answer</span>}
                </div>
              );
            })}
          </fieldset>
        </section>

        {checked && q?.explanation && (
          <section className="p-4 mb-4 bg-gray-800 border border-gray-700 rounded-lg" aria-live="polite">
            <h3 className="font-semibold text-indigo-300 mb-1">Explanation</h3>
            <p className="text-md text-gray-200">{q.explanation}</p>
          </section>
        )}

        <nav className="flex flex-col sm:flex-row justify-between gap-2">
          <div />
          <div className="sm:ml-auto">
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {idx < questions.length - 1 ? (checked ? "Next Question" : "Skip") : "Finish"}
            </button>
          </div>
        </nav>

        {/* Progress bar */}
        <footer className="mt-6">
          <div className="flex justify-between text-md text-gray-200 mb-1">
            <span>Progress</span>
            <span aria-live="polite" aria-atomic="true">
              {Math.round(((idx + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div
            className="w-full bg-gray-700 rounded-full h-2"
            role="progressbar"
            aria-valuenow={idx + 1}
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-label={`Question ${idx + 1} of ${questions.length}`}
          >
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((idx + 1) / questions.length) * 100}%` }}
            />
          </div>
        </footer>
      </main>

      {showExitModal && (
        <ExitModal onCancel={closeExitModal} onConfirm={confirmExitToReview} />
      )}
    </>
  );
};

/** Small UI bits */
const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
    <div className="text-sm text-gray-400">{label}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

const Badge: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="px-3 py-2 bg-gray-800 rounded-lg border border-gray-700 text-center">
    <div className="text-xs text-gray-400">{label}</div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);

export default AccessibilityQuiz;
