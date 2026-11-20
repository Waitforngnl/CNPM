import React from 'react';
import Latex from 'react-latex-next';

export function formatMathText(text) {
  if (text === null || text === undefined) return '';
  const s = String(text);
  // Nếu có ký hiệu lệnh LaTeX (ví dụ \frac, \sqrt, \Delta, \pm,...) nhưng chưa bọc bởi $ hoặc \(
  if (!s.includes('$') && !s.includes('\\(') && !s.includes('\\[') && /\\[a-zA-Z]+/.test(s)) {
    return `$${s}$`;
  }
  return s;
}

export default function MathRenderer({ text, style, className }) {
  if (text === null || text === undefined || text === '') return null;
  const formatted = formatMathText(text);
  return (
    <span className={className} style={style}>
      <Latex strict={false}>{formatted}</Latex>
    </span>
  );
}
