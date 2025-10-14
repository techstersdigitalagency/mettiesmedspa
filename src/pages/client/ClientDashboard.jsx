import { motion } from "framer-motion";
import { Calendar, Heart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const ClientDashboard = () => {
  const { user } = useAuth();

  const healthMetrics = [
    { name: "Next Visit", value: "Oct 24", percentage: 68, color: "#0a0b16" },
    { name: "Sessions", value: "8/12", percentage: 67, color: "#0a0b16" },
    { name: "Treatments", value: "5", percentage: 81, color: "#0a0b16" },
    { name: "Progress", value: "78%", percentage: 78, color: "#0a0b16" },
  ];

  const appointments = [
    {
      date: "24-Oct-25",
      time: "14:00 - 15:00",
      type: "Facial Treatment",
      attendees: ["avatar1", "avatar2"],
    },
    {
      date: "31-Oct-25",
      time: "16:00 - 17:00",
      type: "Microdermabrasion",
      attendees: ["avatar1", "avatar2"],
    },
    {
      date: "07-Nov-25",
      time: "10:00 - 11:00",
      type: "Consultation",
      attendees: ["avatar1", "avatar2"],
    },
  ];

  const treatments = [
    {
      name: "Facial Treatment Series",
      completed: 8,
      total: 12,
      percentage: 67,
    },
    {
      name: "Microdermabrasion Package",
      completed: 3,
      total: 6,
      percentage: 50,
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Hello, {user?.name || "Client"} 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Detailed information about your treatments
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="card p-6 sm:p-8 bg-gradient-to-r from-[#0a0b16] to-[#0a0b16] text-white relative overflow-hidden rounded-3xl">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Welcome to Your
              </h2>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Treatment Dashboard
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors font-medium text-sm sm:text-base">
                  Book Appointment
                </button>
                <button className="px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors font-medium border border-white/30 text-sm sm:text-base">
                  View Progress
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-48 sm:w-64 h-full opacity-20">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect
                  x="60"
                  y="40"
                  width="80"
                  height="100"
                  fill="white"
                  rx="4"
                />
                <rect
                  x="70"
                  y="60"
                  width="60"
                  height="60"
                  fill="currentColor"
                  rx="2"
                />
                <line
                  x1="100"
                  y1="30"
                  x2="100"
                  y2="40"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="90" cy="140" r="3" fill="white" />
                <circle cx="110" cy="140" r="3" fill="white" />
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-6 bg-gradient-to-br from-[#0a0b16] to-[#0a0b16] text-white rounded-3xl relative overflow-hidden"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4">
            Treatment Status
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Active Plans</span>
              <span className="ml-auto text-sm">2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Completed</span>
              <span className="ml-auto text-sm">11</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Upcoming</span>
              <span className="ml-auto text-sm">3</span>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-40 h-40 opacity-20">
            <div className="w-full h-full rounded-full border-8 border-white"></div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {healthMetrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="card p-6 rounded-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.name}</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
              <div className="relative w-16 h-16">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#f0f0f0"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={metric.color}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${metric.percentage * 1.76} 176`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-xs font-bold"
                    style={{ color: metric.color }}
                  >
                    {metric.percentage}%
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Current Status</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="lg:col-span-2 card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Treatment Progress
            </h2>
            <button className="text-primary text-sm hover:underline">
              See All →
            </button>
          </div>
          <div className="space-y-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a0b16] to-[#0a0b16] flex items-center justify-center">
                      <Heart className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {treatment.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {treatment.completed} of {treatment.total} sessions
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {treatment.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#0a0b16] to-[#0a0b16]"
                    style={{ width: `${treatment.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="mt-6 p-4 bg-gradient-to-br from-[#0a0b16]/10 to-[#0a0b16]/10 rounded-lg border border-[#0a0b16]/20">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  Great progress!
                </span>{" "}
                You're on track with your treatment plan. Keep up the
                consistency for optimal results.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Appointment Timeline
            </h3>
            <button className="text-primary text-sm hover:underline">
              See All →
            </button>
          </div>
          <div className="space-y-6">
            {appointments.map((appointment, index) => (
              <div key={index} className="relative pl-6">
                <div
                  className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white shadow"
                  style={{
                    backgroundColor:
                      index === 0
                        ? "#10b981"
                        : index === 1
                        ? "#f50b59ff"
                        : "#0a0b16",
                  }}
                ></div>
                {index < appointments.length - 1 && (
                  <div className="absolute left-2 top-5 w-0.5 h-full bg-gray-200"></div>
                )}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">
                      {appointment.date}
                    </p>
                    <p className="text-xs text-gray-500">{appointment.type}</p>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    {appointment.time}
                  </p>
                  <div className="flex -space-x-2">
                    {appointment.attendees.map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                        style={{ backgroundColor: ["#0a0b16", "#0a0b16"][i] }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Messages
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 hover:bg-accent-main rounded-lg transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a0b16] to-[#0a0b16] flex items-center justify-center text-white font-medium">
                SA
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Sarah Anderson</p>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  Your next appointment is confirmed...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-accent-main rounded-lg transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a0b16] to-[#0a0b16] flex items-center justify-center text-white font-medium">
                MM
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Metties MedSpa</p>
                  <span className="text-xs text-gray-500">1d ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  Thank you for choosing us!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Schedule
            </h3>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-600">←</button>
              <span className="text-sm text-gray-600">October 2025</span>
              <button className="text-gray-400 hover:text-gray-600">→</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-500 mb-2"
              >
                {day.slice(0, 3)}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 1;
              const isToday = day === 24;
              const hasEvent = [24, 31].includes(day);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-xs sm:text-sm rounded-lg cursor-pointer transition-colors ${
                    day < 1
                      ? "text-gray-300"
                      : isToday
                      ? "bg-[#0a0b16] text-white font-medium"
                      : hasEvent
                      ? "bg-[#0a0b16] text-white"
                      : "text-gray-700 hover:bg-accent-main"
                  }`}
                >
                  {day > 0 ? day : ""}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="card p-6 rounded-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            Your Documents
          </h3>
          <button className="text-primary text-sm hover:underline">
            See All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Consent Form", date: "24/10/25" },
            { name: "Treatment Plan", date: "15/10/25" },
            { name: "Aftercare Guide", date: "10/10/25" },
          ].map((doc, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0a0b16]/10 to-[#0a0b16]/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{doc.name}</p>
                <p className="text-xs text-gray-500">{doc.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientDashboard;
