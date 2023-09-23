/*
http://localhost:3000/api/journal/get

[
	{
		"fileName": "22_09_2023.mdx",
		"localpath": "E:\\github\\docs-content-search-engine\\src\\public\\data\\journal\\22_09_2023.mdx",
		"fileContents": "test",
		"contentpath": "data/journal/22_09_2023.mdx" <- this is the endpoint for the mdx file of journal
	}
]

return the endpoints for the mdx files of journal

[
    "https:/.../data/journal/22_09_2023.mdx",
    "https:/.../data/journal/23_09_2023.mdx",
    "https:/.../data/journal/24_09_2023.mdx",
    ...
]

*/ 

import type { NextApiRequest, NextApiResponse } from 'next'

function makeendpoint(fileName: string, domain: string) {
    return `${domain}/data/journal/${fileName}`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req.query

    const response = await fetch(`http://localhost:3000/api/journal/get`)

    const data = await response.json()

    const endpoints = data.map((item: any) => makeendpoint(item.fileName, "http://localhost:3000"))

    // Fetch all mdx files from the endpoints and return the content in an string array
    const contents = await Promise.all(endpoints.map(async (endpoint: string) => {
        const response = await fetch(endpoint)
        const data = await response.text()

        return data
    }))

    res.status(200).json(contents)
}