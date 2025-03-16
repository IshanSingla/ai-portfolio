import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500"
            >
              Ishan Singla
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Backend Developer & Cloud Enthusiast specializing in Node.js, Python, and cloud technologies.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="https://github.com/IshanSingla" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/itzishansingla/" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Expertise</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    MLOps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Cloud Architecture
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Subscribe</h3>
            <p className="mt-4 text-sm text-gray-400">Get the latest updates on AI, DevOps, and cloud technologies.</p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-pink-500 rounded-md sm:mt-0 sm:ml-2 sm:w-auto hover:from-violet-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} Ishan Singla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

