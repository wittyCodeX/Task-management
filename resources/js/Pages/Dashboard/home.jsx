import React from 'react';
import { Link } from 'react-router-dom';
import { SideMenu } from '@/Components/SideMenu';
import { Cards } from '@/components/Cards';
import { Table } from '@/Components/Table';
import { Navbar } from '@/Components/Navbar';
import { Footer } from '@/Components/Footer';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export function Home() {

    return (
        <AuthenticatedLayout>
            <div id="root">
                <div className="min-h-screen bg-blue-gray-50/50">
                    <SideMenu />
                    <div className="p-4 xl:ml-80">
                        <Navbar />
                        <div className="mt-12">
                            <Cards />
                            <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">

                                <Table />
                                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-6">
                                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-2">
                                            Orders Overview
                                        </h6>
                                        <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-3.5 w-3.5 text-green-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"></path>
                                            </svg>
                                            <strong>24%</strong> this month
                                        </p>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <div className="flex items-start gap-4 py-3">
                                            <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!w-5 !h-5 text-blue-gray-300">
                                                    <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">$2400, Design changes</p>
                                                <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">22 DEC 7:20 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 py-3">
                                            <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!w-5 !h-5 text-blue-gray-300">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">New order #1832412</p>
                                                <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">21 DEC 11 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 py-3">
                                            <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!w-5 !h-5 text-blue-gray-300">
                                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">Server payments for April</p>
                                                <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">21 DEC 9:34 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 py-3">
                                            <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!w-5 !h-5 text-blue-gray-300">
                                                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                                                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">New card added for order #4395133</p>
                                                <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">20 DEC 2:20 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 py-3">
                                            <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!w-5 !h-5 text-blue-gray-300">
                                                    <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">Unlock packages for development</p>
                                                <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">18 DEC 4:54 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 py-3">
                                            <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!w-5 !h-5 text-blue-gray-300">
                                                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                                                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd"></path>
                                                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">New order #9583120</p>
                                                <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">17 DEC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export default Home;

