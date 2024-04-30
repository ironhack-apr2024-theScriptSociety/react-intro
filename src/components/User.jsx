function User(props){
    return (
        <div className="box">
            <p>Name: {props.userName}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default User;