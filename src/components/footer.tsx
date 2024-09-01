import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Column 1: Platform Information */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="text-lg font-semibold mb-2">À propos de la plateforme</h5>
                        <p className="text-gray-400">
                            Accédez à une vaste bibliothèque d'épreuves et de corrigés pour exceller dans vos études. Notre plateforme est conçue pour faciliter vos révisions et vous aider à réussir.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="text-lg font-semibold mb-2">Liens rapides</h5>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link to="/about" className="hover:underline">À propos</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/features" className="hover:underline">Fonctionnalités</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/pricing" className="hover:underline">Tarification</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="text-lg font-semibold mb-2">Ressources</h5>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link to="/faqs" className="hover:underline">FAQ</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/terms" className="hover:underline">Conditions d'utilisation</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/privacy" className="hover:underline">Politique de confidentialité</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="text-lg font-semibold mb-2">Suivez-nous</h5>
                        <ul className="flex space-x-4 text-gray-400">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.498V14.708h-3.13v-3.625h3.13V8.47c0-3.104 1.895-4.796 4.662-4.796 1.325 0 2.465.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.765v2.315h3.587l-.467 3.625h-3.12V24h6.116c.73 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.608 1.793-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.558-3.586-1.558-2.717 0-4.924 2.207-4.924 4.917 0 .39.045.765.13 1.124-4.09-.205-7.719-2.166-10.148-5.144-.422.723-.664 1.562-.664 2.455 0 1.694.863 3.188 2.176 4.065-.803-.026-1.56-.247-2.228-.617v.062c0 2.366 1.685 4.342 3.918 4.788-.41.111-.841.171-1.287.171-.315 0-.621-.031-.921-.087.631 1.953 2.445 3.376 4.6 3.415-1.685 1.32-3.808 2.105-6.114 2.105-.398 0-.79-.023-1.175-.067 2.182 1.4 4.768 2.215 7.548 2.215 9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.015-.637.964-.695 1.8-1.562 2.462-2.549z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.983 3.5C4.983 5.08 3.78 6.5 2.057 6.5S-.83 5.081-.83 3.5C-.83 1.92.37.5 2.056.5 3.78.5 4.983 1.92 4.983 3.5zM.14 8.28h4.163V24H.14V8.28zM18.26 8.14c-2.098 0-3.56 1.037-4.144 2.07h-.057v-1.775H10.023c.054 1.16 0 12.566 0 12.566h4.163V14.37c0-.506.036-1.01.186-1.33.404-.895 1.328-1.82 2.89-1.82 2.037 0 2.85 1.379 2.85 3.405v8.376h4.162V15.38c0-5.653-3.014-7.23-7.114-7.23z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BReady. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
