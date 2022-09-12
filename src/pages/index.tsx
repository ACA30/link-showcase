import type { NextPage } from "next"
import Image from "next/image"
import Button from "../components/Button"
const Home: NextPage = () => {
  return (
    <main className=" w-full overflow-x-hidden pt-16 px-8 flex flex-col items-center justify-between">
      {/* logo */}
      <Image
        src="/nate.png"
        alt="Nate Logo"
        width={128}
        height={128}
        className="rounded-full"
      />

      {/* info */}
      <div className="leading-relaxed max-w-[60ch] text-center grid gap-6 mb-8">
        <h1>Nate Broughton</h1>
      </div>

      {/* Buttons */}
      <div className="text-center grid gap-4">
        <Button
          url="https://nathaniel.pro?utm_source=linktree&utm_medium=button&utm_campaign=linktree"
          brand="web"
        >
          My Website
        </Button>
        <Button url="https://demonbolt.com" brand="demonbolt">
          My IT Company
        </Button>
        <Button url="https://github.com/ACA30" brand="github">
          GitHub
        </Button>
        <Button
          url="https://linkedin.com/in/nathaniel-broughton"
          brand="linkedin"
        >
          LinkedIn
        </Button>
        <Button url="https://twitter.com/b4technology" brand="twitter">
          Twitter
        </Button>
        <Button url="https://dev.to/ndbroughton" brand="devto">
          dev.to
        </Button>
      </div>
    </main>
  )
}

export default Home
