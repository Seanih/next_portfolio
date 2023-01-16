import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'next/image';
import menuIcon from '../public/pics/menu-icon.svg';

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();

	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'text-yellow' : 'text-white'
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

function Navbar({ selectedPage, setSelectedPage }) {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

	return (
		<nav className={`z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<h4 className='font-playfair text-3xl font-bold'>SA</h4>

				{/* DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
						<Link
							page={'Home'}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page={'Skills'}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page={'Projects'}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page={'Testimonials'}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page={'Contact'}
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className='rounded-full bg-red p-2'
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<Image src={menuIcon} alt='menu-icon' />
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{!isAboveSmallScreens && isMenuToggled ? (
					<div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'></div>
				) : (
					<div></div>
				)}
			</div>
		</nav>
	);
}
export default Navbar;
