import React from 'react';
import{Info,Repos,Search,User,NavBar} from '../components';
import { GithubContext } from '../context/context';

import loadingImage from '../images/preloader.gif';

function Dashboard() {
    const {isLoading} = React.useContext(GithubContext)
    if(isLoading){
        return <main>
            <NavBar/>
        <Search/>
        <img src={loadingImage} className="loading-img"/> 
        </main>
    }
    return (
       <main>
           <NavBar></NavBar>
           <Search/>
           <Info/>
           <User/>
           <Repos/>
       </main>
    )
}

export default Dashboard
