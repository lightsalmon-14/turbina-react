import React from 'react';

const Title = ({ title }) => {
  return (
		<h2 className="description__title">
			{ title ? title : null }
		</h2>
  )
}

export default Title;
