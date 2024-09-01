import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavBar from '../components/dashboard/navbar'
import DashboardSidebar from '../components/dashboard/sidebar'

export default function HomePage() {
    return (
        <>
            <div>
                <DashboardNavBar />
                <DashboardSidebar />
            </div>
            <Outlet />
        </>
    )
}
