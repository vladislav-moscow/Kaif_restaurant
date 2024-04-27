import './globals.css';
import './app.css';
import Navbar from '@/Modules/Navbar/Navbar';

export const metadata = {
	title: 'KAIF',
	description:
		'Ресторан Kaif Provenance, нашумевший ресторан со стеклянным куполом, в самом центре Москвы, улица Большая Дмитровка, 13. С 12:00 до 00:00. Резерв стола +7 495 266 69 66',
	icons: {
		icon: ['https://static.tildacdn.com/tild3834-3431-4662-b930-643437613332/favicon.ico'],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<Navbar/>
				{children}
				</body>
		</html>
	);
}
