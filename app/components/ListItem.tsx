import React from 'react'
import Link from "next/link"
// import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {

    const { id, title , date} = post
    // const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-1">
            <Link className="font-semibold md:text-2xl xxsm:text-xl" href={`/posts/${id}`}>{title}</Link>
            <h5 className='mt-1 font-semibold text-xl'>Published on: {date}</h5>
            <br />
            {/* <p className="text-sm mt-1">{formattedDate}</p> */}
        </li>
    )
}
