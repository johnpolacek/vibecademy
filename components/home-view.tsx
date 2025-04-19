import Link from "next/link"
import { ArrowRight, BookOpen, Code, Compass, Lightbulb, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomeView() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
                Learn to code with vibes
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Master <span className="text-purple-600">VibeCode</span> with VibeCademy
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get all the resources you need to learn vibecode and build amazing projects. Join our community of vibe
                developers today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Explore Resources</Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-xl"></div>
              <div className="relative rounded-lg border bg-card p-6 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="font-mono text-sm">
                    <code className="text-purple-600">
                      {`// Welcome to VibeCode
const createVibe = () => {
  const energy = "positive";
  const creativity = 100;
  
  return {
    code: "amazing",
    vibes: "immaculate"
  };
};

// Start your journey now!
const myVibe = createVibe();`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
                Why Choose VibeCademy
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Features that set us apart
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform is designed to make learning vibecode an enjoyable and effective experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Comprehensive Resources</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Access a vast library of tutorials, guides, and examples to master vibecode.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Community Support</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Join a thriving community of vibecode enthusiasts to share ideas and get help.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Interactive Learning</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Practice vibecode in real-time with our interactive coding environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-purple-950/20"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
                Learning Resources
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Resources to get you started
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our curated collection of vibecode learning materials.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <Lightbulb className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold">Beginner’s Guide</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Start your vibecode journey with our comprehensive beginner’s guide.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <Code className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold">Code Examples</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Explore real-world vibecode examples to enhance your understanding.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:underline"
                >
                  View examples
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <Compass className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold">Advanced Techniques</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Take your vibecode skills to the next level with advanced techniques.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:underline"
                >
                  Explore techniques
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What our students say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from people who have transformed their coding skills with VibeCademy.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  alt="User"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg?height=40&width=40"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <h3 className="font-bold">Alex Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                “VibeCademy transformed my approach to coding. The vibecode resources are exceptional and the community
                is incredibly supportive.”
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  alt="User"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg?height=40&width=40"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <h3 className="font-bold">Samantha Lee</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                “As a designer learning to code, VibeCademy made the process enjoyable and intuitive. The vibecode
                tutorials are perfect for visual learners.”
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  alt="User"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg?height=40&width=40"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <h3 className="font-bold">Marcus Chen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                “The advanced vibecode techniques I learned at VibeCademy helped me land my dream job. The platform
                offers resources for all skill levels.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to start your vibecode journey?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Join thousands of students who are already mastering vibecode with VibeCademy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-purple-800 border-purple-400 text-white hover:text-white hover:bg-purple-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
