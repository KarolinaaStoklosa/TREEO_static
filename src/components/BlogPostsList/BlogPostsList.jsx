import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import blogPosts from "../../BlogPostsOb/BlogPostsOb";
import ContactForm from '../ContactPage/ContactForm';
import NavSideBar from '../NavBar/NavSideBar';

export default function BlogPostsList(){
    const [isFooterVisible, setIsFooterVisible] = useOutletContext();

    useEffect(() => {
        const footerElement = document.getElementById("BPLfooter");
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFooterVisible(entry.isIntersecting);
          },
          { threshold: 0.3 }
        );
        observer.observe(footerElement);
        return () => {
          observer.disconnect();
        };
      }, []);

    return (
    <>
        <div className='w-full relative flex justify-center items-center md:mr-32 z-0'>
            <div className="z-0 w-[500px] h-[100px] md:h-[150px] md:w-auto rounded-full overflow-hidden object-cover mb-10 md:mb-0">
                <div className="ml-6 mr-6 md:ml-20 md:pl-6 absolute top-0 left-0 text-dark-900">
                    <h1 className="z-0 mt-16 font-[serif] md:font-[Roboto] md:text-7xl text-5xl tracking-tighter font-medium">Elementarz</h1>
                </div>
            </div>
        </div>
        <div className="relative w-full">
            <div className="flex flex-col ml-6 mr-6 md:pl-20 md:pr-20 gap-6 pt-20">
            {Object.entries(blogPosts).map(([slug, { title, content, excerpt }]) => (
                <div key={slug}>
                    <Link to={`/elementarz/${slug}`} className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <div className="text-justify"><p>{excerpt.substring(0, 240) + '...'}</p></div>
                        <p className="ml-auto font-bold">Czytaj dalej</p>
                    </Link>
                </div>
            ))}
            </div>
        </div>
        <div className="w-full mt-10" id="BPLfooter">
            <ul className='flex flex-col wrap font-[serif] md:font-[Roboto] text-bold text-6xl tracking-[-.075em] md:tracking-tighter text-left md:ml-24'>
                <li className="mt-24 ml-6 cursor-pointer md:ml-0">
                    <Link to='/fundamenty'>Fundamenty</Link>
                </li>
                <li className="mt-6 ml-6 cursor-pointer md:ml-0">
                    <Link to='/autoreklama'>Autoreklama</Link>
                </li>
                <li className="mt-6 ml-6 cursor-pointer md:ml-0">
                    <Link to='/tworczosc'>Twórczość</Link>
                </li>
                <li className="mt-6 ml-6 cursor-pointer md:ml-0">
                    <Link to='/wizytowka'>Wizytówka</Link>
                </li> 
            </ul>

            <div className={`${isFooterVisible ? "hidden" : "visible"}`}>
                <NavSideBar />
            </div>

            <footer className="relative">
                <ContactForm />
            </footer>
        </div>
    </>
    )
}