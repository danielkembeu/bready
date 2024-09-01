import React from "react";
import LandingHeader from "../components/landing/header";
import NavBar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";
import Footer from "../components/footer";

export default function LandingPage() {

    React.useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            // once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='w-full h-screen'>
            <NavBar />
            <LandingHeader />

            <section className="px-16 py-12 flex flex-col items-center bg-slate-900 text-white">
                <h1 data-aos='fade-up' className="text-center text-[3.5rem] m-0">
                    Bienvenue sur <span className="text-primary">BReady</span>
                </h1>
                <h2 data-aos='fade-up' className="text-center m-0">
                    Boostez vos études avec notre plateforme d'épreuves et de corrigés en ligne !
                </h2>
                <h4 data-aos='fade-up' className="mt- text-xl font-semibold text-center w-[80%]">
                    Accédez à une vaste bibliothèque d'épreuves et de corrigés pour tous vos examens. Améliorez vos performances scolaires grâce à des ressources organisées et adaptées à vos besoins.
                </h4>
            </section>

            <Divider />

            <section className="w-full px-[14%] py-12 space-y-16">

                {/* Section 1 */}
                <div className="w-full grid grid-cols-2 place-items-center">
                    <div className="fade-right">
                        <img src={''} alt="" />
                    </div>

                    <div data-aos="fade-up">
                        <h1 className="text-3xl">
                            Accès illimité à des centaines d'épreuves
                        </h1>
                        <p className="text-secondary text-lg font-semibold">
                            Retrouvez une vaste collection d'épreuves couvrant plusieurs matières et niveaux scolaires. Que vous soyez au collège, au lycée, ou en études supérieures, vous aurez toujours à portée de main les ressources nécessaires pour réussir vos examens.
                        </p>

                    </div>
                </div>

                {/* Section 2 */}
                <div className="w-full grid grid-cols-2 place-items-center">
                    <div data-aos="fade-up">
                        <h1 className="text-3xl">
                            Corrigés détaillés et pédagogiques
                        </h1>
                        <p className="text-secondary text-lg font-semibold">
                            Nos corrigés ne se contentent pas de donner la bonne réponse. Ils expliquent chaque étape, vous permettant de comprendre le raisonnement derrière chaque solution. Idéal pour un apprentissage en profondeur.
                        </p>
                        <div data-aos="fade-left" className="">
                            <img src={''} alt="" />
                        </div>

                    </div>
                </div>

                {/* Section 3 */}
                <div className="w-full grid grid-cols-2 place-items-center">
                    <div className="fade-right">
                        <img src={''} alt="" />
                    </div>

                    <div data-aos="fade-up">
                        <h1 className="text-3xl">
                            Recherche rapide et intuitive
                        </h1>
                        <p className="text-secondary text-lg font-semibold">
                            Trouvez instantanément les épreuves dont vous avez besoin grâce à notre moteur de recherche performant. Filtrez par matière, niveau scolaire, ou type d'examen pour accéder directement à ce que vous cherchez.
                        </p>

                    </div>
                </div>

                {/* Section 4 */}
                <div className="w-full grid grid-cols-2 place-items-center">
                    <div data-aos="fade-up">
                        <h1 className="text-3xl">
                            Interface intuitive et conviviale
                        </h1>
                        <p className="text-secondary text-lg font-semibold">
                            Naviguez facilement à travers notre plateforme grâce à une interface claire et conçue pour une expérience utilisateur optimale. Tout est pensé pour que vous puissiez vous concentrer sur l'essentiel : vos révisions.
                        </p>
                        <div data-aos="fade-left" className="">
                            <img src={''} alt="" />
                        </div>

                    </div>
                </div>

                {/* Section 5 */}
                <div className="w-full grid grid-cols-2 place-items-center">
                    <div className="fade-right">
                        <img src={''} alt="" />
                    </div>

                    <div data-aos="fade-up">
                        <h1 className="text-3xl">
                            Accessible partout, tout le temps
                        </h1>
                        <p className="text-secondary text-lg font-semibold">
                            Emportez vos révisions avec vous grâce à notre plateforme optimisée pour les mobiles. Que vous soyez dans les transports ou en déplacement, vos ressources sont toujours accessibles.
                        </p>

                    </div>
                </div>

                {/* Section 6 */}
                <div className="w-full grid grid-cols-2 place-items-center">
                    <div data-aos="fade-up">
                        <h1 className="text-3xl">
                            Contenu actualisé régulièrement
                        </h1>
                        <p className="text-secondary text-lg font-semibold">
                            Notre équipe veille à ce que toutes les épreuves et corrigés soient à jour. Vous bénéficiez ainsi des dernières ressources, alignées avec les programmes scolaires actuels.
                        </p>
                        <div data-aos="fade-left" className="">
                            <img src={''} alt="" />
                        </div>

                    </div>
                </div>
            </section>

            <Divider />

            <section className="px-16 py-12 flex flex-col items-center space-y-6 my-6">
                <h1 data-aos='fade-up' className="text-center text-[3rem] text-primary m-0">
                    Prêt à exceller ?
                </h1>
                <h4 data-aos='fade-up' className="mt- text-xl font-semibold text-center w-[80%]">
                    Inscrivez-vous dès maintenant et accédez immédiatement à notre collection complète d'épreuves et de corrigés. Rejoignez une communauté d'étudiants motivés qui, comme vous, cherchent à atteindre l'excellence académique.
                </h4>
                <Link data-aos='fade-up' to='/auth/inscription'>
                    <Button color='green' size='large' className='bg-primary w-[280px] mt-10'>S'inscrire</Button>
                </Link>
            </section>

            <Footer />
        </div>
    )
}
