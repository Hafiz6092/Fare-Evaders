import React from "react";
import { useNavigate } from "react-router-dom"; // assuming you are using react-router
import { FaExclamationCircle, FaCreditCard, FaWheelchair } from "react-icons/fa";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoAccessibility } from "react-icons/io5";


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
            <h3 className="flex items-center gap-2 font-semibold text-white">
                <FaExclamationCircle /> How to Report Service Issues
             </h3>
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
            <h3 className="flex items-center gap-2 font-semibold text-white"> <AiOutlineIssuesClose />MetroCard and OMNY Payment Help</h3>
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
            <h3 className="flex items-center gap-2 font-semibold text-white"><IoAccessibility />Accessibility Services</h3>
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

        <div className="flex items-center justify-center mt-8">
            <button
                onClick={() => navigate("/alerts")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                View Subway Alerts
            </button>
        </div>

      {/* FAQ Heading */}
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4 text-center">Frequently Asked Questions</h2>

        {/* FAQ List */}
        <div className="text-left text-gray-300 space-y-4 max-w-2xl mx-auto">

        <details className="bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-white">
            What do I do if my MetroCard doesn’t work?
            </summary>
            <p className="mt-2">
            Visit a station agent or call 511. You can also file a claim for a damaged card on the MTA website under balance protection.
            </p>
        </details>

        <details className="bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-white">
            How do I check the balance on my MetroCard?
            </summary>
            <p className="mt-2">
            You can check it at any MetroCard vending machine or by swiping at a station turnstile. OMNY users can check balance through their account online.
            </p>
        </details>

        <details className="bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-white">
            Where can I report a broken elevator or escalator?
            </summary>
            <p className="mt-2">
            You can report accessibility issues through the{" "}
            <a href="https://new.mta.info/customer-feedback" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                MTA Feedback Form
            </a>{" "}
            or by calling 511.
            </p>
        </details>

        <details className="bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-white">
            Can I get a refund for an unused MetroCard?
            </summary>
            <p className="mt-2">
            MetroCard refunds are limited. Unused cards with balances may qualify through a refund request. Call 511 or visit a service center.
            </p>
        </details>

        <details className="bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-white">
            Is there a way to request assistance if I have a disability?
            </summary>
            <p className="mt-2">
            Yes, call 511 or use the{" "}
            <a href="https://new.mta.info/accessibility" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                Accessibility Services page
            </a>{" "}
            to learn about paratransit, elevator outages, and more.
            </p>
        </details>

        </div>
        <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="fixed bottom-6 right-6 bg-blue-600 text-white px-3 py-2 rounded-full shadow-lg hover:bg-blue-700"
                >
                ↑ Top
            </button>


    </div>
  );
}

export default Resources;
