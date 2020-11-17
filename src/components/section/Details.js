import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {dataContext} from '../Context'

export default function Details() {
        
        const {id} = useParams()
        const {products} = useContext(dataContext)
        const [data, setData] = useState({})

        const getProductDetails = () => {
            if(id){
                const data = products.filter(item => {
                    return item._id === id
                })
                setData(data)
            }
        }

        useEffect(() => {
                getProductDetails()
        }, [])

        return (
            <section>
                Details 
                {
                    data
                }
            </section>
        )
}
