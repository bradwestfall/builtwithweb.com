// import { CenterContent } from '~/components/CenterContent'
import { NavLink } from '@remix-run/react'

import { Logo } from '~/components/Logo'
import { Slashes } from '~/components/Slashes'

function PrimaryNavLinks() {
  return (
    <>
      <NavLink to="/" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
        Home
      </NavLink>
      <NavLink to="/a" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
        Services
      </NavLink>
      <NavLink to="/b" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
        Blog
      </NavLink>
      <NavLink to="/c" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-inherit">
        Contact
      </NavLink>
    </>
  )
}

export default function Index() {
  return (
    <>
      <div className="main-border" aria-hidden />

      <section className="hero mask-root viewport-container absolute z-[10]">
        <div className="text-white w-32 absolute z-20 top-7 mx-auto left-7 right-7 md:right-auto">
          <Logo fill />
        </div>

        <div className="section-mask text-white">
          <div className="section-mask-inner">
            <nav className="primary-nav">
              <PrimaryNavLinks />
            </nav>

            <div className="absolute left-4 right-4 top-52 space-y-5 text-4xl text-center md:top-32 lg:text-[4rem] lg:text-left lg:top-36 lg:left-[400px] lg:right-[5vw] 2xl:text-[6rem] 2xl:left-[600px]">
              <h1 className="leading-[0.9] font-bold">
                Let's Build
                <br />
                <span className="font-brush font-light inline-block scale-150 -translate-y-3 text-fuchsia-900">
                  Fantastic
                </span>{' '}
                Websites
              </h1>
              <p className="text-[0.6em] leading-tight">
                Professional web apps{' '}
                <span className="text-nowrap">
                  <span className="font-brush text-fuchsia-900 inline-block scale-150">&</span> beautiful sites
                </span>
              </p>
            </div>

            <div className="hero-double-slashes">
              <Slashes />
            </div>
          </div>
        </div>
      </section>

      <section className="services mask-root absolute z-[8] inset-0 h-[200vh] overflow-clip text-white">
        <div className="sticky viewport-container flex flex-col">
          <nav className="z-10 primary-nav primary-nav-glimmer">
            <PrimaryNavLinks />
          </nav>

          <div className="section-mask bg-black">
            <div className="section-mask-inner px-3 md:px-12 pb-12 flex flex-col [perspective:800px]">
              {/* <div className="services-dashboard" /> */}
              <div className="services-background" />

              <div className="services-logo text-current">
                <Logo fill />
              </div>

              <div className="flex-1 flex flex-col justify-between max-w-[900px]">
                <div className="services-glimmer-text leading-none mt-16">
                  <h1 className="text-nowrap leading-none">Building Web Apps</h1>
                  <p className="pt-[0.2em] text-lg md:text-3xl leading-normal">
                    Whether you need hands-on development or guidance, my goal is to assist your project with the
                    highest degree of quality and craftsmanship.
                  </p>
                </div>

                <div className="">
                  <div className="flex gap-3 max-md:flex-col md:gap-6">
                    <button className="button-shape border-glow fire">My Skillsets</button>
                    <button className="button-shape border-glow">Consulting & Training</button>
                  </div>
                  {/* <span className="text-xl opacity-15">
                    $ npm install{' '}
                    <Typewriter
                      list={['react', 'react-router-dom', 'vite', 'remix', 'zod', 'typescript', 'tailwind']}
                    />
                    <span className="inline-block h-[1em] w-[0.6em] border translate-y-1 [translate-x: 8em]" />
                  </span> */}
                </div>

                {/* <div className="xl:text-xl flex gap-10 md:gap-4 max-md:flex-col mb-10">
                  <ServiceCard label="Design">
                    Capture your audience with beautiful, accessible, amazing designs. It's the first impression that
                    counts.
                  </ServiceCard>
                  <ServiceCard label="Build">JavaScript powers the web. Let's build...</ServiceCard>
                  <ServiceCard label="Teach">
                    Level up your team with expert knowledge. I've taught some of the biggest tech companies JavaScript,
                    React, and CSS.
                  </ServiceCard>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next mask-root absolute z-[7] inset-0 h-[290vh] md:h-[290vh] overflow-clip">
        <div className="sticky viewport-container ">Hello</div>
      </section>
    </>
  )
}

function ServiceCard({ children, label }: { children: React.ReactNode; label: string }) {
  // Left Side
  const before =
    'before:w-[0.3em] before:absolute before:bottom-0 before:left-0 before:top-[1.9em] before:bg-current before:rounded'
  // Top
  const after =
    'after:h-[0.3em] after:absolute after:top-0 after:left-[6em] md:after:left-[8em] after:-right-0 after:bg-current after:rounded'

  return (
    <div className="flex-1 flex relative">
      <div className="-translate-y-[0.4em] text-[1.4em] md:text-[2em] absolute leading-none">{label}</div>
      <div className={`border-b-[0.3em] border-r-[0.3em] border-current overflow-clip ${before} ${after}`}>
        <p className="p-[1.2em] pt-[1.8em] text-[1em]">{children}</p>
      </div>
    </div>
  )
}
