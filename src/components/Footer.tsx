// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Ideathon 2024</h3>
            <p className="mt-2">Innovate. Collaborate. Win.</p>
          </div>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div> */}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>Brought to you by Department of Artificial Intelligence and Department of Computer Science.</p>
          <p>Brindavan College of Engineering</p>
        </div>
      </div>
    </footer>
  )
}

