export default async function getContentboard(): Promise<any> {
    /*
        type contentboard = {
            content: string
            description: string 
            image: string
            link: string
        }

        /api/updates/contentboard
    */ 

    let data = await fetch("/api/updates/contentboard")
    let contentboard = await data.json()
    return contentboard
}