import React from 'react'
import { useGetAllUsersQuery } from '../state/reducers/createApi'

const users = () => {

    const { isError, isLoading, data } = useGetAllUsersQuery()

    if (isLoading) {
        return <p>Loading . . . </p>
    } else if (isError) {
        return <p>Something went wrong . . . in Data Fetching</p>
    } 

  return (
    <>
        <h1>user</h1> 

        {
            data.users.map((item) => {
                return (
                    <>  
                        <div key={item.id}>
                            <p>{item.firstName}</p>
                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default users