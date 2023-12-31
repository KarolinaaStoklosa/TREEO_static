import {useEffect, useState, useRef} from 'react';
import ContactForm from '../ContactPage/ContactForm';
import NavBar from '../NavBar/NavBar';
import {motion} from 'framer-motion'
import NavSideBar from '../NavBar/NavSideBar';
import gradientLoop from './image/gradientLoop.mp4'
import treeoSign from '../image/treeoSign.jpg'
import treeoSign2 from '../image/treeoSign2.jpg'
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("HPfooter");
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

    const videoRef = useRef(null);
  


    return (
       
        <motion.div className="z-4 relative top-0 left-0 mt-0 bg-light text-dark-900 w-full" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}} >
        <div className={`${isFooterVisible ? "bg-dark-900 text-light" : "bg-light text-dark-900"} min-h-screen transition-colors duration-500 relative`}>
           
        
            <nav className="bg-inherit h-28 w-full z-30">
                <NavBar />
            </nav>
            <div className='w-full relative flex justify-center items-center md:mr-32 z-0'>
                <div className="z-0 w-[500px] h-auto md:h-[500px] md:w-auto rounded-full overflow-hidden object-cover mb-10 md:mb-0">
                    <video autoPlay muted loop className="h-full w-full object-cover">
                        <source src={gradientLoop} type="video/mp4" />
                    </video>
                    <div className="ml-6 mr-6 md:ml-20 md:pl-6 absolute top-0 left-0 text-dark-900">
                        <h1 className="z-0 mt-16 font-[serif] md:font-[Roboto] md:text-7xl text-5xl tracking-tighter font-medium">Niech Twoje wnętrze <br />mówi o Tobie</h1>
                        <div className=" text-lg md:text-xl leading-tight mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 md:grid-rows-1 grid-rows-2 gap-6 md:gap-16">
                            <p>zaprojektuj i zrealizuj <span className="underline">niepowtarzalne meble,</span> </p>
                            <p className="row-span-2">a każdy moment pomiędzy, to czas na odkrywanie nowych <span className="underline">możliwości</span> i <span className="underline">kreatywności</span></p>
                            <p>zyskaj <span className="underline">jakość</span> i <span className="underline">profesjonalizm</span>, których oczekujesz od najlepszych w branży</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="relative w-full">
                <div className="md:pl-20 md:ml-6 md:mr-6 md:pr-20 pt-56 md:flex md:flex-row-reverse">
                    <img src={treeoSign} alt="treeo znaczek" className="hidden md:block md:w-[50%] md:pl-5" />
                    <img src={treeoSign2} alt="magnes treeo" className="w-full md:w-[50%] md:pr-5" />
                </div>
            </div>

            <div className="relative w-full">
                <div className="flex flex-col ml-6 mr-6 md:pl-20 md:pr-20 gap-4 pt-20">
                    <p className="text-justify">Tworzymy zespół rzemieślników, artystów i inżynierów, którzy swoją wiedzę i pasję przekuwają w małe dzieła sztuki użytkowej. Wierzymy, że nowoczesne meble biurowe, łazienkowe czy kuchenne na wymiar mogą wyrażać ich właścicieli, uzupełniać przestrzeń życiową o nową energię, kreować myśli osób, które wśród nich przebywają na co dzień. Projektujemy i wykonujemy unikalne i funkcjonalne modele na zamówienie, pełne charakteru i maksymalnie dostosowane do Twoich potrzeb.</p>

                    <h2 className="font-bold text-xl font-[Roboto]">Twój dom, Twój styl, Twoje wyjątkowe meble</h2>

                    <p className="text-justify">Żyjemy w świecie, w którym niemal wszystko, co nas otacza, pochodzi z masowej produkcji. Nijakie, niewyróżniające się wyroby otaczają nas w biurach i salonach, takie samo wyposażenie kuchenne i łazienkowe nie mówi nic o ludziach, którzy z niego korzystają. Spraw, by Twoje wnętrza były jedyne w swoim rodzaju, korespondujące z Twoimi wartościami i potrzebami. Nowoczesne meble na zamówienie, produkowane przez TREEO, pomogą Ci stworzyć własny, inspirujący azyl.</p>

                    <p className="text-justify">Bardzo ważnym aspektem naszej pracy jest poznanie indywidualnych potrzeb każdego Klienta. Tworząc na zamówienie nowoczesne meble biurowe, łazienkowe, kuchenne czy do salonu interesuje nas nie tylko ich przyszły wymiar, ale przede wszystkim charakter osoby, która będzie je użytkowała. Wykorzystując powierzoną nam przestrzeń, stworzymy dla Ciebie spersonalizowane i unikatowe produkty, na których powstanie masz stuprocentowy wpływ. Materiał, wykończenie, kolor, faktura – wszystkie te aspekty mają olbrzymie znaczenie. Sam wybierz otoczenie, w którym będziesz mieszkał. My przekujemy Twoje wizje w trwałe i funkcjonalne meble na wymiar do salonu i innych pomieszczeń.</p>

                    <h2 className="font-bold text-xl font-[Roboto]">TREEO – kreatywny profesjonalizm</h2>

                    <p className="text-justify">Wierzymy, że tylko dając z siebie wszystko, możemy w pełni zadowolić nawet najbardziej wymagających Klientów. Realizujemy kompleksową usługę projektowania i wykonania, tworząc na zamówienie nowoczesne meble na wymiar do salonu czy sypialni, a także biurowe, łazienkowe, kuchenne. Współpracujemy również z lokalnymi biznesami, tworząc funkcjonalne rozwiązania dla lokali użytkowych.</p>

                    <p className="text-justify">Serdecznie zapraszamy do kontaktu z TREEO – razem stwórzmy dla Ciebie dom, w którym nie ma miejsca na bylejakość!</p>
                </div>
            </div>

            <div className="relative w-full md:text-4xl text-3xl">
                
                <div className="md:p-20 ml-6 md:pl-32 mr-6 md:mr-16 text-base md:text-xl leading-tight mt-10 grid grid-cols-2 md:grid-cols-2 grid-rows-4 md:grid-rows-3 gap-6 md:gap-12">
                <p className="col-span-2 row-span-2 md:row-span-3 md:col-span-1 md:text-4xl text-3xl font-[serif] md:font-[Roboto] tracking-tighter self-center md:leading-snug leading-tight "
                >Współpraca z najlepszymi <br className=""></br>w branży to gwarancja, <br></br>że Twój remont będzie wykonany 
                w stylu, <br className=""></br>który Cię wyróżni.</p>
                    <p className="row-span-1 row-start-3 col-start-1 md:row-span-1 md:row-start-1 md:col-start-2"> 
                        <a href="https://banownetrza.pl/" target="_blank" className="underline">Bano Wykończenia Wnętrz
                        </a> 
                        <br></br><span> i </span> 
                        <a href="https://www.domwell.pl/" target="_blank" className="underline">
                                domwell wykończenia wnętrz,
                        </a>
                    </p>
                        <p className="row-span-1 row-start-3 col-start-2 md:row-span-1 md:row-start-2 md:col-start-2">to dwa silne filary, które stanowią fundament naszej profesjonalnej współpracy.</p>
                        <p className="row-start-4 col-start-1 col-span-2 md:row-span-1 md:row-start-3 md:col-start-2">Zyskujesz pewność, że Twoje wymarzone wnętrze stanie się rzeczywistością.</p>
                </div>
            </div>

            <div className="w-full mt-10" id="HPfooter">
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

                <footer  className="relative">
                    <ContactForm />
                </footer>
            </div>
        </div>
    </motion.div>
    
    )
}

export default HomePage;