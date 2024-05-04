'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './topbar.css';

const Topbar = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/titleMenu').then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<nav className='topbar__links'>
			<ul className='topbar__links-box'>
				{data.map((elem) => (
					<li key={elem.id}>
						<h3
							className='topbar__links-link'
							type='submit'
							title={elem.subTitle}
						>
							{elem.title}
						</h3>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Topbar;
