import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const DashboardSidebar: React.FC = () => {
    return (
        <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
            {/* Navigation Links */}
            <nav className="mt-4 flex-grow">
                <ul>
                    <li className="hover:bg-gray-700">
                        <Link to="/dashboard" className="flex items-center p-4">
                            <Icon name="home" className="mr-3" />
                            Dashboard
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/analytics" className="flex items-center p-4">
                            <Icon name="chart line" className="mr-3" />
                            Analytics
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/reports" className="flex items-center p-4">
                            <Icon name="file alternate" className="mr-3" />
                            Reports
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/settings" className="flex items-center p-4">
                            <Icon name="settings" className="mr-3" />
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Logout Link */}
            <div className="p-4 hover:bg-gray-700">
                <Link to="/auth/connexion" className="flex items-center">
                    <Icon name="sign-out" className="mr-3" />
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;
