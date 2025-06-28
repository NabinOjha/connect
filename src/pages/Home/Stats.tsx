export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">
              10,000+
            </div>
            <div className="text-gray-600">Jobs Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">5,000+</div>
            <div className="text-gray-600">Verified Contractors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
