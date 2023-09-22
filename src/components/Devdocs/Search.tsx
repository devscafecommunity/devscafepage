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

import { useEffect, useState } from "react";

import Image from "next/image";

import { Typography, Button } from "@material-tailwind/react";

import { BsBook, BsFillFileEarmarkFill,
    BsFolder2Open, BsFillArrowDownCircleFill,
    BsFillClockFill, BsInfoCircle, BsFillEyeFill,
    BsFillTagFill, BsPenFill
} from "react-icons/bs";

// FaBookReader
import { FaBookReader } from "react-icons/fa";

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
    
    last_modified: string;
    emmiter: string;
    revision: number;
    description: string;
    tags: string[];
    author: string;
    image: string;
};


function formatDate(date: string) {
    // 2023-09-22T12:37:07.347Z
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    const hour = date.substring(11, 13);
    const minute = date.substring(14, 16);
    const second = date.substring(17, 19);

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

function formatTags(tags: string[]) {
    let tagsString = "";

    for (let i = 0; i < tags.length; i++) {
        tagsString += tags[i];

        if (i < tags.length - 1) {
            tagsString += ", ";
        }
    }

    return tagsString;
}

export default function Search() {
    const [contents, setContents] = useState<Content[]>([]);
    const [search, setSearch] = useState("");
    const [filteredContents, setFilteredContents] = useState<Content[]>([]);

    useEffect(() => {
        fetch("/api/devdocs/querycontentall") // Return array of contents
            .then((response) => response.json())
            .then((data) => {
                setContents(data);
            });
    }, []);

    // Filter contents by search query use regex to ignore case sensitive, match most similar results and ignore accents or special characters
    useEffect(() => {
        const regex = new RegExp(search, "i");
        const filtered = contents.filter((content) => regex.test(content.name));
        setFilteredContents(filtered);
    }, [search, contents]);

    function removeFileExtension(filename: string) {
        return filename.split(".").slice(0, -1).join(".");
    }

    function getExtension(filename: string) {
        return filename.split(".").pop();
    }

    return(
        <div className="w-full">
            {/* Search bar */}
            <div className="flex flex-row items-center justify-center w-full">
                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-lg p-2 m-2 w-full"
                    placeholder="Pesquisar"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Search results */}
            <div className="pt-4">
                {filteredContents.map((content, index) => (
                    <div key={index} className="flex flex-row">
                        <div className="bg-white w-full my-4 p-4 rounded-2xl">
                            <div className="flex flex-row">
                                <BsBook className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {removeFileExtension(content.name)}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsInfoCircle className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {content.description}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsFillFileEarmarkFill className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {getExtension(content.name)}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsFillClockFill className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {formatDate(content.last_modified)}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsFolder2Open className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {content.emmiter}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsFillEyeFill className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {content.revision}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsFillTagFill className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {formatTags(content.tags)}
                                </Typography>
                            </div>
                            <div className="flex flex-row">
                                <BsPenFill className="
                                    text-2xl ml-2 mr-4
                                " />
                                <Typography color="gray" className="">
                                    {content.author}
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 m-2 bg-white rounded-2xl m-4 p-4">
                            <Image
                                src={content.image}
                                alt={content.name}
                                width={450}
                                height={450}
                                className="rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 m-2 bg-white rounded-2xl m-4 p-4 gap-2">
                            <Button
                                className=""
                                onClick={() => {
                                    window.open(content.html_url, "_blank");
                                }}
                            >
                                <BsFolder2Open className="mr-2" />
                            </Button>
                            <Button
                                className=""
                                onClick={() => {
                                    window.open(content.download_url, "_blank");
                                }}
                            >
                                <FaBookReader className="mr-2" />
                            </Button>
                            <Button
                                className=""
                                onClick={() => {
                                    window.open(content.download_url, "_blank");
                                }}
                            >
                                <BsFillArrowDownCircleFill className="mr-2" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
