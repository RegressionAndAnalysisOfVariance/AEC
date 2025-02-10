import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    'Home',
    'About Us',
    'Mission',
    'Partners',
    'Numbers',
    'Members',
    'Events',
    'Contact'
  ];

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">AEC Investors Club</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-3 py-2 mx-2 text-sm font-medium ${
                  activeSection === item
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 w-full text-left ${
                  activeSection === item
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const TeamMember = ({ name, role, index }) => (
  <div className="flex flex-col items-center p-4">
    <img
      src={`/api/placeholder/${200}/${200}`}
      alt={name}
      className="w-32 h-32 rounded-full mb-4"
    />
    <h3 className="text-xl font-semibold text-white">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      {children}
    </div>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center">
    <div className="text-3xl font-bold text-blue-400 mb-2">{number}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

const EventCard = ({ title, date, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg mb-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="text-blue-400">{date}</div>
    </div>
    <button className="flex items-center text-blue-400 hover:text-blue-300">
      Learn More <ArrowRight size={16} className="ml-2" />
    </button>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const teamMembers = [
    { name: 'John Smith', role: 'CEO & Founder' },
    { name: 'Sarah Johnson', role: 'Investment Director' },
    { name: 'Michael Chen', role: 'Head of Research' },
    { name: 'Emma Williams', role: 'Partner Relations' },
    { name: 'David Miller', role: 'Financial Analyst' },
    { name: 'Lisa Anderson', role: 'Operations Manager' },
    { name: 'James Wilson', role: 'Technology Lead' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <div>
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-90"></div>
              <img
                src="/api/placeholder/1920/1080"
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Shaping the Future
                  <br />
                  of Investment
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join an exclusive community of visionary investors and industry leaders
                  driving innovation and sustainable growth.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold">
                    Join Our Network
                  </button>
                  <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 text-lg font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Section */}
            <div className="bg-gray-900 py-20">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl">
                    <div className="text-blue-400 text-4xl font-bold mb-4">$500M+</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Assets Managed</h3>
                    <p className="text-gray-400">Trusted by leading institutions and investors worldwide</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl">
                    <div className="text-blue-400 text-4xl font-bold mb-4">150+</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Elite Members</h3>
                    <p className="text-gray-400">A curated network of industry leaders and innovators</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl">
                    <div className="text-blue-400 text-4xl font-bold mb-4">45+</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Success Stories</h3>
                    <p className="text-gray-400">Track record of transformative investments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Insights */}
            <div className="bg-gray-800 py-20">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Latest Insights</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/api/placeholder/600/400"
                        alt="Market Analysis"
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">2025 Market Outlook</h3>
                    <p className="text-gray-400">Strategic insights into emerging market trends and opportunities</p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/api/placeholder/600/400"
                        alt="Tech Investment"
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tech Investment Guide</h3>
                    <p className="text-gray-400">Deep dive into the future of technology investments</p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/api/placeholder/600/400"
                        alt="Sustainable Investing"
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">ESG Innovation</h3>
                    <p className="text-gray-400">Leading the way in sustainable investment strategies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-20">
              <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
              <img
                src="/api/placeholder/1920/600"
                alt="CTA background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Investment Strategy?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join AEC Investors Club and gain access to exclusive opportunities, expert insights, and a powerful network of industry leaders.
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 text-lg font-semibold">
                  Apply for Membership
                </button>
              </div>
            </div>
          </div>
        );

      case 'About Us':
        return (
          <Section title="Our Team">
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} index={index} />
              ))}
            </div>
          </Section>
        );

      case 'Mission':
        return (
          <Section title="Our Mission">
            <div className="text-gray-300 space-y-6">
              <p>
                At AEC Investors Club, we strive to create a community of sophisticated investors
                who share knowledge, opportunities, and success. Our mission is to:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
                  <p className="text-gray-400">
                    Building bridges between investors, entrepreneurs, and opportunities.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Educate</h3>
                  <p className="text-gray-400">
                    Providing valuable insights and knowledge sharing platforms.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Grow</h3>
                  <p className="text-gray-400">
                    Fostering sustainable growth through strategic investments.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        );

      case 'Partners':
        return (
          <Section title="Our Partners">
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <div key={partner} className="bg-gray-800 p-6 rounded-lg flex items-center justify-center">
                  <img
                    src={`/api/placeholder/${160}/${80}`}
                    alt={`Partner ${partner}`}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </Section>
        );

      case 'Numbers':
        return (
          <Section title="Our Impact">
            <div className="grid md:grid-cols-4 gap-6">
              <StatCard number="$500M+" label="Assets Under Management" />
              <StatCard number="150+" label="Active Members" />
              <StatCard number="45+" label="Successfully Funded Projects" />
              <StatCard number="12" label="Years of Excellence" />
            </div>
          </Section>
        );

      case 'Members':
        return (
          <Section title="Membership Benefits">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Premium Access</h3>
                <ul className="text-gray-300 space-y-3">
                  <li>Exclusive investment opportunities</li>
                  <li>Monthly networking events</li>
                  <li>Expert advisory sessions</li>
                  <li>Detailed market reports</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">How to Join</h3>
                <p className="text-gray-300 mb-4">
                  Membership to AEC Investors Club is by invitation only. Contact us to learn more
                  about our selection criteria and application process.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Request Information
                </button>
              </div>
            </div>
          </Section>
        );

      case 'Events':
        return (
          <Section title="Upcoming Events">
            <div className="space-y-6">
              <EventCard
                title="Annual Investment Summit"
                date="March 15, 2025"
                description="Join us for our flagship event featuring keynote speakers and networking opportunities."
              />
              <EventCard
                title="Tech Startup Pitch Night"
                date="April 2, 2025"
                description="Experience live pitches from emerging tech startups and meet the founders."
              />
              <EventCard
                title="Market Outlook Webinar"
                date="April 20, 2025"
                description="Expert analysis of market trends and investment opportunities for Q2 2025."
              />
            </div>
          </Section>
        );

      case 'Contact':
        return (
          <Section title="Get in Touch">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center text-gray-300">
                  <Phone className="mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-4" />
                  <span>contact@aecinvestorsclub.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-4" />
                  <span>123 Financial District, New York, NY 10004</span>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                  ></textarea>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="pt-16">
        {renderSection()}
      </div>
    </div>
  );
};

export default App;