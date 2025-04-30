import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
  const [room, setRoom] = useState('Room A');
  const [aptNumber, setAptNumber] = useState('202');
  const [aptComplex, setAptComplex] = useState('Limewood Apartments');
  const [rating, setRating] = useState(4); // Assuming a 5-star rating
  const [name, setName] = useState('Alex Johnson'); // Real name not related to Viyata
  const [roommateAlias, setRoommateAlias] = useState('Roommate A');

  return (
    <div>
      <Navbar /> {/* Added Navbar */}

      <main className="min-h-screen bg-gradient-to-tr from-lime-100 via-white to-emerald-100 py-10 px-6 sm:px-12 font-sans">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-2">Your Profile</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Profile Info */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">Personal Info</h2>
            <div className="space-y-6">
              {/* Name */}
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">Name:</span>
                <span className="text-lg text-gray-600">{name}</span>
              </div>

              {/* Room */}
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">Room:</span>
                <span className="text-lg text-gray-600">{room}</span>
              </div>

              {/* Apartment Number */}
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">Apartment Number:</span>
                <span className="text-lg text-gray-600">{aptNumber}</span>
              </div>

              {/* Apartment Complex */}
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">Apartment Complex:</span>
                <span className="text-lg text-gray-600">{aptComplex}</span>
              </div>

              {/* Roommate Alias */}
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">Roommate Alias:</span>
                <span className="text-lg text-gray-600">{roommateAlias}</span>
              </div>

              {/* Rating */}
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-800">Rating:</span>
                <motion.div
                  className="flex items-center"
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* Additional Info Section */}
        <section className="bg-white rounded-xl shadow-lg p-6 mt-10">
          <h2 className="text-xl font-semibold text-emerald-600 mb-4">Other Relevant Details</h2>
          <div className="space-y-6">
            {/* Emergency Contact */}
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-800">Emergency Contact:</span>
              <span className="text-lg text-gray-600">John Doe - (555) 123-4567</span>
            </div>

            {/* Favorite Things */}
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-800">Favorite Things:</span>
              <span className="text-lg text-gray-600">Coffee, Hiking, Reading</span>
            </div>

            {/* Hobbies */}
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-800">Hobbies:</span>
              <span className="text-lg text-gray-600">Photography, Traveling, Painting</span>
            </div>

            {/* Social Media */}
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-800">Social Media:</span>
              <span className="text-lg text-gray-600">@alexjohnson</span>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Added Footer */}
    </div>
  );
};

export default Profile;
