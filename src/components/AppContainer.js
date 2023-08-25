import React, { useState } from 'react';
import Home from './Home/index.js';
import About from './About/index.js';
import Contacts from './Contacts/index.js';
import Menu from './Menu/index.js';
import Navbar from './Navbar/index.js';
import './AppContainer.css';

export default function AppContainer() {
	const [currentPage, setCurrentPage] = useState('Home');

	// Handle nav page changes
	const renderPage = () => {
		if (currentPage === 'Home') return <Home/>;
		if (currentPage === 'About') return <About/>;
		if (currentPage === 'Menu') return <Menu/>;
		if (currentPage === 'Contacts') return <Contacts/>;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
            <div>
				{/* Static sidenav */}
				<Navbar
                    currentPage={currentPage}
					handlePageChange={handlePageChange}
                />
			</div>
            <div className="page-content">
				{/* Dynamically render page content */}
				{renderPage()}
			</div>
		</div>
	);
}