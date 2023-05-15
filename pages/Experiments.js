import React from 'react';
import Link from 'next/link';

const experimentList = [
  {
    title: 'AutoGPT',
    path: '/experiments/autoGPT',
    summary: '...',
  },
  {
    title: 'LangChain',
    path: '/experiments/langChain',
    summary: '...',
  },
  {
    title: 'ChatGPT',
    path: '/experiments/chatGPT',
    summary: '...',
  }
];

const Experiments = () => {
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
              {experimentList.map((experiment, index) => (
                <Link key={index} href={experiment.path}>
                  <a className="text-blue-100">
                    <div className="text-center hover:bg-blue-500 rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4">{experiment.title}</h3>
                      <p className="text-gray-200 font-light mb-4">{experiment.summary}</p>
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

export default Experiments;