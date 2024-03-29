import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Typist from 'react-text-typist';

<Head>
        <title>Digital Refraction</title>
        <meta
          name="description"
          content="Digital Refraction - Technology Solutions for Small Business"
        />
        <link rel="icon" href="/favicon.ico" />
</Head>

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 17000); // Show button after 15 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

return (
    <div className="container flex-column mx-auto px-6 items-center justify-center">
  <img className="absolute top-0 left-0 w-full h-full object-cover" src="/bg2.png" alt="Background Image" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <main>
        <section className="static">
          <div className="static text-center">
          <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="text-white text-center text-body typing-text">
    <Typist
      className={'myTypist'}
      cursorClassName={'myCursor'}
      sentences={[
        "With the emergence of AI",
        "advanced business capabilities",
        "are within reach of ALL businesses.",
        "We can help you."
      ]}
      loop={false}
      typingSpeed={100}
      deleteSpeed={110}
    />
  </div>
  {showButton && (
    <div className="text-center py-2 mt-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pulse" style={{ fontSize: '20px', padding: '10px 20px' }}>
        <a href="mailto:info@digitalrefraction.com?subject=I want to learn more about Digital Refraction &body=Body">Let's Discuss</a>
      </button>
    </div>
  )}
</div>
          </div>
        </section>
      </main>
    </div>
  );
}
