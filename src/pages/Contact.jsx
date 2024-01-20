import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzvwvdp");

  if (state.succeeded) {
    return <div>
      <h1 className='flex justify-center mt-32 mb-[530px] text-3xl font-Truculenta'> Congratulations ! we will get back to you immediately</h1>
    </div>
  }

  return (
    <div className="max-w-md mx-auto mt-28 mb-28 my-10 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
          <ValidationError prefix="email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md" required></textarea>
          <ValidationError prefix="message" field="message" errors={state.errors} />
        </div>
        <div className="text-center">
          <button type="submit" disabled={state.submitting} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
