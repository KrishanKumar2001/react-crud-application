import React from 'react'
import { Form } from 'react-router-dom'

const CreateProduct = () => {
  return (
    <div>
        <h1>Create *Product/user</h1>

        <Form action="/create-product" method='post' >
            <div className="form-group">
                <label htmlFor="">name</label>
                <input type="text" name='name' placeholder='enter name'/>
            </div>
           
            <div className="form-group">
                <label htmlFor="categoryId">email</label>
                <input type="text" name='email' placeholder='enter email '/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='enter password' />
            </div>
            <div className="form-group">
                <label htmlFor="avatar">avatar</label>
                <input type="text" name='avatar' placeholder='enter avatar' />
            </div>
            <div className="form-group">
                <button>submit</button>
            </div>
        </Form>
    </div>
  )
}

export default CreateProduct