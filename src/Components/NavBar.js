import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    const activeLinkStyle = ({ isActive }) => {
        return {color: isActive ? 'blue' : ''}
    }

  return (
    <nav className="bg-stone-50 text-stone-900 w-screen border-gray-200 px-4 py-2.5">
        <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center">
                <span>MeteoBandit</span>
            </NavLink>
				<div className="w-full block w-auto" id="mobile-menu">
					<ul className="flex flex-row mt-4 sm:space-x-8 mt-0 text-sm font-medium">
						<li>
							<NavLink style={activeLinkStyle} to="/" className="block py-2 pr-2 pl-2 text-xs sm:text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Current</NavLink>
						</li>
						<li>
							<NavLink style={activeLinkStyle} to="/hourly" className="block py-2 pr-2 pl-2 text-xs sm:text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Hourly</NavLink>
						</li>
						<li>
							<NavLink style={activeLinkStyle} to="/daily" className="block py-2 pr-2 pl-2 text-xs sm:text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-blue-700 p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700">Daily</NavLink>
						</li>
					</ul>
				</div>
        </div>
    </nav>
  )
}

export default NavBar