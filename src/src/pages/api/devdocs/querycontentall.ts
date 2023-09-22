// export default async function handler(req, res) {
//     const response = await fetch("https://cafe-content.vercel.app/api/docs/search/getall");
//     const data = await response.json();
//     res.status(200).json(data);
// }


import type { NextApiRequest, NextApiResponse } from 'next'

/*
[
	{
		"name": "test.txt",
		"path": "root/history/test.txt",
		"sha": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
		"size": 0,
		"url": "https://api.github.com/repos/devscafecommunity/dev-docs/contents/root/history/test.txt?ref=main",
		"html_url": "https://github.com/devscafecommunity/dev-docs/blob/main/root/history/test.txt",
		"download_url": "https://raw.githubusercontent.com/devscafecommunity/dev-docs/main/root/history/test.txt",
		"type": "file",
		"content": "",
		"last_modified": "2023-09-22T12:37:07.347Z",
		"emmiter": "Pedro Kaleb! <73436445+LyeZinho@users.noreply.github.com>",
		"revision": 9,
		"description": "This is a test file",
		"tags": [
			"test",
			"file"
		]
	}
]
*/ 
type data = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    download_url: string;
    type: string;
    content: string;
    last_modified: string;
    emmiter: string;
    revision: number;
    description: string;
    tags: string[];
    author: string;
    image: string;
};

type Data = {
    data: data[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const response = await fetch("https://cafe-content.vercel.app/api/docs/search/getall");
    const data = await response.json();
    res.status(200).json(data);
}