import reactLogo from "../assets/react.svg"

function Examples(){

    const title = "Some JSX examples"
    
    const user = {
        firstName: "Richard",
        age: 28
    }

    const renderSubtitle = () => {
        return <h2>This is the subtitle</h2>;
    }

    const divStyle = {
        border: "1px solid #fff",
        margin: "2em auto",
        padding: "2em",
    }


    return (
        <div style={divStyle}>
            <img src="vite.svg" alt="" />
            <img src={reactLogo} alt="" />

            <h1>{title}</h1>
            {renderSubtitle()}

            <div className="box">
                <p>Name: {user.firstName.toUpperCase()}</p>
                <p>Age: {user.age}</p>
            </div>
        </div>
    )
}

export default Examples;