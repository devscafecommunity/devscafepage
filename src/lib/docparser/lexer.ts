/*
Lexer for the docparser 
This will be used to tokenize the input string into a list of tokens for use in the parser
the goal of the docparser is to be able to convert a file into a usable content for generating dynamic content for the website in nextjs

Doc file -> DocParser -> JSON -> NextJS -> HTML -> Client
Whitout the need for a database or creating a new page for each file that is uploaded


Syntax:

--- Header --- <- This is a the file header here will have any meta data for the file the data will be in JSON format
haderval: "some data"
haderval2: "some data"
haderval3: 2
haderval4: true
--- End Header --- <- This is the end of the header
hader result: 
{
    "haderval": "some data",
    "haderval2": "some data"
}
basically the header is a space that every content in key value pairs will be converted to JSON and used in the page
key: value
| Key will be the name of the value in the JSON
if the key is called "title" then the object will have a title property that contains the value


The docparser will use an tag system to create the content

<#tagname>content</#tagname>
return: 

Token:
{
    tag: "tagname",
    content: "content"
}

the header is ignored by the lexer because it is just metadata for the file

Keep it simple stupid
*/
// Token
export interface Token {
    tag: string
    content: string
}

// Lexer
export class Lexer {
    input: string
    position: number
    currentChar: string | null
    lines: string[] = []
    // Tag mathing regex: <#([^>]+)>(.*?)<\/#\1>
    // Header matching regex: --- Header ---\s*(.+?)\s*--- End Header ---

    constructor(input: string) {
        this.input = input
        this.position = 0
        this.currentChar = this.input[this.position]
    }

    // Cut the header from the input
    cutHeader() {
        let headerRegex = /--- Header ---\s*(.+?)\s*--- End Header ---/s
        let header = this.input.match(headerRegex)
        if (header) {
            let headerString = header[1]
            this.input = this.input.replace(headerRegex, "")
            return headerString
        } else {
            return ""
        }
    }

    // Lex tags
    lexTags() {
        let tagRegex = /<#([^>]+)>(.*?)<\/#\1>/gs
        let tags = this.input.matchAll(tagRegex)
        let tokens: Token[] = []
        // make tags an array
        for (let tag of tags) {
            tokens.push({
                tag: tag[1],
                content: tag[2]
            })
        }
        return tokens
    }

    // Lex the header tags  (\w+):\s*("[^"]*"|\S+)
    lexHeader(headerString: string) {
        let headerRegex = /(\w+):\s*("[^"]*"|\S+)/gs
        let header = headerString.matchAll(headerRegex)
        let headerObject: any = {}
        // make tags an array
        for (let tag of header) {
            headerObject[tag[1]] = tag[2]
        }
        return headerObject
    }

    // Parse the input
    parse() {
        let headerString = this.cutHeader()
        let header = this.lexHeader(headerString)
        let tags = this.lexTags()
        return {
            header: header,
            tags: tags
        }
    }
}