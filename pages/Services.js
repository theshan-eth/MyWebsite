import React from 'react';
import Link from 'next/link';

const servicesList = [
  {
    title: 'Workflow optimization',
    path: '/services/workflow-optimization',
    summary: 'Streamline and automate business processes to improve efficiency, reduce costs, and enhance overall performance.',
  },
  {
    title: 'E-commerce and website development',
    path: '/services/e-commerce',
    summary: 'Design and develop e-commerce websites and platforms to boost online sales and customer engagement.',
  },
  {
    title: 'Software integration and customization',
    path: '/services/software-integration-and-customization',
    summary: 'Integrate and customize software solutions to enhance business functionality and efficiency.',
  },
  {
    title: 'Data management and analytics',
    path: '/services/data-management-and-analytics',
    summary: 'Manage and analyze data to provide actionable insights for better decision-making and improved business performance.',
  },
  {
    title: 'Mobile app development',
    path: '/services/mobile-app-development',
    summary: 'Develop mobile applications to enhance user experience and expand your digital presence.',
  },
  {
    title: 'Business process outsourcing',
    path: '/services/business-process-outsourcing',
    summary: 'Outsource non-core business processes to improve efficiency and reduce operational costs.',
  },
];


const Services = () => {
  return (
    <div className="container mx-auto px-6 py-5">

    <img className="hidden md:block absolute top-0 left-0 w-full h-full object-cover" src="/bg3.png" alt="Desktop Background Image" />
  <img className="md:hidden absolute top-0 left-0 w-full h-full object-cover" src="/mb1.png" alt="Mobile Background Image" style={{ height: '100vh' }} />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
<div className="relative">
  <img className="absolute top-0 left-0 w-full h-full object-cover" src="/bg2.png" alt="Background Image" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="container mx-auto px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 service-grid">
        {servicesList.map((service, index) => (
          <Link key={index} href={service.path}>
            <a className="text-blue-100">
              <div className="text-center hover:bg-blue-500 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-200 font-light mb-4">{service.summary}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;
