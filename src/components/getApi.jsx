import React from 'react'
import { useGetAllProductsQuery } from '../state/reducers/createApi'

const getApi = () => {

  const { isError, isLoading, data } = useGetAllProductsQuery()

  if (isLoading) {
    return <p>Loading . . . </p>
  } else if (isError) {
    return <p>Something went wrong . . . in Data Fetching</p>
  } 

  return (
    <>

        <h1>Products</h1>

        {
            data.carts.map((item) => {
              return (
                <>
                  {
                    item.products.map((item) => {
                      return (
                        <>
                          <ul>
                            <li>Products Title : {item.title} & Products Price = $ {item.price}</li>
                          </ul>
                        </>
                      )
                    }) 
                  }
                </>
              )
            })
        }
    </>
  )
}

export default getApi