import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaGoogle, FaTwitter, FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen);
    }

    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ]
    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl text-white font-bold '>Hogwarts<span className='text-green-400'>Express</span></a>

                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({ path, link }) => <li className='text-white' key={path} >
                            <NavLink className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            } to={path}>{link}</NavLink>
                        </li>)

                    }
                </ul>
                {/*Menu Items */}
                <div className=' text-white lg:flex gap-4 items-center hidden'>
                    <a href="" className=' hover:text-green-400'><FaFacebook /></a>
                    <a href="" className=' hover:text-green-400'><FaGoogle /></a>
                    <a href="" className=' hover:text-green-400'><FaTwitter /></a>
                    <button className='bg-green-400 text-white hover:bg-white hover:text-green-400 font-medium px-6 py-2 transition-all duration-200 ease-in rounded'>Login</button>

                </div>

                {/*Display mobile screen*/}

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className=' cursor-pointer'>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                    </button>
                </div>
                {/* for mobile displays only*/}
                <div>
                    <ul className={`md:hidden gap-12 text-lg block space-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                        {
                            navItems.map(({ path, link }) => <li className='tex-black' key={path} >
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>)

                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar