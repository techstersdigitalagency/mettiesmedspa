import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockAppointments } from '../../data/mockData';

const AdminAppointments = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('list');

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments Management</h1>
          <p className="text-gray-600 mt-1">View and manage all appointments</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              view === 'list' ? 'bg-primary text-white' : 'bg-accent text-gray-600'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              view === 'calendar' ? 'bg-primary text-white' : 'bg-accent text-gray-600'
            }`}
          >
            Calendar View
          </button>
        </div>
      </motion.div>

      {view === 'list' ? (
        <div className="card p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Treatment</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date & Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Aesthetician</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Duration</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b border-gray-100 hover:bg-accent transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                          {appointment.clientName.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{appointment.clientName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900">{appointment.treatmentType}</td>
                    <td className="py-4 px-4 text-gray-600">
                      {appointment.date} at {appointment.time}
                    </td>
                    <td className="py-4 px-4 text-gray-900">{appointment.aesthetician}</td>
                    <td className="py-4 px-4 text-gray-600">{appointment.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        appointment.status === 'upcoming'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {appointment.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="text-primary hover:underline text-sm font-medium">
                          Edit
                        </button>
                        <button className="text-red-600 hover:underline text-sm font-medium">
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <button onClick={previousMonth} className="p-2 hover:bg-accent rounded-lg transition-colors">
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-accent rounded-lg transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center font-semibold text-gray-700 py-2">
                {day}
              </div>
            ))}

            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square"></div>
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const hasAppointment = mockAppointments.some(apt =>
                apt.date === `2025-10-${day.toString().padStart(2, '0')}`
              );

              return (
                <div
                  key={day}
                  className={`aspect-square border border-gray-200 rounded-lg p-2 hover:border-primary transition-colors cursor-pointer ${
                    hasAppointment ? 'bg-primary bg-opacity-10' : ''
                  }`}
                >
                  <div className="text-sm font-medium text-gray-900">{day}</div>
                  {hasAppointment && (
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full mx-auto"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAppointments;
