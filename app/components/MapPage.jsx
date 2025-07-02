'use client';

export default function MapPage() {
  return (
    <section className="min-h-screen min-w-full bg-[#f5f7fa] flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6"
      style={{
        color:'rgb(30,65,69)'
      }}
      >Find Us on Google Maps</h1>

      <div className="w-full max-w-4xl h-[500px] shadow-lg border rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.3826307689894!2d-118.2580719!3d34.0812661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7f091450003%3A0xdab48856e6e5bc7d!2s1287%20Maplewood%20Dr%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1719840000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-[#1e4145] text-white rounded hover:bg-white hover:text-[#1e4145] border border-[#1e4145]"
      >
        ← Go Back
      </button> */}
    </section>
  );
}
