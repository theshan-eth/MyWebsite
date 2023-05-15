import React from 'react';


const servicesList = [
  {
    title: 'Workflow optimization',
  },
  {
    title: 'E-commerce and website development',
  },
  {
    title: 'Software integration and customization',
  },
  {
    title: 'Data management and analytics',
  },
  {
    title: 'Mobile app development',
  },
  {
    title: 'Business process outsourcing',
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
          <div key={index} className="text-center hover:bg-blue-500 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;
