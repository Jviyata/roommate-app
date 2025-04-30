import React, { useState } from 'react';
import { startOfMonth, endOfMonth, addDays } from 'date-fns';
import CalendarView from './CalendarView';
import EventForm from './EventForm';
import Navbar from './Navbar';
import Footer from './Footer';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const currentMonth = new Date();
  const startOfMonthDate = startOfMonth(currentMonth);
  const endOfMonthDate = endOfMonth(currentMonth);

  const daysInMonth = [];
  let currentDate = startOfMonthDate;
  while (currentDate <= endOfMonthDate) {
    daysInMonth.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventSubmit = (newEvent) => {
    setEvents([...events, newEvent]);
    setSelectedDate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-lime-100 via-white to-emerald-100 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow py-10 px-6 sm:px-12">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-2">Shared Space Scheduler</h1>
          <p className="text-lg text-gray-700">Reserve the shared space for your activities</p>
        </header>

        <CalendarView days={daysInMonth} onDayClick={handleDayClick} events={events} />

        {selectedDate && (
          <EventForm selectedDate={selectedDate} onSubmit={handleEventSubmit} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;