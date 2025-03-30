export default function Album({album}){
        const {title,id} = album
    return(
        <div className="card">
            <p>user_id: {id}</p>
            <h4>title: {title}</h4>
        </div>
    )
}