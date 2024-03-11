import Link from "next/link";
import Portfolio from "../components/portfolio";
import Image from "next/image";
import { IconDownload } from "@tabler/icons-react";

export default function Home(): React.ReactNode {
  return (
    <main className="min-h-screen">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="container pt-12">
        {/* Profile */}
        <div className="flex flex-col items-start gap-5 sm:flex-row">
          <div className="h-24 w-24 rounded-full border-4 border-[#f8f8f8] bg-[#f8f8f8]">
            <Image
              src="/edited.jpg"
              alt=""
              width={128}
              height={128}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-black">
              MD Mehedi Hasan Hridoy
            </h2>
            <p className="mb-3 text-sm font-medium text-zinc-500">
              Frontend developer
            </p>

            <div className="flex items-center space-x-1.5 text-sm font-medium text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone h-4 w-4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <Link href="tel:01518309205" className="hover:underline">
                {" "}
                01518309205
              </Link>
            </div>
            <div className="flex items-center space-x-1.5 text-sm font-medium text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail h-4 w-4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <Link
                href="mailTo:mehedihasan.hr.324@gmail.com"
                className="hover:underline"
              >
                mehedihasan.hr.324@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 sm:flex-col sm:space-x-0 sm:space-y-1.5 sm:self-center">
            <Link
              href=""
              className="flex w-28 items-center space-x-1.5 rounded-sm border-zinc-200 bg-sky-600 px-3 py-2 text-sm text-white hover:bg-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin h-5 w-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <span>Linkedin</span>
            </Link>
            <Link
              href=""
              className="flex w-28 items-center space-x-1.5 rounded-sm border-zinc-200 bg-black/80 px-3 py-2 text-sm text-white hover:bg-black/70 [&:svg]:h-4 [&:svg]:w-4 [&:svg]:stroke-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github h-5 w-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              <span>Github</span>
            </Link>
          </div>
        </div>

        {/* info */}
        <div className="mt-10 pl-1.5">
          <h5 className="mb-1 font-bold text-black">
            {"Hi there, I'm Mehedi 👋"}
          </h5>
          <p>
            {
              "As a self-motivated and passionate web developer, I am seeking a challenging position in the field of web development where I can utilize my strong programming skills and knowledge to contribute to the success of the organization. With a focus on frontend development and expertise in React JS, Next js, and Redux, I aim to create engaging user interfaces and deliver high-quality web solutions."
            }
          </p>
        </div>

        {/* Skill */}
        <div className="mt-10 pl-1.5">
          <h5 className="mb-1 font-bold text-black">Skills</h5>
          <ul className="ml-10 mt-2 list-disc">
            <li>
              <strong>Languages: </strong>
              HTML, CSS (including Tailwind CSS, Bootstrap, Material UI, and
              Chakra UI), JavaScript, TypeScript
            </li>
            <li>
              <strong>Frameworks and Libraries: </strong>
              React JS, Next Js, Redux, Redux RTK, Laravel
            </li>
            <li>
              <strong>Backend Technologies: </strong>
              Node Js, Express JS, GraphQL, SocketIO, prisma, Laravel
            </li>
            <li>
              <strong>Databases: </strong>
              MongoDB, MySQL, Firebase
            </li>
          </ul>
        </div>

        {/* Skill */}
        <div className="mt-10 pl-1.5">
          <h5 className="mb-1 font-bold text-black">Professional experience</h5>
          <ul className="ml-10 mt-4 list-disc">
            <li>
              <strong className="block">Jr Frontend Developer </strong>
              <span className="block text-sm font-medium text-black">
                <span className="font-normal text-zinc-500">Company</span>:
                SEOPage1
              </span>
              <span className="block text-sm font-medium text-black">
                <span className="font-normal text-zinc-500">Location</span>:
                Shyamoli, Dhaka
              </span>
              <span className="block text-sm font-medium text-black">
                Mar 2023 - Jan 2024
              </span>
              <ul className="ml-10 mt-4 list-disc text-sm">
                <li>
                  Collaborated with A Laravel team at SEOPage1 to develop user
                  interfaces for an ERP system software using React JS.
                </li>

                <li>
                  Workedonvariousmodules including the Incentive page, Point
                  distribution page, Insights and Goal page and Time log report
                </li>

                <li>
                  CreatedaTaskHandling Page with functionalities such as a Time
                  Tracker, Revision, report Generation.
                </li>

                <li>
                  Actively participated in agile development processes,
                  including daily stand-up meetings, sprint planning, and
                  retrospectives.
                </li>

                <li>
                  Stayedupdatedwith industry trends and best practices in React
                  JS and frontend Development
                </li>
              </ul>
            </li>

            <li className="mt-4">
              <strong className="block">
                Frontend Developer{" "}
                <span className="text-sm font-normal text-zinc-500">
                  (remote)
                </span>
              </strong>
              <span className="block text-sm font-medium text-black">
                <span className="font-normal text-zinc-500">Company</span>:
                Myatt Academy
              </span>
              <span className="block text-sm font-medium text-black">
                <span className="font-normal text-zinc-500">Location</span>:
                Canada
              </span>
              <span className="block text-sm font-medium text-black">
                Aug 2023 - Jan 2024
              </span>
              <ul className="ml-10 mt-4 list-disc text-sm">
                <li>
                  Collaborated with A Laravel team at SEOPage1 to develop user
                  interfaces for an ERP system software using React JS.
                </li>

                <li>
                  Workedonvariousmodules including the Incentive page, Point
                  distribution page, Insights and Goal page and Time log report
                </li>

                <li>
                  CreatedaTaskHandling Page with functionalities such as a Time
                  Tracker, Revision, report Generation.
                </li>

                <li>
                  Actively participated in agile development processes,
                  including daily stand-up meetings, sprint planning, and
                  retrospectives.
                </li>

                <li>
                  Stayedupdatedwith industry trends and best practices in React
                  JS and frontend Development
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Portfolios */}
        <div className="mt-10 pl-1.5">
          <h5 className="mb-1 font-bold text-black">Portfolios</h5>
          <div className="mt-4 grid grid-cols-12 gap-5">
            <div className="relative col-span-12 sm:col-span-6">
              <Portfolio
                src="/task-management.png"
                badge="Running"
                title="Tasks Management"
                tags={["Nextjs", "Prisma", "Postgresql", "TailwindCSS"]}
                live="https://cnx-tasks-management.vercel.app"
                github="https://github.com/mehedihasanhr/cnx-tasks-management"
                desc="This is a simple task management website with some feature like: re-arrangeable and re-sizeable Dashboard widget not responsive yet!"
              />
            </div>

            <div className="relative col-span-12 sm:col-span-6">
              <Portfolio
                src="/imam.png"
                title="Agency Website"
                tags={["Nextjs", "TailwindCSS"]}
                live="https://imam-karigoor-v1.vercel.app/"
                github=""
                desc="This is a simple agency website creating for client"
              />
            </div>

            <div className="relative col-span-12 sm:col-span-6">
              <Portfolio
                src="/style-hut.png"
                title="E-commerce Website"
                tags={["React JS", "TailwindCSS"]}
                live="https://style-hut.vercel.app/"
                github="https://github.com/mehedihasanhr/healthos-test"
                desc="A simple e-commerce website"
              />
            </div>

            <div className="relative col-span-12 sm:col-span-6">
              <Portfolio
                src="/mlife.png"
                title="E-commerce landing page"
                tags={["React JS", "TailwindCSS"]}
                live="https://mlifephones-v2.vercel.app/"
                github="https://github.com/mehedihasanhr/mlifephones-v2"
                desc="A simple e-commerce website build for client."
              />
            </div>

            <div className="relative col-span-12 sm:col-span-6">
              <Portfolio
                src="/educare.png"
                title="LMS landing page"
                tags={["React JS", "TailwindCSS"]}
                live="https://educare-pi.vercel.app/"
                github="https://github.com/mehedihasanhr/educare"
                desc="A simple landing page build on ReactJS, TailwindCSS"
              />
            </div>

            <div className="relative col-span-12 sm:col-span-6">
              <Portfolio
                src="/cloud.png"
                title="File management system"
                tags={["NextJS", "TailwindCSS", "Firebase"]}
                live="https://storage-mg-app.vercel.app/"
                github="https://github.com/mehedihasanhr/storage-management-app"
                desc="A simple cloud storage management"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full items-center justify-between border-t border-zinc-200 py-4">
          <span className="text-sm text-zinc-500">
            @2024{" "}
            <Link
              href="https://www.codenixx.com"
              className="font-semibold text-zinc-700 hover:underline"
            >
              codenixx.com
            </Link>{" "}
            - All rights reserved
          </span>

          <Link
            href="/cv.pdf"
            download
            className="flex items-center gap-1.5 border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100"
          >
            <IconDownload size={18} />
            Download CV
          </Link>
        </div>
      </div>
    </main>
  );
}
