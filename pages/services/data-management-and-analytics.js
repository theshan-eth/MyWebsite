import React from 'react';
import Link from 'next/link';

const datamanagementandanalytics = () => {
  return (
    <div className="container mx-auto px-6 py-5">
      <h2 className="text-2xl font-bold mb-4">Data Management and Analytics</h2>

      <Link href="/Services">
        <a className="text-blue-500 hover:underline">Back to services</a>
      </Link>
    </div>
  );
};

export default datamanagementandanalytics;
