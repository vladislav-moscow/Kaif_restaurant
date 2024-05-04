'use client';
import axios from 'axios';

import './menuMain.css';
import Topbar from '@/components/Topbar/Topbar';
import { useEffect, useState } from 'react';
import kaif from '@/assets/videoKaif.mp4';
import MenuTitle from '@/components/MenuItem/MenuTitle';

const MainMenu = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/titleMenu').then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div className='app__menu'>
			<div className='app__menu-topbar'>
				<div className='topbar__video'>
					<div className='topbar__videoBackground'>
						<video src={kaif} preload='auto' playsInline autoPlay muted></video>
					</div>
				</div>
				<Topbar />
				<MenuTitle data={data} />
			</div>
		</div>
	);
};

export default MainMenu;
