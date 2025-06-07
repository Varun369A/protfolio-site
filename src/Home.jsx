import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600">
          Welcome to My Portfolio
        </h1>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bio Card */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Bio</h2>
          <p>
            Hi! I am a passionate developer with a love for clean, responsive design. I specialize in React and Tailwind CSS.
          </p>
        </section>

        {/* Education Card */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="list-disc list-inside">
            <li>B.Sc. in Computer Science</li>
            <li>M.Sc. in Software Engineering</li>
          </ul>
        </section>

        {/* Skills Card */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p>React, Tailwind CSS, JavaScript, Node.js, Python</p>
        </section>

        {/* Contact Card */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </section>
      </main>
    </div>
  );
}
