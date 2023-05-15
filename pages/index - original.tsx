import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Typist from 'react-text-typist';

<Head>
        <title>Digital Refraction</title>
        <meta
          name="description"
          content="Digital Refraction - Small Business Technology Solutions"
        />
        <link rel="icon" href="/favicon.ico" />
</Head>

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 15000); // Show button after 30 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container mx-auto px-6 py-10 bg-black flex items-center justify-center">
      <main>
        <section className="static">
          <div className="static text-center">
            <div className="text-white text-center text-body">
              <Typist
                className={'myTypist'}
                cursorClassName={'myCursor'}
                sentences={[
"As AI takes center stage.",
"Elaborate business solutions,",
"have become remarkably budget-friendly.",
"The advent of AI has ushered in",
"affordable; intricate; business solutions.",
"With AI making its mark.",
"Sophisticated business strategies,",
"are now more cost-effective than ever.",
"With the emergence of AI,",
"advanced business approaches",
"are now incredibly cost-efficient.",
"Since AI has made its debut",
"intricate business tactics",
"can now be implemented at a fraction of the cost."
                ]}
                loop={true}
                typingSpeed={100}
                deleteSpeed={5}
              />
            </div>
            {showButton && (
              <div className="text-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
