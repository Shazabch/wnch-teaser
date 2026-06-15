import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How does the Smart Dispatching algorithm work?",
    desc: "Our Smart Dispatching engine evaluates a matrix of variables before assigning a job. It looks at the real-time GPS location of all active trucks, the type of equipment required for the tow (e.g., flatbed vs. wheel-lift), the driver's current status, and live traffic data. By analyzing these factors instantly, the system automatically suggests or directly assigns the most efficient driver for the job, drastically reducing ETA times and deadhead mileage while ensuring the right equipment arrives on the scene.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I integrate WNCH Hub with my existing Motor Clubs?",
    desc: "Absolutely. WNCH Hub features a robust, bi-directional API that seamlessly integrates with major motor clubs such as Agero, AAA, Geico, and Allstate. When a motor club issues a digital dispatch, it drops directly into your WNCH Hub queue with all the customer information, vehicle details, and GPS coordinates pre-filled. You can accept or decline the call with a single click, and the system automatically pushes status updates, ETAs, and completion timestamps back to the motor club to maintain your provider score.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How accurate is the real-time GPS fleet tracking?",
    desc: "Our GPS tracking is accurate to within a few meters and updates every few seconds via the driver's mobile app or hardwired vehicle telematics. This high-frequency polling provides smooth, live movement on your dispatch map. It also creates a historical breadcrumb trail that dispatchers and managers can review later to verify routes taken, analyze driver behavior, and resolve disputes regarding arrival times or toll charges. The tracking functions seamlessly across all supported regions.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Is my data secure and compliant with local regulations?",
    desc: "Security is our top priority. All data transmitted between the mobile app, the dispatch portal, and our servers is encrypted using bank-level AES-256 encryption. We host our infrastructure on highly secure, compliant cloud servers with continuous backups and automated failover protocols. Furthermore, our system is designed to help you remain compliant with local and state regulations regarding impound lot tracking, certified letter generation, and digital signature retention.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How does the automated billing and invoicing system function?",
    desc: "The automated billing system eliminates the need for paper invoices and manual data entry. As soon as a driver marks a job as complete on their mobile app, the system calculates the final cost based on your predefined rates, mileage, and any added services (like dollies or winching). It instantly generates a branded digital invoice that can be emailed or sent via SMS to the customer. For commercial accounts, the system automatically aggregates jobs into a single monthly statement and syncs everything directly with QuickBooks or Xero.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I customize the driver commission structures?",
    desc: "Yes, WNCH Hub supports highly complex and customizable commission structures. Whether you pay your drivers a flat rate per call, an hourly wage, a percentage of the gross revenue, or a tiered structure based on the type of tow, the system handles it automatically. It tracks the driver's earnings in real-time as jobs are completed, allowing you to generate comprehensive payroll reports at the end of the week with zero manual calculation required.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What happens if a driver loses internet connection on the road?",
    desc: "We understand that tow trucks often operate in remote areas with spotty cellular coverage. The WNCH driver mobile app features an intelligent offline mode. Drivers can still view their active job details, log notes, capture pre-existing damage photos, and collect customer signatures without an internet connection. All data is securely cached locally on the device and will automatically sync with the cloud the moment the driver drives back into an area with cellular reception.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can customers track their assigned tow truck in real-time?",
    desc: "Yes, delivering a modern customer experience is a core feature of WNCH Hub. The moment a driver is dispatched to a call, the system automatically sends an SMS text message to the stranded motorist. This message contains a secure, web-based tracking link. The customer can open the link on their smartphone to see the approaching tow truck on a live map, along with an accurate ETA. This drastically reduces anxiety for the customer and eliminates the 'where is my tow truck?' calls to your dispatch center.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How do I handle impound lots and storage fees within the system?",
    desc: "Our comprehensive impound management module tracks every vehicle from the moment it enters your lot to the moment it is released or auctioned. You can log vehicle details, snap inventory photos, and set up automated daily storage fee calculations. The system alerts you when a vehicle has been on the lot for a specific number of days, prompting you to generate legally compliant certified letters for lienholders and owners, ensuring your auction pipeline remains organized and fully compliant.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What kind of analytics and reporting capabilities are included?",
    desc: "WNCH Hub comes equipped with a powerful analytics dashboard designed to help you make data-driven decisions. You can generate reports on almost any metric: total revenue by account, average driver response times, fuel consumption vs. revenue per truck, and motor club acceptance rates. All reports can be filtered by custom date ranges and instantly exported to CSV or PDF for use in stakeholder meetings, tax preparation, or performance reviews.",
  },
];

export const ServiceItem = [
  {
    title: 'Intuitive Dispatch Dashboard',
    desc: 'Experience a powerful dashboard design that simplifies job management and provides at-a-glance operational insights.',
    icon : <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Real-time Tracking & Updates',
    desc: 'WNCH ensures seamless live tracking of providers and active jobs, promoting a cohesive workflow for your dispatch team.',
    icon : <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Instant Job Dispatching',
    desc: 'Assign towing and roadside assistance jobs with a single tap, catering to the fast-paced needs of emergency services.',
    icon : <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Extensive Provider Network',
    desc: 'Instantly connect with a large network of verified and reliable towing and recovery professionals in your area.',
    icon : <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Automated Billing & Payments',
    desc: 'Tailor WNCH to match your specific financial workflows with seamless, automated invoicing and payout management.',
    icon : <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />
  },
  {
    title: 'Actionable Analytics & Insights',
    desc: 'Gain a competitive edge with comprehensive performance tracking and revenue analytics to scale your operations.',
    icon : <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />
  },

];

