import React from 'react';
import { Link } from 'react-router-dom';
import { SideMenu } from '@/Components/SideMenu';
import { Cards } from '@/components/Cards';
import { Table } from '@/Components/Table';
import { Navbar } from '@/Components/Navbar';
import { Footer } from '@/Components/Footer';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export function Dashboard() {

    return (
        <AuthenticatedLayout>
            <div id="root">
                <div className="min-h-screen bg-blue-gray-50/50">
                    <SideMenu />
                    <div className="p-4 xl:ml-80">
                        <Navbar />

                        <Footer />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export default Dashboard;