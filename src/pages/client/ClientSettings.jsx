import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Bell, Trash2 } from "lucide-react";
import Modal from "../../components/Modal";

const ClientSettings = () => {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    appointments: true,
    promotions: false,
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account preferences</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary-main bg-opacity-10 rounded-lg flex items-center justify-center">
            <Lock size={20} color="white" className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Change Password
          </h2>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords({ ...passwords, current: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords({ ...passwords, new: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords({ ...passwords, confirm: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary">
            Update Password
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
            <Bell color="white" size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Notification Preferences
          </h2>
        </div>

        <div className="space-y-4 max-w-lg">
          {[
            {
              key: "email",
              label: "Email Notifications",
              description: "Receive updates via email",
            },
            {
              key: "sms",
              label: "SMS Notifications",
              description: "Receive text message alerts",
            },
            {
              key: "appointments",
              label: "Appointment Reminders",
              description: "Get reminded about upcoming appointments",
            },
            {
              key: "promotions",
              label: "Promotional Offers",
              description: "Receive special offers and promotions",
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
                onClick={() => handleNotificationChange(item.key)}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card p-6 border-2 border-red-200"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Trash2 size={20} className="text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Danger Zone</h2>
        </div>

        <p className="text-gray-600 mb-4">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>

        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Delete Account
        </button>
      </motion.div>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Account"
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently removed.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors flex-1">
              Confirm Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ClientSettings;
