import { act, useEffect, useRef } from "react";
// import { navItems } from "../content/content";
import PropTypes from "prop-types";

const NavBar = ({ navOpen }) => {
    const activeBox = useRef(null);
    const lastActiveLink = useRef(null);

    const activeCurrentLink = (event) => {

        if (!event.target || !activeBox.current) return; // Tambahkan pengecekan
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (activeBox.current && lastActiveLink.current) {
    //             initActiveBox(); // Panggil fungsi untuk menyesuaikan posisi
    //         }
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize); // Bersihkan event listener
    //     };
    // }, []);

    const initActiveBox = () => {
        if (!activeBox.current || !lastActiveLink.current) return; // Tambahkan pengecekan
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Skill',
            link: '#skill',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Certificate',
            link: '#certificate',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];
    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a href={link} className={className} key={key} ref={ref} onClick={activeCurrentLink}>
                        {label}
                    </a>
                ))
            }
            <div className="active-box" ref={activeBox}>

            </div>
        </nav>
    )
}

NavBar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}
export default NavBar;