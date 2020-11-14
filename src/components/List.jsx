import React from 'react';

const List = ({ list }) => {
  return (
				<ul className="description__list">
					{ list.map((item, key) => {
							return <p className="description__item" key={key}>{ item }</p>
					}
				)}
		</ul>
  )
}

export default List;
