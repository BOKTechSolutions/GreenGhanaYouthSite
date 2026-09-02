import heroImage from "../assets/images/hero_image.webp";

function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              🌱 Growing a Greener Future
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Planting Trees, Inspiring Minds, Building Sustainable Communities
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Green Ghana Youth Initiative empowers young people and communities
              through environmental education, tree planting campaigns, and
              climate action projects. Together, we are creating a healthier and
              more sustainable Ghana for future generations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition">
                Join Our Mission
              </button>

              <button className="px-6 py-3 border border-green-700 text-green-700 rounded-lg font-medium hover:bg-green-50 transition">
                Learn More
              </button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-2xl font-bold text-green-700">5,000+</h3>
                <p className="text-gray-500">Trees Planted</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-700">30+</h3>
                <p className="text-gray-500">Schools Reached</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-700">1,000+</h3>
                <p className="text-gray-500">Youth Volunteers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={heroImage}
              alt="Volunteers planting trees"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;