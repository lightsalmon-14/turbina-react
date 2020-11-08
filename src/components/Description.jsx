import React from 'react';
import { initialContent as content } from '../utils/content';
import Title from './Title';
import Paragraph from './Paragraph';
import List from './List';

function Description(props) {
	return (
		<section className="description" key={props.numbers}>
			{ content.map((paragraph) =>
				<>
					<Title title={ paragraph.title } />

					{
						paragraph.text &&
						<Paragraph text={ paragraph.text } />
					}

					{
						paragraph.list &&
						<List list={ paragraph.list }/>
					}
				</>
			)}
		</section>
	)
}

export default Description;
