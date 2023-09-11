import { useState, useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom';

const BlogPage = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    return (
        <motion.div className="z-4 relative top-0 left-0 mt-0 bg-light text-dark-900 w-full" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}} >
            <div className={`${isFooterVisible ? "bg-dark-900 text-light" : "bg-light text-dark-900"} min-h-screen transition-colors duration-500 relative`}>
                <nav className="bg-inherit h-28 w-full z-30">
                    <NavBar />
                </nav>
                <Outlet context={[isFooterVisible, setIsFooterVisible]}/>
            </div>
        </motion.div>
    )
}

export default BlogPage;