import React from 'react';
import { initialContent as content } from '../utils/content';

function Description() {
  return (
    <section className="description">
			{ content.map((paragraph, key) => {
				return paragraph &&
				<>
					<h2 className="description__title" key={key}>{paragraph.title ? paragraph.title : ''}</h2>
					<p className="description__paragraph">{paragraph.text ? paragraph.text : ''}</p>
					<ul className="description__list">
								{paragraph.list ? paragraph.list.map((item, key) => {
									return <li className="description__item" key={key}>{paragraph.list[key]}</li>
								}) : ''}
					</ul>
				</>
			})

			}
    </section>
  )
}

export default Description;
