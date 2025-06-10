import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import {
  LogOut,
  UserPlus,
  LogIn,
  Home,
  HomeIcon,
  GalleryHorizontal,
  AlarmClock,
  Blocks,
  MessageCircleHeart,
  BellRing,
  FileWarning,
} from "lucide-react";
import { logout } from "../api/auth";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const clearUser = useAuthStore((s) => s.clearUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    clearUser();
    navigate("/login");
  };
g
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-green-50 shadow-md sticky top-0 z-50 rounded-b-md border border-green-100">
      <div className="flex items-center space-x-3 text-green-700 font-extrabold text-xl select-none">
        <Home className="w-6 h-6" />
        <Link to="/" className="hover:text-green-900 transition-colors duration-300">
          Citizen Care Department 
        </Link>
      </div>

      <div className="flex items-center space-x-6 text-sm font-semibold text-green-800">
        {!user ? (
          <>
            <Link
              to="/landing"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-teal-100 hover:text-teal-900 transition-colors duration-200"
            >
              <Blocks className="w-5 h-5" />
              <span>All Features</span>
            </Link>

            <Link
              to="/feedback"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-fuchsia-100 hover:text-fuchsia-900 transition-colors duration-200"
            >
              <MessageCircleHeart className="w-5 h-5" />
              <span>Feedback</span>
            </Link>

            <Link
              to="/remainder"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-red-100 hover:text-red-900 transition-colors duration-200"
            >
              <BellRing className="w-5 h-5" />
              <span>Reminder</span>
            </Link>

            <Link
              to="/submit-complain"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-yellow-100 hover:text-yellow-900 transition-colors duration-200"
            >
              <FileWarning className="w-5 h-5" />
              <span>Complain</span>
            </Link>

            <Link
              to="/signup"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-green-100 hover:text-green-900 transition-colors duration-200"
            >
              <UserPlus className="w-5 h-5" />
              <span>Signup</span>
            </Link>

            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-purple-100 hover:text-purple-900 transition-colors duration-200"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/submit-complain"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-yellow-100 hover:text-yellow-900 transition-colors duration-200"
            >
              <FileWarning className="w-5 h-5" />
              <span>Complain</span>
            </Link>

            <Link
              to="/all-complains"
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-pink-100 hover:text-pink-900 transition-colors duration-200"
            >
              <AlarmClock className="w-5 h-5" />
              <span>All Complains</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-white shadow-sm hover:bg-red-100 hover:text-red-600 transition-colors duration-200 focus:outline-none"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
