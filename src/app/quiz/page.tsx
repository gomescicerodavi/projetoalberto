"use client";

import { useState } from "react";
import { Footer, Button } from "@/components";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quantas pessoas surdas existem no Brasil?",
    options: ["2 milhões", "10 milhões", "500 mil", "20 milhões"],
    correct: 1,
    explanation:
      "Aproximadamente 10 milhões de pessoas surdas vivem no Brasil, representando uma população significativa.",
  },
  {
    id: 2,
    question: "Qual é a primeira língua de muitas pessoas surdas no Brasil?",
    options: ["Português escrito", "Libras (Língua Brasileira de Sinais)", "Inglês", "Linguagem de gestos"],
    correct: 1,
    explanation:
      "A Libras é a primeira língua de muitas pessoas surdas brasileiras. É uma língua completa e natural.",
  },
  {
    id: 3,
    question: "O que a Janela em Libras faz em um conteúdo audiovisual?",
    options: [
      "Amplia a tela",
      "Mostra um intérprete de Libras traduzindo",
      "Adiciona efeitos sonoros",
      "Muda o contraste",
    ],
    correct: 1,
    explanation:
      "A Janela em Libras mostra um intérprete ou locutor em Libras, permitindo comunicação natural.",
  },
  {
    id: 4,
    question: "Legendas beneficiam apenas pessoas surdas?",
    options: ["Sim, só para surdos", "Não, beneficiam muitas pessoas", "Apenas em filmes", "Não têm benefício"],
    correct: 1,
    explanation:
      "Legendas beneficiam pessoas surdas, com perda auditiva, em ambientes ruidosos, crianças aprendendo e quem aprende idiomas.",
  },
  {
    id: 5,
    question: "O que é WAI-ARIA?",
    options: [
      "Um vírus de computador",
      "Padrão de acessibilidade web",
      "Marca de navegador",
      "Linguagem de programação",
    ],
    correct: 1,
    explanation:
      "WAI-ARIA são diretrizes internacionais para tornar conteúdo web acessível para pessoas com deficiência.",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {quizComplete ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Quiz Completo!
            </h1>
            <div className="mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Você acertou {Math.round((score / questions.length) * 100)}% das questões!
              </p>
            </div>

            <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-left">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                Suas respostas:
              </h3>
              <div className="space-y-3">
                {questions.map((q, idx) => (
                  <div key={q.id} className="text-sm">
                    <p className="font-medium text-slate-900 dark:text-white mb-1">
                      {idx + 1}. {q.question}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Resposta correta: {q.options[q.correct]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={handleRestart} size="lg">
              Fazer Quiz Novamente
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Questão {currentQuestion + 1} de {questions.length}
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Acertos: {score}
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {question.question}
              </h3>

              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? index === question.correct
                          ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                          : "border-red-500 bg-red-50 dark:bg-red-950/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswer === index
                            ? "border-current"
                            : "border-slate-300 dark:border-slate-600"
                        }`}
                      >
                        {selectedAnswer === index && (
                          <div className="w-3 h-3 rounded-full bg-current"></div>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div
                  className={`p-4 rounded-lg mb-8 ${
                    selectedAnswer === question.correct
                      ? "bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300"
                      : "bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300"
                  }`}
                >
                  <p className="font-medium mb-2">
                    {selectedAnswer === question.correct ? "✓ Correto!" : "✗ Incorreto"}
                  </p>
                  <p>{question.explanation}</p>
                </div>
              )}

              {showResult && (
                <Button onClick={handleNext} size="lg" className="w-full">
                  {currentQuestion + 1 === questions.length ? "Ver Resultado" : "Próxima Questão"}
                </Button>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
