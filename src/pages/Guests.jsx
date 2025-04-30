import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestProfile from './GuestProfile';
import Navbar from './Navbar';  // Import the Navbar component
import Footer from './Footer';  // Import the Footer component

const Guests = () => {
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'John Doe', time: '2-3 PM', assignedTo: 'ROOMMATE 1' },
    { id: 2, name: 'Jane Smith', time: '5-6 PM', assignedTo: 'ROOMMATE 2' },
  ]);

  const addGuest = (guest) => {
    const newGuest = { ...guest, id: visitors.length + 1 };
    setVisitors([...visitors, newGuest]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-lime-100 via-white to-emerald-100 py-10 px-6 sm:px-12 font-sans">
      <Navbar />  {/* Include the Navbar component */}
      
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-700">Guests</h1>
      </header>

      <div className="max-w-3xl mx-auto space-y-10">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-emerald-600 mb-4">Add a Guest</h2>
          <GuestForm addGuest={addGuest} />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">Visitor List</h2>
          {visitors.map((guest) => (
            <GuestProfile key={guest.id} guest={guest} />
          ))}
        </section>
      </div>

      <Footer />  {/* Include the Footer component */}
    </main>
  );
};

export default Guests;
