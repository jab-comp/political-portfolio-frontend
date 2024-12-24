import Titles from "./title";
import Contents from "./content";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container min-h-screen p-8 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-500 opacity-50"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-700">
          Admin Dashboard
        </h1>
        <div className="rounded-lg shadow-lg bg-white p-6 text-gray-900">
          <Titles />
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
