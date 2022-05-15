import { useState,useEffect } from 'react';
import axios from 'axios'

const Customer = ({title, customers}) => {

  const url  = 'http://localhost:8000/test';
  const [product,setProduct] = useState(null);

  let copy = {...product}

  //console.log(copy)

  useEffect(() => {

    axios.get(url)
      .then(response => {
        
        setProduct(JSON.parse(response.data))
      })        
      },[url])

  //console.log(copy)
  //console.log(Object.keys(copy))
  //console.log(Object.values(copy))

  //Object.keys(copy).map((i) => {console.log(copy[i]['name'])})
    
  const customers_ = []
  Object.keys(copy).map((i) => { customers_.push(copy[i]['name'])})

  console.log(customers_)

  if(product){
    return (
      <header>
          <h1>
              {title}

              {customers_}

              {customers_.map((i) => {
                <h3></h3>
              })}
              
  
          </h1>
        
      </header>
    )
  }

  return (

    <div>

    </div>
  )


}



// const headingStyle = {

//   color:'red',
//   backgroundColor: 'black',

// }

export default Customer




