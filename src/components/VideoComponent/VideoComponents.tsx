'use client';
import React, { useRef, useState, useCallback } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import meall from '@/assets/meal.mp4';
import './videoComponents.css';

const VideoComponents: React.FC = () => {
	const [playVideo, setPlayVideo] = useState<boolean>(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handleVideoPlayPause = useCallback(() => {
		setPlayVideo((prevPlayVideo) => {
			if (videoRef.current) {
				if (prevPlayVideo) {
					videoRef.current.pause();
				} else {
					videoRef.current.play();
				}
			}
			return !prevPlayVideo;
		});
	}, []);

	return (
		<>
			<video src={meall} ref={videoRef} loop controls={false} muted className="app__video" />
			<div className="app__video-overlay flex__center">
				<div className="app__video-overlay_circle flex__center" onClick={handleVideoPlayPause}>
					{playVideo ? (
						<BsPauseFill color="#fff" fontSize={30} />
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} />
					)}
				</div>
			</div>
		</>
	);
};

export default React.memo(VideoComponents);
