export default function Friend({friend}){
    const {name, email, phone} = friend
   console.log(name)
   
    return(
        <div className="card">
            <h4>name: {name}</h4>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    )
}