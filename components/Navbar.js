import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Navbar = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let [mode, setMode] = useState();

    // toggle theme
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // for initial render, grab what's inside local storage theme
            if (!mode) {
                let local_mode = window.localStorage.getItem('theme');
                if (!local_mode) {
                    window.localStorage.setItem('theme', 'dark');
                    setMode('dark');
                } else {
                    setMode(local_mode);
                }
                // not initial render, refer to the value of mode
            } else {
                if (mode === 'light') {
                    document.body.classList.remove('dark');
                } else {
                    document.body.classList.add('dark');
                }
                window.localStorage.setItem('theme', mode);
            }
        }
    }, [mode]);

    return (
      <motion.div
        className="navbar"
        ref={ref}
        initial={{ y: -70 }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar__logo">
          <Link href="/">
            <img
              src="/tony-chen-logo.svg"
              alt="logo"
              className="navbar__logo__image"
            />
          </Link>
        </div>
        <div className="navbar__content">
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
          <a
            onClick={() => {
              if (mode === 'light') {
                setMode('dark');
              } else {
                setMode('light');
              }
            }}
          >
            {mode === 'light' ? <>&#9789;</> : <>&#9788;</>}
          </a>
        </div>
      </motion.div>
    );
};

export default Navbar;
