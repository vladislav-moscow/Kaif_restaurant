'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

import './topbar.css';

interface MenuItem {
	id: number;
	title: string;
	subTitle: string;
}

const Topbar: React.FC = () => {
	const [data, setData] = useState<MenuItem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('http://localhost:3001/titleMenu');
				setData(res.data);
			} catch (error) {
				console.error('Ошибка запроса:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<nav className='topbar__links'>
			<ul className='topbar__links-box'>
				{data.map((elem) => (
					<li key={elem.id}>
						<Link href={`/menu/${elem.subTitle}`}>
							<h3 className='topbar__links-link' title={elem.subTitle}>
								{elem.title}
							</h3>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default React.memo(Topbar);
