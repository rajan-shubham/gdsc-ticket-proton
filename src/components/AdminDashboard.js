// src/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <div className="flex space-x-4">
                <Link to="/admin-technical-report">
                    <button className="bg-yellow-500 text-white rounded py-2 px-4 hover:bg-yellow-700">
                        Technical Report
                    </button>
                </Link>
                <Link to="/admin-non-technical-report">
                    <button className="bg-red-500 text-white rounded py-2 px-4 hover:bg-red-700">
                        Non-Technical Report
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
