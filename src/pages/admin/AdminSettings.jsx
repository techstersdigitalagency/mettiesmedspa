import { useState } from "react";
import { motion } from "framer-motion";
import { User, Clock, Mail } from "lucide-react";

const AdminSettings = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@mettiesmedspa.com",
    phone: "(555) 999-0000",
  });

  const [hours, setHours] = useState({
    monday: { open: "09:00", close: "18:00" },
    tuesday: { open: "09:00", close: "18:00" },
    wednesday: { open: "09:00", close: "18:00" },
    thursday: { open: "09:00", close: "18:00" },
    friday: { open: "09:00", close: "18:00" },
    saturday: { open: "10:00", close: "16:00" },
    sunday: { open: "Closed", close: "Closed" },
  });

  const [notifications, setNotifications] = useState({
    newAppointment: true,
    cancellation: true,
    dailyReport: true,
    weeklyReport: false,
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
  };

  const handleHoursSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage system configuration and preferences
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-main bg-opacity-10 rounded-lg flex items-center justify-center">
            <User color="white" size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Admin Profile</h2>
        </div>

        <form onSubmit={handleProfileSubmit} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Save Profile
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-main bg-opacity-10 rounded-lg flex items-center justify-center">
            <Clock color="white" size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Working Hours</h2>
        </div>

        <form onSubmit={handleHoursSubmit} className="space-y-4 max-w-2xl">
          {Object.entries(hours).map(([day, times]) => (
            <div key={day} className="grid grid-cols-3 gap-4 items-center">
              <div className="font-medium text-gray-900 capitalize">{day}</div>
              {times.open !== "Closed" ? (
                <>
                  <input
                    type="time"
                    value={times.open}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        [day]: { ...times, open: e.target.value },
                      })
                    }
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="time"
                    value={times.close}
                    onChange={(e) =>
                      setHours({
                        ...hours,
                        [day]: { ...times, close: e.target.value },
                      })
                    }
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </>
              ) : (
                <div className="col-span-2 text-gray-500">Closed</div>
              )}
            </div>
          ))}

          <button type="submit" className="btn-primary">
            Save Hours
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-main bg-opacity-10 rounded-lg flex items-center justify-center">
            <Mail color="white" size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Email Notifications
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl">
          {[
            {
              key: "newAppointment",
              label: "New Appointment Booked",
              description: "Get notified when a client books a new appointment",
            },
            {
              key: "cancellation",
              label: "Appointment Cancellation",
              description: "Get notified when an appointment is cancelled",
            },
            {
              key: "dailyReport",
              label: "Daily Summary Report",
              description: "Receive a daily summary of activities",
            },
            {
              key: "weeklyReport",
              label: "Weekly Performance Report",
              description: "Receive weekly analytics and insights",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div>
                <p className="font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    [item.key]: !notifications[item.key],
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[item.key] ? "bg-primary-main" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[item.key] ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminSettings;
