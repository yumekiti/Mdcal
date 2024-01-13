import React from 'react';
import { Calendar } from 'calendar';

interface CalendarTableProps {
  year: number;
  month: number;
  lang: string;
}

const CalendarTable: React.FC<CalendarTableProps> = ({
  year,
  month,
  lang,
}) => {
  const colnames_ja = ['月', '火', '水', '木', '金', '土', '日'];
  const colnames_en = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const createMarkdownCalendar = () => {
    const cal = new Calendar(1);
    const monthStr = lang === 'ja' ? `${year}年${month}月` : `${month}/${year}`;
    const weekCol = lang === 'ja' ? colnames_ja : colnames_en

    const tableHeader = weekCol.map((col) => `| ${col} `).join('');
    const tableDivider = weekCol.map(() => '| :-: ').join('');
    let markdownTable = `### ${monthStr}\n${tableHeader}|\n${tableDivider}|\n`;

    cal.monthDates(year, month - 1).forEach((week: any) => {
      let row = '|';

      week.forEach((date: any) => {
        const day = date.getDate();
        row += ` ${day} |`;
      });

      markdownTable += `${row}\n`;
    });

    return markdownTable;
  };

  return (
    <div>
      <pre>{createMarkdownCalendar()}</pre>
      <button onClick={() => copyToClipboard(createMarkdownCalendar())}>Copy</button>
    </div>
  )
};

export default CalendarTable;
