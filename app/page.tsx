import Navbar from './components/Navbar'
import Posts from './components/Posts'


export default function Home() {
  return (
    <>
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-secondary to-primary'>
      <div className='flex items-center justify-center gap-2 flex-col w-auto h-auto bg-white/30 backdrop-blur-md shadow-xl rounded-3xl py-[100px] px-[200px]'>
      <div className='w-[200px] h-[200px] rounded-[50%] bg-[url(/Image/blogappimg.jpg)] bg-center bg-cover border-4 broder-white'></div>
        <h1 className='font-semibold text-2xl'>Hey there 👋</h1>
        <h1 className='font-semibold text-3xl'>Step right into the captivating world of my blogs</h1>
      </div>
    </div>
    <Posts/>
    </>
  )
}
