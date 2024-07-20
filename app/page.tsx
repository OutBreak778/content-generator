import Image from "next/image";
import Dashboard from "../app/dashboard/page"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
    <div className="mb-10 mt-12 sm:mt-12 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-1 shadow-md overflow-hidden rounded-full border hover:bg-white/50 px-5 py-2 backdrop-blur transition-all hover:border-slate-500">
        <p className="text-xl font-semibold ">Content Generator</p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Create your new <span className="text-blue-600">Content</span> with us.
      </h1>
      <p className="mt-4 max-x-prose text-slate-700 sm:text-lg">
        This Website allow you to create the new blog for your post.
      </p>
      <Link
        href="/dashboard"
        className={cn("mt-6 flex mr-3 border border-slate-500/90 p-3 rounded-xl font-medium bg-slate-900/90 text-white hover:bg-black")}
      >
        Get Started <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>

    {/** Image Ring */}

    <div>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 mb-32 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/10 ring-3 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/img1.png"
                  alt="product preview"
                  width={1364}
                  height={866}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/**Feature section */}
    <div className="mx-auto mb-28 mt-28 max-w-5xl sm:mt-52">
      <div className="mb-10 px-5 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 font-bold text-4xl text-gray-800 sm:text-5xl">
            Start creating your content
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            come to us and use our website to create your blog
          </p>
        </div>
      </div>

      {/*List of Steps */}
      <ol className="my-8 space-y-4 pt-6 md:flex md:space-x-12 pl-4 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-3 pl-3 border-l-4 border-slate-500 md:border-l-0 md:border-t-2  md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 1</span>
            <span className="text-xl font-semibold">
              Sign up for an account
            </span>
            <span className="mt-3 text-slate-700">
              Either start with free plan or with our{" "}
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-3 border-l-4 pl-3 border-slate-500 md:border-l-0 md:border-t-2  md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 2</span>
            <span className="text-xl font-semibold">
              Go to your dashboard page 
            </span>
            <span className="mt-3 text-slate-700">
              We&apos;ll proccess to create your content using google GEMINI AI.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-3 border-l-4 pl-3 border-slate-500 md:border-l-0 md:border-t-2  md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 3</span>
            <span className="text-xl font-semibold">
              Start editing blog
            </span>
            <span className="mt-3 text-slate-700">
              It&apos;s simple and easy to edit your content with help of our editor
            </span>
          </div>
        </li>
      </ol>

      <div className="mx-auto max-w-6xl px-6 mb-32 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/10 ring-3 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="/img2.png"
              alt="product preview"
              width={1419}
              height={732}
              quality={100}
              className="rounded-md bg-white p-2 sm:p-8 md:p-12 shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
