import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { section, hadithArr } from './hadiths.js'
import Title from './Title.js'



console.log(section);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div>
      <Title book={section.book} chapter={section.chapter} />
      {hadithArr.map((hadith, index) => (
        <Card
          key={index}
          book={section.book}
          narrator={hadith.narrator}
          text={hadith.text}
          bookRef={hadith.reference.book}
          hadithRef={hadith.reference.hadith}
          hadithNum={hadith.hadithnumber}
          textAr={hadith.textAr}
        />
      ))}
    </div>
  </React.StrictMode>
);

reportWebVitals();
