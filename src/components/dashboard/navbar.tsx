import React from 'react'
import { Input, Dropdown, Image } from 'semantic-ui-react';

export default function DashboardNavBar() {
    const [open, setOpen] = React.useState(false);

    const trigger = (
        <span>
            <Image avatar src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
        </span>
    );

    const options = [
        { key: 'profile', text: 'Profil', icon: 'user' },
        { key: 'settings', text: 'Paramètres', icon: 'settings' },
        { key: 'logout', text: 'Déconnexion', icon: 'sign-out' },
    ];

    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
            {/* Left: Application Name */}
            <div className="text-white text-2xl font-bold">
                BReady
            </div>

            {/* Center: Search Bar */}
            <div className="flex-grow mx-4">
                <Input
                    size='small'
                    icon='search'
                    placeholder='Rechercher...'
                    fluid
                    className="max-w-md"
                />
            </div>

            {/* Right: Avatar with Dropdown */}
            <div className="relative">
                <Dropdown
                    trigger={trigger}
                    options={options}
                    pointing="top right"
                    icon={null}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    open={open}
                />
            </div>
        </nav>
    );
};
