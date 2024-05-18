'use client';
import { useRef, useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import meall from '@/assets/meal.mp4';
import './videoComponents.css';

const VideoComponent = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const videoRef = useRef();
	return (
		<>
			<video src={meall} ref={videoRef} loop controls={false} muted />
			<div className='app__video-overlay flex__center'>
				<div
					className='app__video-overlay_circle flex__center'
					onClick={() => {
						setPlayVideo(!playVideo);
						if (playVideo) {
							videoRef.current.pause();
						} else {
							videoRef.current.play();
						}
					}}
				>
					{playVideo ? (
						<BsPauseFill color='#fff' fontSize={30} />
					) : (
						<BsFillPlayFill color='#fff' fontSize={30} />
					)}
				</div>
			</div>
		</>
	);
};

export default VideoComponent;
