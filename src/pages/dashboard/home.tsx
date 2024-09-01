// import React from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbSection, BreadcrumbDivider, Divider, Input, Select, Button } from 'semantic-ui-react';
import { unites } from '../../utils/data/units';
import SheetCard from '../../components/card';


export default function HomePage() {
    return (
        <section className='w-full h-full pb-20'>
            <Breadcrumb>
                <Link to='/app/'>
                    <BreadcrumbSection link>Accueil</BreadcrumbSection>
                </Link>
                <BreadcrumbDivider />
            </Breadcrumb>

            <Divider />

            <header className='flex items-end justify-between mb-10 w-full'>
                <div>
                    <h2>Faites une recherche</h2>
                    <Input className='w-[420px]' action='search' placeholder='Search...' />
                </div>

                <div className='space-x-2'>
                    <Select placeholder='Select your country' options={unites} />
                </div>
            </header>

            <div className='mb-4 pl-4 flex items-center justify-between'>
                <h3>Quelques epreuves</h3>
                <Link to='/app/bibliotheque'>
                    <Button color='green'>Tout voir</Button>
                </Link>
            </div>

            <div className='w-[1200px] flex items-center flex-wrap justify-center space-x-1 gap-2'>
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <SheetCard key={index} />
                    ))
                }
            </div>
        </section>
    )
}
