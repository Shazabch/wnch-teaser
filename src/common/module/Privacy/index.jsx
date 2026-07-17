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
  FiInfo,
  FiTrash2
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
            Welcome to WNCH. We are committed to protecting your personal data and your privacy. This Privacy Policy outlines how WNCH (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards your information across both of our applications:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">WNCH Customer App:</strong> Used by motorists seeking roadside assistance, towing, and vehicle support.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">WNCH Provider App:</strong> Used by towing operators, recovery professionals, and dispatchers to receive and complete assistance jobs.
            </li>
          </ul>
          <p>
            By using either the WNCH Customer App or the WNCH Provider App (collectively, the &quot;Apps&quot;) and the WNCH platform, you consent to the collection and use of your information in accordance with this policy.
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
        <div className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 border-l-4 border-[#8dc421] pl-3">
              For WNCH Customer App Users
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Profile Details:</strong> Name, phone number, email address, and billing details.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Vehicle Information:</strong> Make, model, year, color, license plate, and issue description (e.g. flat tire, dead battery, collision).
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Location Telemetry:</strong> GPS coordinates of your stranded vehicle to direct rescue drivers, and your requested drop-off destination.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 border-l-4 border-[#8dc421] pl-3">
              For WNCH Provider App Users
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Provider Credentials:</strong> Legal name, company details, professional towing licenses, background verification check results, and insurance policies.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Vehicle Specs:</strong> Tow truck specifications (e.g., flatbed capacity, flatbed or hook-and-chain configuration), license plates, and dispatch status.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Real-Time GPS Tracking:</strong> Continuous location tracking when you are set to &quot;Online&quot; or performing an active dispatch. This is required for calculating exact ETAs and routing.
              </li>
            </ul>
          </div>
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
            We process information to maintain the speed and reliability of our roadside dispatch network:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Rescue Matching</h4>
              <p className="text-sm">Matching stranded customers with the closest towing vehicle capable of handling their specific vehicle type.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Automated Billing & Payouts</h4>
              <p className="text-sm">Calculating fair pricing, processing customer payments, and issuing provider payouts instantly upon job completion.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">ETA Tracking & Navigation</h4>
              <p className="text-sm">Providing real-time arrival maps to customers and turn-by-turn route optimizations to dispatch operators.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Quality & Security</h4>
              <p className="text-sm">Monitoring service completion records, handling support queries, and reviewing feedback ratings.</p>
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
            Information sharing is restricted to what is necessary to perform roadside assistance:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Customer & Provider Coordination:</strong> While a rescue job is active, we display the provider&apos;s real-time map location, name, and truck details on the WNCH Customer App. Conversely, the stranded customer&apos;s coordinates and contact information are shared with the provider.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">With Service Vendors:</strong> Cloud hosts, map/navigation API providers, payment processors, and transactional SMS systems.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Legal & Safety Actions:</strong> Compliance with official law enforcement audits, road emergency regulations, or during highway incident investigations.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "account-deletion",
      title: "5. Account Deletion & Data Retention",
      shortTitle: "Account Deletion",
      icon: <FiTrash2 className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-5 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            We believe in giving you complete control over your data. You can request to delete your account and associated records at any time using either of the following methods:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8dc421]/20 text-[#8dc421] text-xs">1</span>
                Via the Apps
              </h4>
              <p className="text-sm mb-3">
                You can delete your account directly from your profile settings within either application:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-1 text-neutral-500 dark:text-neutral-400">
                <li><strong className="dark:text-neutral-300">WNCH Customer App:</strong> Open app &rarr; go to <strong className="dark:text-neutral-300">Profile Settings</strong> &rarr; tap <strong className="text-red-500">Delete Profile</strong>.</li>
                <li><strong className="dark:text-neutral-300">WNCH Provider App:</strong> Open app &rarr; go to <strong className="dark:text-neutral-300">Driver Account Settings</strong> &rarr; tap <strong className="text-red-500">Delete Account</strong>.</li>
              </ul>
            </div>
            
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8dc421]/20 text-[#8dc421] text-xs">2</span>
                Via Email Request
              </h4>
              <p className="text-sm mb-3">
                Send an email request from your registered WNCH email address to:
              </p>
              <a 
                href="mailto:delete@wnch.com?subject=WNCH Account Deletion Request" 
                className="inline-block text-[#8dc421] font-semibold text-sm hover:underline mb-2"
              >
                delete@wnch.com
              </a>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Or email our general helpdesk at <strong className="dark:text-neutral-300">support@wnch.com</strong>. Please use the subject line &quot;WNCH Account Deletion Request&quot; for expedited processing.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 mt-4">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-sm">
              What happens when you request deletion?
            </h4>
            <ul className="list-disc pl-5 text-sm space-y-2 text-neutral-500 dark:text-neutral-400">
              <li>Your profile is deactivated immediately and you are logged out of the Apps.</li>
              <li>Your personal identifiers, saved vehicles, and GPS logs are permanently deleted or anonymized within <strong className="text-neutral-800 dark:text-neutral-200">30 days</strong>.</li>
              <li>We only retain records necessary to satisfy compliance, tax, or legal/billing obligations (e.g. transaction history, accounting logs) as required by law.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "6. Data Security & Storage",
      shortTitle: "Security & Storage",
      icon: <FiLock className="w-5 h-5 text-[#8dc421]" />,
      content: (
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            We implement administrative, technical, and physical security measures to safeguard your credentials and location telemetry data:
          </p>
          <div className="p-5 rounded-2xl bg-[#8dc421]/10 border border-[#8dc421]/20 my-4">
            <h4 className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              <FiShield className="text-[#8dc421]" /> Location Privacy Protection
            </h4>
            <p className="text-sm">
              Real-time GPS tracking is only active while your status is set to &quot;Active/Online&quot; or when you are actively assigned to a dispatch job. Tracking is suspended immediately when you go &quot;Offline&quot; or log out.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "7. Your Rights & Choices",
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
      title: "8. Contact Us",
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
            Covers both WNCH Customer App and WNCH Provider App. Learn how we manage, protect, and delete your accounts and data.
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
