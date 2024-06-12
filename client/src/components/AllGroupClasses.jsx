import React, { useState } from 'react'

const AllGroupClasses = () => {

    let [arr, setArr] = useState([
        {
            name: "Something else",
            description: "loremipsumqwertyuioplkjhgfdsazxcvbnmkooiuytre",
        },
        {
            name: "Something else",
            description: "loremipsumqwertyuioplkjhgfdsazxcvbnmkooiuytre",
        },
        {
            name: "Something else",
            description: "loremipsumqwertyuioplkjhgfdsazxcvbnmkooiuytre",
        },
        {
            name: "Something else",
            description: "loremipsumqwertyuioplkjhgfdsazxcvbnmkooiuytre",
        },
        {
            name: "Something else",
            description: "loremipsumqwertyuioplkjhgfdsazxcvbnmkooiuytre",
        },
    ])
  return (
    <div className='m-3'>
        <a href="/group-classes" className='btn btn-dark'>Back</a>
        <h1 className='text-danger m-2 mb-3'>All Classes</h1>
        {
            arr.map((item, index)=>(
                <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">
                {item.description}
              </p>
              <a href="#" class="btn btn-success m-2">
                Buy Class
              </a>
              <a href="#" class="btn btn-outline-dark">
                Add to Cart
              </a>
            </div>
          </div>
            ))
        }
    </div>
  )
}

export default AllGroupClasses