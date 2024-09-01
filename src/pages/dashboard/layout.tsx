// import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavBar from '../../components/dashboard/navbar'
import DashboardSidebar from '../../components/dashboard/sidebar';

export default function DashboardLayout() {
    return (
        <>
            <DashboardNavBar />
            <DashboardSidebar />

            <section className='pt-24 pl-[276px] pr-20'>
                <Outlet />
            </section>
        </>
    )
}
