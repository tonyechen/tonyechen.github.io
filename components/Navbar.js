import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    let [mode, setMode] = useState();

    // toggle theme
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // for initial render, grab what's inside local storage theme
            if (!mode) {
                let local_mode = window.localStorage.getItem('theme');
                if (!local_mode) {
                    window.localStorage.setItem('theme', 'light');
                    setMode('light');
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
        <div className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                    <img
                        src="https://images-platform.99static.com//yKLNol6zH2gAAYH9mAp8ORh6o6g=/436x1870:1507x2941/fit-in/500x500/projects-files/37/3716/371609/6f1c6c29-ccce-4c3e-8050-ca71c2fa5c12.png"
                        alt="logo"
                        className="navbar__logo__image"
                    />
                </Link>
            </div>
            <div className="navbar__content">
                <Link href="/about">About</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/projects">Projects</Link>
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
        </div>
    );
};

export default Navbar;
