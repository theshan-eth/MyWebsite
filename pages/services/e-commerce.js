import React from 'react';
import Link from 'next/link';

const ECommerceAndWebsiteDevelopment = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="/bg1.png" alt="Background Image" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative">

        <div className="bg-[rgba(0,0,0,0.6)] p-4 mb-6 rounded-md shadow-md text-white">
          <p>
                    <h2 className="text-3xl font-bold mb-6">E-commerce and Website Development</h2> In today's digital age, a captivating online presence is essential for small businesses to thrive. Our e-commerce and website development services are designed to elevate your brand, attract customers, and drive sales like never before. By leveraging ChatGPT and other state-of-the-art technology solutions, we'll help you create a stunning, user-friendly, and responsive website that sets you apart from the competition.
          </p>
        </div>

        <div className="bg-[rgba(0,0,0,0.6)] p-4 mb-6 rounded-md shadow-md text-white">
          <h3 className="text-2xl font-semibold mb-2">Benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Break free from geographical boundaries: An exceptional online presence empowers your business to connect with customers around the globe, opening up a world of sales opportunities.
            </li>
            <li>
              Cost-effective marketing magic: Our digital expertise allows you to target specific audiences with laser precision and track campaign performance, making the most of your marketing budget.
            </li>
            <li>
              Exceptional customer experience: A beautifully crafted website ensures a seamless user experience, fostering customer loyalty and repeat business.
            </li>
          </ul>
        </div>

        <div className="bg-[rgba(0,0,0,0.6)] p-4 mb-6 rounded-md shadow-md text-white">
          <h3 className="text-2xl font-semibold mb-2">Examples:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Captivate with custom website design: Our team of design wizards will create a user-friendly, responsive website tailored to your target audience and industry, ensuring your brand stands out in a crowded marketplace.
            </li>
            <li>
              Seamless e-commerce integration: We'll implement powerful e-commerce platforms like Shopify or WooCommerce, making it effortless for your customers to browse, shop, and fall in love with your products.
            </li>
            <li>
              Climb the search engine ranks: Our SEO specialists will optimize your website's content and structure, boosting your search engine rankings and attracting a steady stream of organic traffic.
            </li>
          </ul>
        </div>

        <div className="bg-blue-700 p-4 mt-6 mb-6 rounded-md shadow-md text-white">
  <h3 className="text-2xl font-semibold mb-2">Don't settle for mediocrity – let's create something extraordinary together.</h3>
  <p>
    Let us help you build a remarkable online presence that captures the hearts and wallets of your customers. With our e-commerce and website development services, you'll enjoy the benefits of a stunning, high-performing website that amplifies your brand and drives business growth. 
  </p>
</div>


        <div className="mt-6">
          <Link href="/Services">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Back to services
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ECommerceAndWebsiteDevelopment;
