import React from 'react';
import { initialContent as content } from '../utils/content';

function Description() {
  return (
    <section className="description">
      <h2 className="description__title">{content[0].title}</h2>
      <p className="description__paragraph">{content[0].text[0]}</p>
      <p className="description__paragraph">{content[0].text[1]}</p>
      <h2 className="description__title">{content[1].title}</h2>
      <p className="description__paragraph">{content[1].text[0]}</p>
      <h2 className="description__title">{content[2].title}</h2>
      <ul className="description__list">
        {content[2].text.map((t, i) => {
          return (
            <li className="description__item" key={i}>&bull; {t}</li>
          )
        })}
      </ul>
    </section>
  )
}

export default Description;