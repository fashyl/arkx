import { Link } from 'react-router-dom'

export function HomePage() {
    return (
      <div className="w-full h-screen bg-white">
        <div className="h-full w-full bg-white text-black flex flex-col items-center justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Auth React App.</h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Welcome, please <Link to='/signup' className='relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>sign up</Link>. Or <Link to='/login' className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">login</Link> if you already have an account.</p>
        </div>
      </div>
    );
  }