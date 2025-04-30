import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';  // Import Navbar
import Footer from './Footer';  // Import Footer

const Dashboard = () => {
  const [isLocked, setIsLocked] = useState(true);
  const roommate1 = 'ROOMMATE 1';
  const roommate2 = 'ROOMMATE 2';

  const [reminders, setReminders] = useState([
    { id: 1, message: 'Trash needs to be taken out tonight!', assignedTo: null },
    { id: 2, message: 'Please clean kitchen after cooking', assignedTo: null },
    { id: 3, message: 'Utility bills due this Friday', assignedTo: null },
    { id: 4, message: 'House meeting Sunday @ 7pm', assignedTo: null },
  ]);

  const visitors = [
    { id: 1, name: 'John Doe', time: '2-3 PM', assignedTo: roommate1 },
    { id: 2, name: 'Jane Smith', time: '5-6 PM', assignedTo: roommate2 },
  ];

  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const timeSlots = [
    { time: 'Morning', events: Array(7).fill(null) },
    { time: 'Afternoon', events: ['ROOMMATE 1 - Cooking 2-3', ...Array(6).fill(null)] },
    { time: 'Evening', events: [null, null, 'ROOMMATE 2 - Cleaning 5-6', ...Array(4).fill(null)] },
    { time: 'Night', events: [null, null, null, null, 'ROOMMATE 1 - Studying 8-10', null, null] },
  ];

  const handleLockToggle = () => setIsLocked(!isLocked);

  const assignTo = (id, roommate) => {
    setReminders(reminders.map(r =>
      r.id === id ? { ...r, assignedTo: r.assignedTo === roommate ? null : roommate } : r
    ));
  };

  const scheduleEvents = [];
  timeSlots.forEach(({ time, events }) => {
    events.forEach((evt, idx) => {
      if (evt) {
        scheduleEvents.push({ day: weekDays[idx], time, description: evt });
      }
    });
  });

  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <main className="min-h-screen bg-gradient-to-tr from-lime-100 via-white to-emerald-100 py-10 px-6 sm:px-12 font-sans">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-2">Welcome Home</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Schedule */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">
              <a href="/Schedule.jsx" className="hover:underline">Weekly Schedule</a>
            </h2>
            <ul className="space-y-3">
              {scheduleEvents.map((evt, idx) => (
                <li key={idx} className="border-l-4 border-emerald-400 bg-emerald-50 px-4 py-2">
                  <strong>{`${evt.day} - ${evt.time}`}</strong>: {evt.description}
                </li>
              ))}
            </ul>
          </section>

          {/* Door Lock */}
          <section className="bg-white text-center rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">Door Lock</h2>
            <motion.div
              animate={{ backgroundColor: isLocked ? '#ef4444' : '#4ade80' }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mb-6 rounded-full"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLockToggle}
              className="px-6 py-2 text-white font-semibold rounded bg-gray-800 hover:bg-gray-900"
            >
              {isLocked ? 'Locked' : 'Unlocked'}
            </motion.button>
          </section>
        </div>

        {/* Visitors & Reminders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visitors */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">
              <a href="/Guests.jsx" className="hover:underline">Visitors</a>
            </h2>
            <ul className="divide-y">
              {visitors.map(v => (
                <li key={v.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="text-gray-800 font-medium">{v.name}</p>
                    <p className="text-sm text-gray-500">Hosted by: {v.assignedTo}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{v.time}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reminders */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">
              <a href="/Reminders.jsx" className="hover:underline">Reminders</a>
            </h2>
            <ul className="space-y-4">
              {reminders.map(r => (
                <li key={r.id} className="p-4 border border-emerald-200 rounded-lg">
                  <p className="mb-3 text-gray-800">{r.message}</p>
                  <div className="flex gap-2">
                    {[roommate1, roommate2].map(rm => (
                      <button
                        key={rm}
                        onClick={() => assignTo(r.id, rm)}
                        className={`flex-1 py-1 text-sm font-medium rounded ${r.assignedTo === rm ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {rm}
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer /> {/* Add Footer here */}
    </>
  );
};

export default Dashboard;
