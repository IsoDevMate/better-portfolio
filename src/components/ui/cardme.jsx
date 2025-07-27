import React from 'react';

const CardMe = ({ title, children }) => (
    <div className="bg-[#1E1E1E] rounded-lg p-6 border border-gray-700 shadow-lg">
       <h3 className="text-xl font-bold text-emerald-300 mb-4">{title}</h3>
        {children}
    </div>
);

export default CardMe;
