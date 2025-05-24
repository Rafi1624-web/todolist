import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCard from './components/itemcard';
import banner from './assets/banner.png';
function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
        <div
          className="text-center mb-16 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner})` }}

        >
          <section className="bg-black/50 px-4 py-16 text-white">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Crafting Identity, One Detail at a Time
            </h1>
            <p className="text-xl mb-4">
              Where Corporate Stationery Meets Brand Storytelling
            </p>
            <p className="text-lg mb-6">📦 Thoughtfully Designed. ✍️ Uniquely Yours.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-lime-700 text-white px-6 py-2 rounded hover:bg-lime-800">
                Let’s Build Your Brand
              </button>
              <button className="bg-white text-lime-700 border border-lime-700 px-6 py-2 rounded hover:bg-lime-100">
                Explore Our Creations
              </button>
            </div>
          </section>
        </div>
      <main className="pt-28 px-6 md:px-52 pb-16 bg-[#f0ffec] text-lime-900">
        

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About PaperPallet</h2>
          <p className="text-lg mb-3">We’re not just a stationery brand.</p>
          <p className="text-lg mb-3">
            We are identity architects – helping brands leave an impression that sticks.
          </p>
          <p className="text-lg">
            At PaperPallet, we specialize in custom corporate stationery and gift solutions
            that communicate your values, amplify your voice, and bring your brand to life
            across desks, conference rooms, and client moments.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Brand Identity Through Stationery</h3>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>Branded Notebooks & Journals</li>
            <li>Signature Pens & Writing Kits</li>
            <li>Letterheads, Folders & Presentation Files</li>
            <li>Minimalist Calendars & Desk Organizers</li>
            <li>Custom Print Collaterals (Thank You Cards, Tags, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Memorable Corporate Gifting</h3>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>Employee Welcome Kits</li>
            <li>Client Appreciation Sets</li>
            <li>Seasonal Gifting (Eid, Boishakh, Year-End, etc.)</li>
            <li>Tech & Utility Gifts with Brand Personalization</li>
            <li>Premium Packaging with Flair</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Custom Brand Boxes</h3>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>Product Launch Boxes</li>
            <li>PR & Influencer Kits</li>
            <li>Training or Conference Packs</li>
            <li>HR & Onboarding Solutions</li>
          </ul>
        </section>

        {/* Why PaperPallet */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Why PaperPallet</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><strong>✨ Brand-First Thinking:</strong> Every piece we design is aligned with your brand's tone, color, and purpose.</li>
            <li><strong>🎨 Design-Led Approach:</strong> We collaborate closely with your team or creative agency to ensure coherence and style.</li>
            <li><strong>📦 End-to-End Execution:</strong> From creative concept to doorstep delivery – we handle everything.</li>
            <li><strong>🤝 Trusted by Corporate Brands:</strong> Our products speak in boardrooms, client meetings, and welcome desks.</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            <li>Share Your Brand Vision</li>
            <li>Co-Create with Us</li>
            <li>Production & Personalization</li>
            <li>Deliver Branded Experiences</li>
          </ol>
          <button className="mt-4 bg-lime-700 text-white px-6 py-2 rounded hover:bg-lime-800">
            Request a Free Consultation
          </button>
        </section>

        {/* Portfolio */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8 justify-center items-center">Portfolio / Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <ImageCard
            imageUrl="src/assets/image1.jpeg"
            title="Real Estate Welcome Kit"
            link=""
          />
          <ImageCard
            imageUrl="src/assets/image1.jpeg"
            title="Tech Startup Branding Set"
            link=""
          />
          <ImageCard
            imageUrl="src/assets/image1.jpeg"
            title="NGO Notebook Campaign"
            link=""
          />
          <ImageCard
            imageUrl="src/assets/image1.jpeg"
            title="Law Firm Premium Stationery"
            link=""
          />
          <ImageCard
            imageUrl="src/assets/image1.jpeg"
            title="Eid Corporate Gifting Series"
            link=""
          />
          </div>
          <button className="mt-10 bg-white text-lime-700 border border-lime-700 px-6 py-2 rounded hover:bg-lime-100">
            View Full Portfolio
          </button>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Beautiful</h2>
          <p className="text-lg mb-6">
            Tell us what your brand stands for – we’ll translate that into tangible,
            useful, and elegant products that make people remember you.
          </p>
          <button className="bg-lime-700 text-white px-6 py-2 rounded hover:bg-lime-800">
            Start a Custom Project
          </button>
        </section>

        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p><strong>📍 Studio Address:</strong> [Insert Location]</p>
          <p><strong>📞 Phone:</strong> +8801XXXXXXXXX</p>
          <p><strong>📧 Email:</strong> hello@paperpallet.com.bd</p>
          <p><strong>🌐 Socials:</strong> Facebook | Instagram | LinkedIn</p>
          <p><strong>🕒 Business Hours:</strong> Sunday – Thursday | 9:00 AM – 6:00 PM</p>
        </section>


      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
