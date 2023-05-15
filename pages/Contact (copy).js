import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 border rounded-md px-4 py-2 w-full focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 border rounded-md px-4 py-2 w-full focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 border rounded-md px-4 py-2 w-full focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;