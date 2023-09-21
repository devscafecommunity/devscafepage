import type { NextApiRequest, NextApiResponse } from 'next'

type contentboard = {
    title: string
    image: string
    link: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<contentboard[]>
) {
    // Contentboard list
    let dummyContentboard: contentboard[] = [
        {
            title: "Lorem Ipsum dolor is amet",
            image: "https://via.placeholder.com/450",
            link: "https://via.placeholder.com/450"
        },
        {
            title: "Lorem Ipsum dolor is amet",
            image: "https://via.placeholder.com/450",
            link: "https://via.placeholder.com/450"
        },
        {
            title: "Lorem Ipsum dolor is amet",
            image: "https://via.placeholder.com/450",
            link: "https://via.placeholder.com/450"
        }
    ]

    // Return dummy contentboard list
    res.status(200).json(dummyContentboard)
}