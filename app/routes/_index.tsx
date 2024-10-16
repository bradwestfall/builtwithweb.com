import { NavLink } from '@remix-run/react'
import { Brands, BrandsGroupOne, ScrollBrands } from '~/components/Brands'
import { Logo } from '~/components/Logo'
import { Slashes } from '~/components/Slashes'
import { TechLogos } from '~/components/TechLogos'
import { Typewriter } from '~/components/Typewriter'

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

            <div className="absolute left-4 right-4 top-52 space-y-5 text-4xl text-center md:top-32 lg:text-[5rem] lg:text-left lg:top-36 lg:left-[400px] lg:right-[5vw] xl:text-[6rem] 2xl:text-[6rem] 2xl:left-[600px]">
              <h1 className="leading-[0.9] font-bold">
                Let's Build
                <br />
                <span className="font-brush font-light inline-block scale-150 -translate-y-3 text-fuchsia-900">
                  Fantastic
                </span>{' '}
                Web Apps
              </h1>
              <p className="text-[0.6em] leading-tight">
                Modern{' '}
                <span className="text-nowrap">
                  <span className="font-brush text-fuchsia-900 inline-block scale-150">&</span> Beautiful
                </span>
              </p>
            </div>

            <div className="hero-double-slashes">
              <Slashes />
            </div>
          </div>
        </div>
      </section>

      <section className="section-stacks mask-root absolute z-[8] inset-0 h-[210vh] lg:h-[180vh] overflow-clip text-white">
        <div className="sticky viewport-container flex flex-col">
          <nav className="z-10 primary-nav primary-nav-glimmer text-sky-950">
            <PrimaryNavLinks />
          </nav>

          <div className="section-mask">
            <div className="section-mask-inner section-stacks-content pt-20 pb-6 px-6 xl:pt-10 xl:px-10">
              {/* .. */}
              <div className="section-stacks-heading [grid-area:section-stacks-heading]">
                <div className="leading-[0.9] tracking-wide">
                  <div className="font-superLineLine text-sky-200/60">Full Stack</div>
                  <div className="font-superLine text-sky-950">Web Apps</div>
                </div>
                <div className="[grid-area:npm] hidden lg:block text-white/40 font-mono">
                  $ npm install{' '}
                  <Typewriter list={['react', 'react-router-dom', 'vite', 'remix', 'zod', 'typescript', 'tailwind']} />
                  <span className="inline-block h-[1em] w-[0.6em] border [translate:3px_3px]" />
                </div>
              </div>

              <div className="[grid-area:section-stacks-logos] xl:pt-20">
                <p className="pt-[0.2em] text-center text-2xl !leading-[1.5em] md:text-left xl:text-3xl">
                  My name is Brad Westfall, and I've been building websites and web apps since 1999.
                </p>
                <div className="font-brush mt-8 text-4xl xl:text-[4em] leading-none [word-spacing:0.2em]">
                  <p className="text-sky-950 text-center lg:text-left">My current favorite tech</p>
                </div>
                <div className="mt-4">
                  <TechLogos />
                </div>
              </div>

              <div className="[grid-area:section-stacks-cta] xl:self-end mt-6">
                <div className="flex gap-3 max-md:flex-col md:gap-6">
                  <button className="button-shape border-glow fireXX">My Experience</button>
                  <button className="button-shape border-glow">
                    Consulting{' '}
                    <span className="text-lg text-sky-950 font-semibold" aria-label="and">
                      &
                    </span>{' '}
                    Training
                  </button>
                </div>
              </div>
              {/* .. */}
            </div>
          </div>
        </div>
      </section>

      <section className="section-clients mask-root absolute z-[7] inset-0 h-[290vh] md:h-[290vh] overflow-clip">
        <div className="sticky viewport-container overflow-hidden">
          {/* .. */}
          {/* <div className="absolute -top-4 left-8 font-brush text-[9em] ">
            <span className="font-superLine text-sky-950">React</span>
            <span className="font-superLineLine text-sky-800/50">Workshops</span>
          </div> */}

          <div className="section-clients-content">
            <div className="absolute bottom-8 right-8 left-8 top-16 ">
              <h1 className="text-[9em] text-slate-600 font-superLine">Workshops</h1>
              <h2 className="text-[4em] text-sky-400 font-brush -mt-20">Teaching react to amazing teams</h2>
              <p className="text-3xl text-sky-800 leading-relaxed">
                I've had the privilege to teach approximately 5000 developers how to make their React and JavaScript
                projects better through workshops at <a href="https://reacttraining.com">ReactTraining.com</a>
              </p>
            </div>
          </div>

          <div className="section-clients-logos text-[1.8rem] text-slate-400">
            <div className="space-y-6">
              <ScrollBrands group={1} style={{ '--speed': '-32%' }} />
              <ScrollBrands group={2} style={{ '--speed': '-30%' }} />
              <ScrollBrands group={3} style={{ '--speed': '-28%' }} />
              <ScrollBrands group={4} style={{ '--speed': '-26%' }} />
              <ScrollBrands group={5} style={{ '--speed': '-24%' }} />
              <ScrollBrands group={6} style={{ '--speed': '-22%' }} />

              <ScrollBrands group={1} style={{ '--speed': '-20%' }} />
              <ScrollBrands group={2} style={{ '--speed': '-18%' }} />
              <ScrollBrands group={3} style={{ '--speed': '-16%' }} />
              <ScrollBrands group={4} style={{ '--speed': '-14%' }} />
              <ScrollBrands group={5} style={{ '--speed': '-12%' }} />
              <ScrollBrands group={6} style={{ '--speed': '-10%' }} />
            </div>
          </div>

          {/* .. */}
        </div>
      </section>
    </>
  )
}

/* <div className="xl:text-xl flex gap-10 md:gap-4 max-md:flex-col mb-10">
  <ServiceCard label="Design">
    Capture your audience with beautiful, accessible, amazing designs. It's the first impression that
    counts.
  </ServiceCard>
  <ServiceCard label="Build">JavaScript powers the web. Let's build...</ServiceCard>
  <ServiceCard label="Teach">
    Level up your team with expert knowledge. I've taught some of the biggest tech companies JavaScript,
    React, and CSS.
  </ServiceCard>
</div> */

// function ServiceCard({ children, label }: { children: React.ReactNode; label: string }) {
//   // Left Side
//   const before =
//     'before:w-[0.3em] before:absolute before:bottom-0 before:left-0 before:top-[1.9em] before:bg-current before:rounded'
//   // Top
//   const after =
//     'after:h-[0.3em] after:absolute after:top-0 after:left-[6em] md:after:left-[8em] after:-right-0 after:bg-current after:rounded'

//   return (
//     <div className="flex-1 flex relative">
//       <div className="-translate-y-[0.4em] text-[1.4em] md:text-[2em] absolute leading-none">{label}</div>
//       <div className={`border-b-[0.3em] border-r-[0.3em] border-current overflow-clip ${before} ${after}`}>
//         <p className="p-[1.2em] pt-[1.8em] text-[1em]">{children}</p>
//       </div>
//     </div>
//   )
// }
