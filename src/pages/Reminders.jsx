import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import Navbar from './Navbar';
import Footer from './Footer';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-amber-100 via-white to-yellow-100 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow py-10 px-6 sm:px-12">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-yellow-700 mb-2">Reminder Board</h1>
          <p className="text-lg text-gray-700">Keep track of important tasks and notes</p>
        </header>

        <ReminderForm onAddReminder={handleAddReminder} />
        <ReminderList reminders={reminders} />
      </main>

      <Footer />
    </div>
  );
};

export default Reminders;
