import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import React from "react";
import { FaMapMarkedAlt, FaFileInvoiceDollar, FaMobileAlt, FaChartLine, FaHeadset, FaShieldAlt, FaPlug, FaPenNib, FaBuilding, FaSms, FaTools, FaFileExport } from "react-icons/fa";

export default function ServicePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Capabilities
          </h1>

        </div>
      </div>
      {/* <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Towing / Recovery / Provider / Billing
        </p>
      </div> */}
      <div className="py-10 mt-20 flex gap-10 justify-center flex-row flex-wrap relative">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <FaMapMarkedAlt size={50} className="text-[#8DC421]" />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Smart Routing & GPS
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Real-time fleet tracking
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Locate the nearest driver and assign jobs instantly with GPS tracking and intelligent route optimization.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/Website Images/Services/Smart Routing & GPS.png"
            alt="Smart Routing & GPS Image"
            width={800}
            height={300}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaFileInvoiceDollar size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Automated Billing
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Say goodbye to manual invoices
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Generate invoices instantly, track commissions, and get paid faster with integrated payments.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/Website Images/Services/Automated Billing.png"
            alt="Automated Billing Image"
            width={400}
            height={250}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute  glowbg inset-0  left-0 "></div>
          <FaMobileAlt size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Driver Mobile App
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Keep your team connected
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Drivers receive jobs, navigate routes, and capture photos and signatures on-site.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/Website Images/Services/Analytics & Reporting.png"
            alt="Analytics & Reporting Image"
            width={800}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </ComponentTransition>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <FaChartLine size={50} className="text-[#8DC421]" />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Analytics & Reporting
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Data-driven decisions
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Track performance, response times, and growth opportunities with a comprehensive analytics dashboard.
          </p>
        </ComponentTransition>


        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/Website Images/Services/247 Customer Support.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaHeadset size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            24/7 Customer Support
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            We're here for you
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Available around the clock to keep your operations running smoothly.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute  glowbg inset-0  left-0 "></div>
          <FaShieldAlt size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Secure & Compliant
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Bank-level security
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Industry-leading security protocols, automated backups, and compliance standards.
          </p>
        </ComponentTransition>



        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaPenNib size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Digital Signatures
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Paperless operations
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Capture pre-tow damage photos and customer signatures from any mobile device.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute glowbg inset-0 left-0"></div>
          <FaBuilding size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Multi-Location Support
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Scale your business
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Manage multiple lots, centers, and regional fleets from one unified dashboard.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/Website Images/Services/Multi-Location Support.png"
            alt="Multi-location"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaSms size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Automated Customer SMS
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Keep customers informed
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Auto-send texts with live ETA tracking links to reduce inbound status calls.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute glowbg inset-0 left-0"></div>
          <FaTools size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Fleet Maintenance Logs
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Preventative care
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Track maintenance schedules, repair costs, and fuel usage to maximize vehicle uptime.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaFileExport size={40} className="text-[#8DC421]" />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Custom Reporting
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Export anything
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-3 dark:text-neutral-400 mt-3">
            Custom reports for taxes, payroll, and commissions with CSV/PDF exports.
          </p>
        </ComponentTransition>
      </div>
    </ComponentTransition>
  );
}
