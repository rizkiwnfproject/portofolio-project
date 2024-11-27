// const lastActiveLink = useRef();
import Figma from '../assets/images/figma.svg'
import CSS from '../assets/images/css3.svg'
import JavaScript from '../assets/images/javascript.svg'
import PHP from '../assets/images/php.png'
import Python from '../assets/images/python.png'
import Git from '../assets/images/git.png'
import Postman from '../assets/images/postman.svg'
import Bootstrap from '../assets/images/bootstrap.png'
import Django from '../assets/images/django.png'
import Laravel from '../assets/images/laravel.png'
import MySQL from '../assets/images/mysql.png'
import ReactJS from '../assets/images/react.svg'
import TailwindCSS from '../assets/images/tailwindcss.svg'
import Project1 from '../assets/images/project-2.png'
import Project2 from '../assets/images/project-1.png'
import Project3 from '../assets/images/project-3.png'
import Project4 from '../assets/images/project-4.png'
import Project5 from '../assets/images/project-5.png'
import Project6 from '../assets/images/project-6.png'
import Certificate1 from '../assets/images/certificate-1.jpg'
import Certificate2 from '../assets/images/certificate-2.jpg'
import Certificate3 from '../assets/images/certificate-3.jpg'
import Certificate4 from '../assets/images/certificate-4.jpg'
import Certificate5 from '../assets/images/certificate-5.jpg'
import Certificate6 from '../assets/images/certificate-6.jpg'
import Certificate7 from '../assets/images/certificate-7.jpg'
import Certificate8 from '../assets/images/certificate-8.jpg'
import Whatsapp from '../assets/images/whatsapp.svg'

export const navItems = [
    {
        label: 'Home',
        link: '#home',
        className: 'nav-link active',
        // ref: lastActiveLink
    },
    {
        label: 'About',
        link: '#about',
        className: 'nav-link'
    },
    {
        label: 'Work',
        link: '#work',
        className: 'nav-link'
    },
    {
        label: 'Reviews',
        link: '#reviews',
        className: 'nav-link'
    },
    {
        label: 'Contact',
        link: '#contact',
        className: 'nav-link md:hidden'
    }
];

export const aboutItems = [
    {
        label: 'Project done',
        number: 8
    },
    {
        label: 'Years of experience',
        number: 1
    },
    {
        label: 'Certificate Programming',
        number: 8
    },
];


export const socialLinks = [
    {
        href: 'https://www.github.com/rizkiwahyuproject',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
        </svg>,
        alt: 'GitHub'
    },
    {
        href: 'linkedin.com/in/rizki-wahyu-nurcahyani-fajarwati',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
        </svg>,
        alt: 'LinkedIn'
    },
    {
        href: 'https://wa.me/6285731544494',
        icon: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24" height="24" fill='#fff'><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" fill="currentColor" /></svg>,
        alt: 'Whatsapp'
    },
    {
        href: 'https://www.instagram.com/rizkiwnf',
        icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
        </svg>,
        alt: 'Instagram'
    },
];

export const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

export const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/rizkiwahyuproject'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rizki-wahyu-nurcahyani-fajarwati'
    },
    {
        label: 'Whatsapp',
        href: 'https://wa.me/6285731544494'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/rizkiwnf'
    },
];

export const skillItem = [
    {
        imgSrc: Figma,
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: Postman,
        label: 'Postman',
        desc: 'API tool'
    },
    {
        imgSrc: Git,
        label: 'Git',
        desc: 'Collaborate tool'
    },
    {
        imgSrc: CSS,
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: TailwindCSS,
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: Bootstrap,
        label: 'Bootstrap',
        desc: 'User Interface'
    },
    {
        imgSrc: JavaScript,
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: PHP,
        label: 'PHP',
        desc: 'Server-side'
    },
    {
        imgSrc: Python,
        label: 'Python',
        desc: 'Server-side'
    },
    {
        imgSrc: MySQL,
        label: 'MySQL',
        desc: 'Database'
    },
    {
        imgSrc: Laravel,
        label: 'Laravel',
        desc: 'PHP Framework'
    },
    {
        imgSrc: ReactJS,
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: Django,
        label: 'Django',
        desc: 'Python Framework'
    },
];

export const works = [
    {
        imgSrc: Project1,
        title: 'Elaund',
        tags: ['ReactJS', 'TailwindCSS', 'Development'],
        projectLink: 'https://github.com/rizkiwnfproject/elaund-frontend'
    },
    {
        imgSrc: Project2,
        title: 'Web-GIS',
        tags: ['Laravel', 'Leaflet', 'Map', 'GeoJSON'],
        projectLink: 'https://github.com/rizkiwnfproject/uas-webgis'
    },
    {
        imgSrc: Project4,
        title: 'User Journey Prediction',
        tags: ['Django', 'LSTM', 'User Journey'],
        projectLink: 'https://github.com/rizkiwnfproject/proyek_akhir'
    },
    {
        imgSrc: Project3,
        title: 'Jalasutra',
        tags: ['ReactJS', 'TailwindCSS'],
        projectLink: 'https://github.com/rizkiwnfproject/jalasutra-website'
    },
    {
        imgSrc: Project5,
        title: 'Test Detik.com',
        tags: ['HTML', 'CSS', 'JS'],
        projectLink: 'https://github.com/rizkiwnfproject/test-detik'
    },
    {
        imgSrc: Project6,
        title: 'Library Website',
        tags: ['PHP','Docker','CSS'],
        projectLink: 'https://github.com/rizkiwnfproject/library-bdl'
    },
];

export const certificate = [
    {
        imgSrc: Certificate7,
        title: 'Junior Mobile Programming',
        tags: ['BNSP', 'Java', 'Mobile'],
        projectLink: 'https://drive.google.com/file/d/1xW_GPLIClx5jyptDQlzwGU8ufvKZFwhi/view?usp=sharing'
    },
    {
        imgSrc: Certificate2,
        title: 'Dasar Pemrograman Website',
        tags: ['Dicoding', 'HTML', 'CSS', 'Js'],
        projectLink: 'https://drive.google.com/file/d/1w2lOLV_4TFyLgcrLb2GAS51fUrwIlGnT/view?usp=sharing'
    },
    {
        imgSrc: Certificate3,
        title: 'Dasar Pemrograman JS',
        tags: ['Dicoding', 'Javascript'],
        projectLink: 'https://drive.google.com/file/d/1g3tbLxQ80yHW9CSthx_nuLeJN71jMP1Y/view?usp=sharing'
    },
    {
        imgSrc: Certificate8,
        title: 'Pemrograman FE Website',
        tags: ['Dicoding', 'HTML', 'CSS', 'Js'],
        projectLink: 'https://drive.google.com/file/d/1dRfLlCFHEetoz3Umo0-7GKHWXEgwNrvP/view?usp=sharing'
    },
    {
        imgSrc: Certificate5,
        title: 'Machine Learning',
        tags: ['VSGA', 'R'],
        projectLink: 'https://drive.google.com/file/d/1RgJ8Km-UPzNK2gJt8HgJDMHXmG7lP82B/view?usp=sharing'
    },
    {
        imgSrc: Certificate4,
        title: 'Junior Mobile Programming',
        tags: ['VSGA', 'Java', 'Mobile'],
        projectLink: 'https://drive.google.com/file/d/1Vdw05VET02538gILS1axQ5BYvAG09h5-/view?usp=sharing'
    },
];