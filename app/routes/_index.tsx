import { CenterContent } from '~/components/CenterContent'
import { Logo } from '~/components/Logo'
import { Slash, SlashClip, Slashes } from '~/components/Slashes'

export default function Index() {
  return (
    <>
      <section className="hero absolute inset-0 overflow-hidden z-10">
        <div className="hero-border"></div>

        <SlashClip className="hero-slash-background from-radial-center to-radial-edge" />

        <div className="hero-logo">
          <Logo fill="white" />
        </div>

        <div className="fixed right-20 top-20 flex justify-between ">
          <nav className="text-white text-2xl">
            <a href="/" className="inline-block px-6 py-3">
              Home
            </a>
            <a href="/" className="inline-block px-6 py-3">
              Services
            </a>
            <a href="/" className="inline-block px-6 py-3">
              Blog
            </a>
            <a href="/" className="inline-block px-6 py-3">
              Contact
            </a>
          </nav>
        </div>

        <Slashes className="hero-double-slash">
          <Slash className="bg-white" size={30} />
        </Slashes>
      </section>

      <section className="fixed inset-0">
        <div className="absolute top-0 -left-[300px] w-[1050px] -rotate-[62.3deg]">
          <Logo fill="white" />
        </div>
      </section>

      <section className="absolute inset-0 h-[210vh]">
        <div className="sticky inset-[40px] w-screen h-screen bg-black text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe atque deleniti molestiae ullam esse ratione,
          perspiciatis excepturi cum dolorum quisquam repellendus. Inventore doloremque explicabo ducimus dolores fugiat
          odio corporis debitis.
          <br />
          <br />
          <br />
        </div>
        <div className="w-screen h-screen" aria-hidden />
      </section>

      <div className="h-[10000px] bg-white" />
    </>
  )
}
