import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const DashboardSidebar: React.FC = () => {
    return (
        <div className="w-64 flex flex-col border-r fixed h-full">
            {/* Navigation Links */}
            <nav className="mt-4 flex-grow py-20">
                <ul>
                    <li>
                        <Link to="/app/" className="flex items-center p-4">
                            <Button icon basic labelPosition='left' fluid>
                                <Icon name="home" className="mr-3" />
                                Accueil
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/app/bibliotheque" className="flex items-center p-4">
                            <Button icon labelPosition='left' basic fluid>
                                <Icon name='folder' className="mr-3" />
                                Bibliotheque
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/app/nouvelle-epreuve" className="flex items-center p-4">
                            <Button icon labelPosition='left' basic fluid>
                                <Icon name="file" />
                                Nouvelle epreuve
                            </Button>
                        </Link>
                    </li>
                    {/* <li className="hover:bg-secondaryLight">
                        <Link to="/settings" className="flex items-center p-4">
                            <Icon name="settings" className="mr-3" />
                            Settings
                        </Link>
                    </li> */}
                </ul>
            </nav>

            {/* Logout Link */}
            <div className='w-full my-4 px-5'>
                <Link to="/auth/connexion">
                    <Button color='red' icon labelPosition='right' className='w-full'>
                        Déconnexion
                        <Icon name="sign-out" />
                    </Button>
                </Link>
            </div>
        </div >
    );
};

export default DashboardSidebar;
