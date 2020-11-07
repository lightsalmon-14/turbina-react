import React from 'react';
import { initialContent as content } from '../utils/content';

function Description() {
  return (
    <section className="description">
			{ content.map((paragraph, number) => {
				return paragraph &&
				<>
					<h2 className="description__title" key={ number.toString() }>
						{ paragraph.title ? paragraph.title : null }
					</h2>

					{ paragraph.text ? paragraph.text.map((item, number) => {
						return <p className="description__paragraph" key={ number.toString() }>{ item }</p>
					}) : null}

					<ul className="description__list">
						{ paragraph.list ? paragraph.list.map((item, number) => {
							return <li className="description__item" key={ number.toString() }>{ item }</li>
						}) : null}
					</ul>
				</>
			})

			}
    </section>
  )
}


export default Description;
