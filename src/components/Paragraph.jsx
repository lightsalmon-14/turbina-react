import React from 'react';

const Paragraph = ({ text }) => {
	return text.map((item, key) => {
		return <p className="description__paragraph" key={key}>{ text }</p>
	})
}

export default Paragraph;
