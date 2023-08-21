import React, { useState } from 'react';
import CalendarTable from './CalendarTable';

const MarkdownCalendar: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [lang, setLang] = useState<string>('ja');

  const handleMonthChange = (change: number) => {
    const newMonth = month + change;
    if (newMonth < 1) {
      setYear(year - 1);
      setMonth(12);
    } else if (newMonth > 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(newMonth);
    }
  };

  return (
    <div>
      <h1>Markdown Calendar Generator</h1>
      <div>
        <button onClick={() => setLang('ja')}>日本語</button>
        <button onClick={() => setLang('en')}>English</button>
      </div>
      <div>
        <button onClick={() => handleMonthChange(-1)}>{lang === 'ja' ? '前月' : 'Previous Month'}</button>
        <button onClick={() => handleMonthChange(1)}>{lang === 'ja' ? '翌月' : 'Next Month'}</button>
      </div>
      <CalendarTable
        year={year}
        month={month}
        lang={lang}
      />
    </div>
  );
};

export default MarkdownCalendar;
