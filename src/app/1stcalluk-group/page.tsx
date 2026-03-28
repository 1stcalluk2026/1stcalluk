"use client";

export default function ComingSoonGroup() {
  return (
    <main className="min-h-screen bg-[#0f1e4d] flex flex-col items-center justify-center text-white px-6 py-20">

      {/* Main Card */}
      <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 text-center animate-fade-in">

        {/* Logo or Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          1st CallUK Group
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Uniting excellence across Immigration, Financial Services, and Website Development.
        </p>

        {/* Coming Soon Notice */}
        <div className="bg-white text-[#0f1e4d] rounded-xl py-4 px-6 shadow-md inline-block font-semibold text-lg">
          🚧 Coming Soon — New Group Website Under Development
        </div>

        {/* Diagram */}
        <div className="mt-10">
          <img
            src="/1stcalluk02.jpg"
            alt="1st CallUK Group Structure"
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Small note */}
        <p className="text-gray-300 text-sm mt-8">
          All services remain fully operational.  
          <br />
          Continue using our current platforms until the new Group site launches.
        </p>

        {/* Links Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          {/* Immigration Services */}
          <a
            href="https://1stcalluk.com"
            className="bg-white text-[#0f1e4d] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            1st CallUK Immigration Services
          </a>

          {/* Financial Services */}
          <a
            href="/coming-soon"
            className="bg-white text-[#0f1e4d] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            1st CallUK Financial Services
          </a>

          {/* Website Development */}
          <a
            href="/coming-soon"
            className="bg-white text-[#0f1e4d] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            1st CallUK Website Development
          </a>
        </div>
      </div>
    </main>
  );
}
