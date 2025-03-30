import { use } from "react"
import SingleUser from './use'
export default function User({fetchUser}){
    const baboharkari = use(fetchUser)
    
    return(
        <div className="card">
            <h2>User: {baboharkari.length}</h2>
            {
                baboharkari.map(ekjon => <SingleUser ekjon={ekjon}></SingleUser>)
            }
        </div>
    )
}