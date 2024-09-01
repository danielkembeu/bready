import React from "react";
import Lottie from "lottie-react";
import { Button, Icon } from "semantic-ui-react";
import heroAnimation from '../../assets/animations/hero-animation.json';
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function LandingHeader() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            // once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <header className="bg-primary w-full h-[600px] relative top-30 grid grid-cols-2 place-items-center px-32">
            <div data-aos='zoom-in'>
                <Lottie
                    animationData={heroAnimation}
                    loop
                    className='w-[600px] aspect-auto'
                />
            </div>
            <div className="text-white w-[500px]" data-aos='fade-left'>
                <h2 className="text-5xl">Avec <span className="px-3 m-0 rounded-md">BReady</span>, vous êtes désormais prêt</h2>
                <p>
                    Une banque d'épreuves accessibles avec des corrigés téléchargeables pour vous permettre d'être au top pour le BTS.
                </p>

                <Link to='/app/bibliotheque'>
                    <Button icon labelPosition="right">
                        Visiter la bibliothèque
                        <Icon name='arrow right' />
                    </Button>
                </Link>
            </div>
        </header>
    )
}
