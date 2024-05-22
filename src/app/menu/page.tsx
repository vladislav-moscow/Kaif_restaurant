'use server';
import Topbar from '@/components/Topbar/Topbar';
import MenuTitle from '@/components/MenuItem/MenuTitle';
import VideoComponentMenu from '@/components/VideoComponent/VideoComponentMenu';

import './menuMain.css';

const MainMenu: React.FC = () => {
	return (
		<>
			<div className='app__menu-topbar'>
				<VideoComponentMenu />
				<Topbar />
				<MenuTitle />
			</div>
		</>
	);
};

export default MainMenu;