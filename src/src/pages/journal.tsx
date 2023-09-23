"use client";

import React, { useEffect, useState } from "react";

import { MDXProvider } from "@mdx-js/react";

const components = {
    h1: (props: any) => <h1 {...props} style={{ color: "red" }} />,
    p: (props: any) => <p {...props} style={{ color: "blue" }} />,
    li: (props: any) => <li {...props} style={{ color: "green" }} />,
    a: (props: any) => <a {...props} style={{ color: "red" }} />,
    img: (props: any) => <img {...props} style={{ color: "red" }} />,
    code: (props: any) => <code {...props} style={{ color: "red" }} />,
    inlineCode: (props: any) => <code {...props} style={{ color: "red" }} />,
    blockquote: (props: any) => <blockquote {...props} style={{ color: "red" }} />,
    ul: (props: any) => <ul {...props} style={{ color: "red" }} />,
    ol: (props: any) => <ol {...props} style={{ color: "red" }} />,
    table: (props: any) => <table {...props} style={{ color: "red" }} />,
    tr: (props: any) => <tr {...props} style={{ color: "red" }} />,
    td: (props: any) => <td {...props} style={{ color: "red" }} />,
    th: (props: any) => <th {...props} style={{ color: "red" }} />,
    tbody: (props: any) => <tbody {...props} style={{ color: "red" }} />,
    thead: (props: any) => <thead {...props} style={{ color: "red" }} />,
    hr: (props: any) => <hr {...props} style={{ color: "red" }} />,
    em: (props: any) => <em {...props} style={{ color: "red" }} />,
    strong: (props: any) => <strong {...props} style={{ color: "red" }} />,
    pre: (props: any) => <pre {...props} style={{ color: "red" }} />,
    kbd: (props: any) => <kbd {...props} style={{ color: "red" }} />,
    samp: (props: any) => <samp {...props} style={{ color: "red" }} />,
    var: (props: any) => <var {...props} style={{ color: "red" }} />,
    sub: (props: any) => <sub {...props} style={{ color: "red" }} />,
    sup: (props: any) => <sup {...props} style={{ color: "red" }} />,
    abbr: (props: any) => <abbr {...props} style={{ color: "red" }} />,
    address: (props: any) => <address {...props} style={{ color: "red" }} />,
    b: (props: any) => <b {...props} style={{ color: "red" }} />,
    cite: (props: any) => <cite {...props} style={{ color: "red" }} />,
    del: (props: any) => <del {...props} style={{ color: "red" }} />,
    dfn: (props: any) => <dfn {...props} style={{ color: "red" }} />,
    i: (props: any) => <i {...props} style={{ color: "red" }} />,
    ins: (props: any) => <ins {...props} style={{ color: "red" }} />,
    mark: (props: any) => <mark {...props} style={{ color: "red" }} />,
    q: (props: any) => <q {...props} style={{ color: "red" }} />,
    small: (props: any) => <small {...props} style={{ color: "red" }} />,
};


export default function Journal() {
    // Recuperar o conteúdo do arquivo
    const [content, setContent] = useState([""]);

    useEffect(() => {
        fetch("/api/journal/getjournal").then((response) => {
            response.json().then((data) => {
                setContent(data);
            });
        });
    }, []);

    return (
        <div>
            {content.map((item: any, index: number) => (
                <div key={index}>
                    <MDXProvider
                        components={components}
                    >
                        {`
                            # Hello, world!
                            ---
                            Some text
                        `}
                    </MDXProvider>
                </div>
            ))}  
        </div>
    )
}