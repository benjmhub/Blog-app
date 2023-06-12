import React from 'react'
import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"


export default function Posts() {

    const posts = getSortedPostsData()

  return (
    <>
    <div className='bg-gradient-to-r from-secondary to-primary h-screen'>
    <section className="mt-6 mx-auto w-[1000px]">
            <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            <ul className='flex gap-5 mt-5'>
                {posts.map((post) => {
                  return(
                    <>
                    <div className='bg-white/30 backdrop-blur-md shadow-xl rounded-3xl p-5 h-[200px] w-[300px]'>
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
