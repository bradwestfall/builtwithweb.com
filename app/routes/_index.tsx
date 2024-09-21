// import { CenterContent } from '~/components/CenterContent'
import { NavLink } from '@remix-run/react'

import { Logo } from '~/components/Logo'
import { Slashes } from '~/components/Slashes'

export default function Index() {
  return (
    <>
      <div className="main-border" aria-hidden />

      <section className="hero absolute border-container z-[10]">
        <div className="text-white w-32 absolute z-20 top-7 mx-auto left-7 right-7 md:right-auto">
          <Logo fill />
        </div>

        <div className="hero-mask text-white">
          <div className="hero-mask-child">
            <nav className="primary-nav text-lg absolute top-[10px] left-[10px] right-[10px] mx-auto w-fit md:left-auto">
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

      <section id="services" className="absolute z-[9] inset-0 h-[150vh] md:h-[190vh] overflow-clip">
        <div className="services-container">
          <nav className="glimmer-border-mask absolute text-lg top-[10px] left-[10px] right-[10px] mx-auto w-fit md:left-auto">
            <div className="nav-wrap">
              <NavLink to="/" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-theme-black">
                Home
              </NavLink>
              <NavLink to="/a" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-theme-black">
                Services
              </NavLink>
              <NavLink to="/b" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-theme-black">
                Blog
              </NavLink>
              <NavLink to="/c" className="inline-block px-3 py-2 sm:px-6 sm:py-3 text-theme-black">
                Contact
              </NavLink>
            </div>
          </nav>

          <div className="services-logo text-theme-black">
            <Logo fill />
          </div>

          <div className="services-content flex flex-col justify-between max-w-[900px] overflow-y-scroll">
            {/* <div className="glimmer-text absolute top-16 lg:-top-5 left-0 max-w-[800px]"> */}
            <div className="glimmer-text leading-none mt-16">
              <span className="text-nowrap leading-none">Web Apps</span>
              <p className="pt-[0.2em] text-[0.5em] lg:text-[0.32em] leading-normal">
                Your project deserves experience and quality. My experience building web sites goes back 20 years and I
                teach React to Adobe, Microsoft, Apple, and many more.
              </p>
            </div>

            {/* <div className="absolute bottom-5 left-1 right-1 md:right-auto md:w-[calc(40vw+200px)] xl:text-xl flex gap-10 md:gap-4 max-md:flex-col"> */}
            <div className="xl:text-xl flex gap-10 md:gap-4 max-md:flex-col mb-5">
              <ServiceCard label="Design">
                Capture your audience with beautiful, accessible, amazing designs. It's the first impression that
                counts.
              </ServiceCard>
              <ServiceCard label="Build">JavaScript powers the web. Let's build...</ServiceCard>
              <ServiceCard label="Teach">
                Level up your team with expert knowledge. I've taught some of the biggest tech companies JavaScript,
                React, and CSS.
              </ServiceCard>
            </div>
          </div>
        </div>
      </section>

      <section className="next mt-[150vh] md:mt-[190vh] overflow-clip">
        <div className="sticky border-container">
          Hello...
          {/* <div className="absolute -left-[300px] w-[1050px] -rotate-[62.3deg] z-10">
            <Logo fill />
          </div> */}
        </div>
      </section>

      {/* <section className="absolute z-[1] h-full inset-0 bg-gradient-to-tr from-slate-200 to-slate-300">
        <div className="hero-logo">
          <Logo fill="black" />
        </div>
      </section> */}
    </>
  )
}

function ServiceCard({ children, label }: { children: React.ReactNode; label: string }) {
  // Left Side
  const before =
    'before:w-[0.3em] before:absolute before:bottom-0 before:left-0 before:top-[1.9em] before:bg-theme-black before:rounded'
  // Top
  const after =
    'after:h-[0.3em] after:absolute after:top-0 after:left-[6em] md:after:left-[8em] after:-right-0 after:bg-theme-black after:rounded'

  return (
    <div className="flex-1 flex relative bg-white" style={{ boxxShadow: '0 0 0px 10px white' }}>
      <div className="-translate-y-[0.4em] text-[1.4em] md:text-[2em] absolute leading-none">{label}</div>
      <div className={`border-b-[0.3em] border-r-[0.3em] border-theme-black overflow-clip ${before} ${after}`}>
        <p className="p-[1.2em] pt-[1.8em] text-[1em]">{children}</p>
      </div>
    </div>
  )
}
