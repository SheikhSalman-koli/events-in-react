export default function SingleUser({ekjon}){
    const {name,phone}= ekjon
    return(
        <div className="card">
            <h3>name: {name}</h3>
            <p>phone: {phone}</p>
        </div>
    )
}