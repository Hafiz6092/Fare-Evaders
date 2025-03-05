import React from "react";

function InfoPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600">MTA Help & Information</h1>
      <p className="mt-4 text-lg text-gray-700">
        Here you can find information about MTA services, schedules, and help resources.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
      <p className="mt-2">📞 MTA Customer Service: <strong>511</strong></p>
      <p>💻 Website: <a href="https://new.mta.info/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MTA Official Site</a></p>

      <h2 className="text-2xl font-semibold mt-6">Common Issues & Help</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        <li>How to report service issues</li>
        <li>MetroCard and OMNY payment help</li>
        <li>Accessibility services</li>
      </ul>
    </div>
  );
}

export default InfoPage;
