import React, { useState, useEffect } from "react";

export default function WordList({ wordsProp, setCurrentWord }) {
  const [words, setWords] = useState(wordsProp || []);

  useEffect(() => {
    setWords(words || []);
  }, [wordsProp]);

  const handleWordClick = (clickedWord) => {
    const updatedWords = words.map((word) => {
      if (word.word === clickedWord.word) {
        return { ...word, status: "now" };
      } else if (word.status === "now") {
        return { ...word, status: "after" };
      }
      return word;
    });

    setWords(updatedWords);
    setCurrentWord(clickedWord);
  };

  if (!words || words.length === 0) {
    return <div>단어 목록이 비어 있습니다.</div>;
  }

  return (
    <>
      {/* 단어사이 간격  space-y-1  */}
      <div className="space-y-1">
        {/* 나중에 key를 index말고 단어의 고유식별자를 key로 사용할 것 */}
        {words.map((word) => (
          <div
            key={word.word}
            onClick={() => handleWordClick(word)}
            className={`flex items-center justify-center h-8 rounded-lg outline-none ${
              word.status === "before"
                ? "bg-white shadow"
                : word.status === "now"
                ? "bg-yellow-200 shadow"
                : "bg-gray-200 shadow-inner"
            }`}
          >
            {word.word} - {word.status}
          </div>
        ))}
      </div>
    </>
  );
}