import kaif from '@/assets/videoKaif.mp4';
import './videoComponents.css';

const VideoComponentMenu = () => {
	return (
		<div className='topbar__video'>
			<div className='topbar__videoBackground'>
				<video src={kaif} preload='auto' playsInline autoPlay muted></video>
			</div>
		</div>
	);
};

export default VideoComponentMenu;
