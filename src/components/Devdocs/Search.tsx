/*
Endpoint: https://cafe-content.vercel.app/api/docs/search/getall

return:

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
		"content": ""
	},
    ...
]

// How search works:

Recieve all contents from the docs repository, then filter the contents by the search query, then return the filtered contents.

for save resources, execute the entire search once then filter the results in the client side.

*/ 

import { useEffect } from "react";

import { Typography } from "@material-tailwind/react";

type Content = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    download_url: string;
    type: string;
    content: string;
};

export default function Search() {
    useEffect(() => {
        fetch("https://cafe-content.vercel.app/api/docs/search/getall",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
        }
        ).then((response) => {
            console.log(JSON.stringify(response));
        })
    }, []);

    return(
        <div>
            {/* Search bar */}
            <div className="flex flex-row items-center justify-center">
                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-lg p-2 m-2"
                    placeholder="Pesquisar"
                />
            </div>
        </div>
    )
}
