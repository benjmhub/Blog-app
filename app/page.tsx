import Navbar from './components/Navbar'
import Posts from './components/Posts'


export default function Home() {
  return (
    <>
    <div className='h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center gap-2 flex-col h-auto bg-white/30 backdrop-blur-md shadow-xl rounded-3xl py-[60px] lg:px-[200px] md:px-[100px] lg:mx-0 md:mx-10 xxsm:mx-5 text-center'>
      <div className='w-[200px] h-[200px] rounded-[50%] bg-[url(/Image/blogappimg.jpg)] bg-center bg-cover border-4 broder-white'></div>
        <h1 className='font-semibold text-2xl'>Hey there 👋</h1>
        <h1 className='font-semibold text-3xl'>Step right into the captivating world of my blogs</h1>
      </div>
    </div>
    <Posts/>
    </>
  )
}
