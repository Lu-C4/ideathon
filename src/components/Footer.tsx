export default function Footer() {
  return (
    <footer className="bg-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white">
      <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold">Ideathon 2024</h3>
            <p className="mt-2 text-sm md:text-base">Innovate. Collaborate. Win.</p>
          </div>
        </div>
        <div className="mt-6 md:mt-8 border-t border-gray-700 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base">Brought to you by Department of Artificial Intelligence and Department of Computer Science.</p>
          <p className="text-sm md:text-base mt-2">Brindavan College of Engineering</p>
        </div>
      </div>
    </footer>
  )
}

