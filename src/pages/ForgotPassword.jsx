import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-8 sm:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[440px]"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 p-2 hover:bg-gray-100 rounded-lg transition-colors inline-flex"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>

          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 border-2 border-white rounded-md"></div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600 text-sm">
                  Don't worry it happens. Please enter the email address associated with your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-gray-900"
                      placeholder="alina.solvascic@gmail.com"
                      required
                    />
                    {email && (
                      <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Get OTP
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Check Your Email
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                We've sent a password reset link to <span className="font-semibold text-gray-900">{email}</span>
              </p>
              <Link
                to="/login"
                className="inline-block w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Back to Login
              </Link>
            </div>
          )}

          {!isSubmitted && (
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-gray-900 hover:underline font-semibold"
                >
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
