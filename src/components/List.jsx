import React from 'react';

const List = ({ list }) => {
  return (
				<ul className="description__list">
					{ list.map((item, key) => {
							return <li className="description__item" key={key}>{ item }</li>
					}
				)}
		</ul>
  )
}

export default List;
