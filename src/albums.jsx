import { use } from "react"
import Album from "./album"
export default function AllAlbum({albumPromose}){
    const albums = use(albumPromose)
    console.log(albums)
    return(
        <div className="card">
            <p>album-name: {albums.length}</p>
            {
                albums.map(album => <Album album={album}></Album>)
            }
        </div>
    )
}