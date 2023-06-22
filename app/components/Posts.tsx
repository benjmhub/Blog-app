import React from 'react'
import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"


export default function Posts() {

    const posts = getSortedPostsData()

  return (
    <>
    <div className='h-screen'>
    <section className="mt-6 lg:mx-auto md:mx-10 xxsm:mx-8 lg:w-[1000px]">
            <h2 className="text-4xl font-bold">Blog</h2>
            <ul className='flex md:flex-row xxsm:flex-col gap-5 mt-5 flex-wrap'>
                {posts.map((post) => {
                  return(
                    <>
                    <div className='bg-white/30 backdrop-blur-md shadow-xl rounded-3xl p-5 h-auto w-[300px]'>
                      <h1 className='font-semibold text-xl'>{post.id}</h1>
                    <ListItem key={post.id} post={post} />
                    </div>
                    </>
                  )
})}
            </ul>
    </section>
    </div>
    </>
  )
}
