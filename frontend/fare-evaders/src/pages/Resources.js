import React from "react";
import { useNavigate } from "react-router-dom"; // assuming you are using react-router

function Resources() {
  const navigate = useNavigate();

  return (
    <div className=" max-w-screen mx-auto bg-gray-950 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-300">MTA Help & Information</h1>
      <p className="mt-4 text-lg text-gray-100">
        Here you can find information about MTA services, schedules, and help resources.
      </p>

      <h2 className="text-2xl text-gray-100 font-semibold mt-6">Contact Information</h2>
      <p className="text-gray-100 mt-2">📞 MTA Customer Service: <strong>511</strong></p>
      <p className="text-gray-100">💻 Website: <a href="https://new.mta.info/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">MTA Official Site</a></p>

      <h2 className="text-2xl font-semibold text-gray-100 mt-6">Common Issues & Help</h2>
      <ul className="list-disc list-inside mt-2 text-gray-100">
      <div className="space-y-4 text-left inline-block text-gray-300">
  <div>
    <h3 className="font-semibold text-white">How to Report Service Issues</h3>
    <p>
      If you experience delays, disruptions, or unsafe conditions, you can report them directly to the MTA using their{" "}
      <a
        href="https://new.mta.info/customer-feedback"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Customer Feedback Form
      </a>.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-white">MetroCard and OMNY Payment Help</h3>
    <p>
      For issues related to fare payment, balance transfers, or lost MetroCards, visit the{" "}
      <a
        href="https://new.mta.info/fares"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Fares & Tolls section
      </a>{" "}
      of the MTA website.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-white">Accessibility Services</h3>
    <p>
      MTA provides a range of services for riders with disabilities. Learn about elevator status, paratransit, and more on the{" "}
      <a
        href="https://new.mta.info/accessibility"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Accessibility page
      </a>.
    </p>
  </div>
</div>

      </ul>

      <div className="mt-8">
        <button
          onClick={() => navigate("/alerts")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Subway Alerts
        </button>
      </div>
    </div>
  );
}

export default Resources;
