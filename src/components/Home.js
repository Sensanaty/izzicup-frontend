import React from 'react'

const Home = () => {
    React.useEffect(() => {
        document.title = "Izzicup"
    }, []);
    
    return (
        <div className="jumbotron">
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;