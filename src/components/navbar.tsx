import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
// import { Colors } from '../utils/colors'

export default function NavBar() {
    return (
        <nav className='z-20 fixed bg-white top-0 w-full h-16 px-10 flex items-center justify-between shadow-lg'>
            <div className='absolute w-full h-full blur-lg -z-20' />
            <Link to='/'>
                <h3 className='font-bold text-primary'>BReady</h3>
            </Link>

            <div className='flex items-center justify-between space-x-8'>

                <ul className='font-semibold flex items-center space-x-4 cursor-pointer'>
                    <Link className='text-secondary' to='/'>
                        <li className='hover:text-primary duration-500'>
                            Accueil
                        </li>
                    </Link>
                    <Link className='text-secondary' to='/a-propos'>
                        <li className='hover:text-primary duration-500'>A propos</li>
                    </Link>
                    <Link className='text-secondary' to='/app/bibliotheque'>
                        <li className='hover:text-primary duration-500'>Bibliotheque</li>
                    </Link>
                    {/* <Link to='/contactez-nous' className='hover:text-primary duration-500'>Contacts</Link> */}
                </ul>

                <div className='space-x-2'>
                    <Link to='/auth/connexion'>
                        <Button basic size='small' className='bg-secondaryLight'>Se connecter</Button>
                    </Link>
                    <Link to='/auth/inscription'>
                        <Button color='green' size='small' className='bg-primary'>S'inscrire</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
