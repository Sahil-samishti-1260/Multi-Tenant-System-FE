import React from 'react';

const Dashboard = () => {
  const tenantId = localStorage.getItem('tenant_id');
  const token = localStorage.getItem('token');

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="w-[600px] p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to Dashboard</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-lg text-gray-700 mb-2"><strong>Tenant ID:</strong> {tenantId}</p>
          <p className="text-sm text-gray-600 break-all"><strong>Auth Token:</strong> {token?.substring(0, 50)}...</p>
        </div>
        <button 
          onClick={() => {
            localStorage.clear();
            window.location.href = '/';
          }}
          className="w-full p-3 bg-red-600 text-white rounded-md text-base font-semibold cursor-pointer mt-6 hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
