'use client'
import React, { useState, useEffect } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import { 
  FiShield, 
  FiMapPin, 
  FiFileText, 
  FiShare2, 
  FiLock, 
  FiUserCheck, 
  FiMail, 
  FiInfo 
} from "react-icons/fi";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      shortTitle: "Introduction",
      icon: <FiInfo className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            Welcome to WNCH Hub. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how WNCH ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our provider platform, mobile application, and related towing and roadside assistance services (collectively, the "Services").
          </p>
          <p>
            As a partner provider or driver using the WNCH Hub, you play a critical role in delivering towing and roadside assistance to motorists. To coordinate these services safely and efficiently, we process specific data, including real-time location telemetry.
          </p>
          <p>
            By accessing or using the WNCH platform, you consent to the collection and use of your information in accordance with this policy.
          </p>
        </div>
      )
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      shortTitle: "Information We Collect",
      icon: <FiFileText className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            To power our roadside dispatch and smart matching systems, we collect the following categories of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Account & Profile Information:</strong> Name, email address, phone number, company name, towing credentials, driver license information, and insurance documentation.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Vehicle & Equipment Data:</strong> Tow truck make, model, license plate, configuration (e.g., flatbed, wheel-lift), and capacity details.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Location Telemetry (GPS):</strong> Real-time location data of your dispatch vehicle. This is critical for matching you with nearby jobs, providing route optimization, and keeping stranded motorists updated on your ETA.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Communications & Support:</strong> Logs of messages, calls, and support tickets exchanged between you, our dispatch team, or motorists.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "how-we-use-information",
      title: "3. How We Use Your Information",
      shortTitle: "How We Use Information",
      icon: <FiMapPin className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            We process your information to maintain a reliable, high-performance towing network. Specifically, we use your data to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Smart Dispatch</h4>
              <p className="text-sm">Calculating arrival times and dispatching jobs to the closest available provider based on vehicle type and telemetry.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Automated Billing</h4>
              <p className="text-sm">Verifying completed routes, generating invoices, and facilitating payments directly to your provider account.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Route Optimization</h4>
              <p className="text-sm">Providing real-time route instructions to bypass traffic, reducing response times for stranded motorists.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Safety & Quality</h4>
              <p className="text-sm">Monitoring ETA accuracy, tracking customer feedback, and conducting incident investigations.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "information-sharing",
      title: "4. Information Sharing & Disclosure",
      shortTitle: "Data Sharing",
      icon: <FiShare2 className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            Your information is shared strictly to facilitate towing operations and ensure service reliability:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">With Motorists:</strong> When dispatched to an active roadside incident, we share your first name, vehicle details, real-time map location, and contact details with the stranded motorist so they can track your arrival.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">With Service Providers:</strong> Third-party systems such as maps/navigation APIs, billing platforms, SMS services, and server hosting providers.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">For Legal Compliance:</strong> If requested by police, highway patrols, or law enforcement during emergency incidents, or to comply with applicable regulatory frameworks.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "data-security",
      title: "5. Data Security & Storage",
      shortTitle: "Security & Storage",
      icon: <FiLock className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            We implement advanced technical and organizational measures to safeguard your credentials and location telemetry data:
          </p>
          <div className="p-5 rounded-2xl bg-[#8dc421]/10 border border-[#8dc421]/20 my-4">
            <h4 className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              <FiShield className="text-[#8dc421]" /> Location Privacy Protection
            </h4>
            <p className="text-sm">
              Real-time GPS tracking is only active while your driver status is set to &quot;Active/Online&quot; or when you are actively assigned to a dispatch job. Tracking is suspended immediately when you go &quot;Offline&quot; or log out.
            </p>
          </div>
          <p>
            We retain account documentation for as long as your provider account remains active, and for statutory periods necessary to satisfy tax, legal, and billing obligations.
          </p>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "6. Your Rights & Choices",
      shortTitle: "Your Rights",
      icon: <FiUserCheck className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            Depending on your legal jurisdiction, you hold several rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Access and Correct:</strong> You can review, update, or edit your provider credentials and driver profile at any time through the WNCH Hub settings.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Location Controls:</strong> You control when you are tracked by switching your driver status or adjusting your mobile device&apos;s OS-level location permissions.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Data Deletion:</strong> You can request the deactivation and deletion of your provider account by contacting support.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "contact-us",
      title: "7. Contact Us",
      shortTitle: "Contact Support",
      icon: <FiMail className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            If you have questions, feedback, or concerns regarding this Privacy Policy, our data processing activities, or your rights, please reach out to us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="mailto:support@wnch.com" 
              className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-[#8dc421] dark:hover:border-[#8dc421] transition-colors"
            >
              <FiMail className="w-6 h-6 text-[#8dc421]" />
              <div>
                <span className="block text-xs text-neutral-400">Email us at</span>
                <span className="font-semibold text-sm">support@wnch.com</span>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <FiShield className="w-6 h-6 text-[#8dc421]" />
              <div>
                <span className="block text-xs text-neutral-400">Security Officer</span>
                <span className="font-semibold text-sm">privacy@wnch.com</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleScrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-[1500px] px-6 sm:px-10 xl:px-20 pb-20 mt-16 md:mt-24">
      {/* Header section */}
      <div className="flex flex-col items-center justify-center py-10 mb-8 border-b border-neutral-200 dark:border-neutral-900">
        <ComponentTransition className="flex justify-center py-4">
          <SectionHeading
            title="Data Protection"
            icon={<FiShield size={24} className="text-[#8dc421]" />}
          />
        </ComponentTransition>
        <ComponentTransition delay={0.1} className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-center bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 text-transparent font-extrabold tracking-tight mt-4">
            Privacy Policy
          </h1>
          <p className="text-base md:text-xl text-neutral-500 dark:text-neutral-400 mt-4 text-center max-w-2xl leading-relaxed">
            Learn how we manage, protect, and respect your personal information and real-time location data on the WNCH Provider Hub.
          </p>
          <span className="text-xs text-neutral-400 mt-6 font-medium tracking-wide uppercase">
            Last Updated: July 17, 2026
          </span>
        </ComponentTransition>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-12 mt-12 items-start">
        {/* Left Sticky Navigation */}
        <ComponentTransition 
          delay={0.2} 
          className="w-full lg:w-[320px] lg:sticky lg:top-28 flex-shrink-0 bg-neutral-50 dark:bg-[#0c0c0c] border border-neutral-100 dark:border-neutral-900 rounded-3xl p-6 shadow-sm"
        >
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
            Document Sections
          </h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-medium text-sm ${
                  activeSection === section.id
                    ? "bg-[#8dc421]/10 text-neutral-900 dark:text-white border-l-4 border-[#8dc421] pl-3"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/50 pl-4"
                }`}
              >
                {section.icon}
                <span className="truncate">{section.shortTitle}</span>
              </button>
            ))}
          </nav>
        </ComponentTransition>

        {/* Right Policy Content */}
        <div className="w-full space-y-12">
          {sections.map((section, idx) => (
            <ComponentTransition
              key={section.id}
              delay={0.1 * idx}
              className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-100 dark:border-neutral-900 shadow-sm transition-all hover:border-neutral-200 dark:hover:border-neutral-800"
            >
              <div id={section.id} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-900">
                  <span className="p-2 rounded-xl bg-neutral-50 dark:bg-neutral-900">
                    {section.icon}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                {section.content}
              </div>
            </ComponentTransition>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
