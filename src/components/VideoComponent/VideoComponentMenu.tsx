'use client';
import React from 'react';
import kaif from '@/assets/videoKaif.mp4';
import './videoComponents.css';

const VideoComponentMenu: React.FC = () => {
	return (
		<div className='topbar__video'>
			<div className='topbar__videoBackground'>
				<video src={kaif} preload='auto' playsInline autoPlay muted loop />
			</div>
		</div>
	);
};

export default React.memo(VideoComponentMenu);
