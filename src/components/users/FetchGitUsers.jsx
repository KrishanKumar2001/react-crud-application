import React, { Fragment } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Spinner from '../../pages/spinner/Spinner';


const FetchGitUsers = () => {

    let users=useLoaderData();
    let {state}=useNavigation();
    console.log(users);

    if (state==="loading") {
        return <Spinner/>
        
    }
    
  return (
    <div>
        {
            users.map((user)=>{
              return  <Fragment key={user.id}>
                         <picture>
                            <img src={user.avatar_url} height={100} width={100} alt={user.id} />
                         </picture>
                         <p>{user.login}</p>
                </Fragment>
            })
        }
    </div>
  )
}

export default FetchGitUsers