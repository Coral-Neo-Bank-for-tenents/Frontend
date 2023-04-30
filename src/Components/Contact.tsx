import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // TODO: add logic to submit form data to backend or external service
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen bg-greenTheme flex items-center justify-center border border-gray-400 p-2">
        <div className="max-w-6xl w-full">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Love to hear from you</h1>
            <h2 className="text-xl mb-4">Get in touch!</h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-400 rounded p-2"
                  value={formData.name}
                  placeholder="name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-400 rounded p-2"
                  value={formData.email}
                  placeholder="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="border border-gray-400 rounded p-2"
                  value={formData.phone}
                  placeholder="phone number"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location">State/country</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="border border-gray-400 rounded p-2"
                  value={formData.location}
                  placeholder="Country/State"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="border border-gray-400 rounded p-2 w-full h-32"
                  value={formData.message}
                  placeholder="Enter your message"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-green-300 text-black py-2 px-4 rounded shadow"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
