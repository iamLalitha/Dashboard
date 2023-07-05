import React,{useState} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Create(){
    let navigate=useNavigate();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [checkbox,setCheckbox]=useState('');
  console.log(checkbox)
  //creating func called postData to send data to the api
  const postData=()=>{
    axios.post(`https://64a4dfec00c3559aa9bec264.mockapi.io/fakeData`,{
        firstName,
        lastName,
        checkbox
    }).then(()=>{
        navigate('/read')
    })
//     console.log(firstName);
//     console.log(lastName);
//     console.log(checkbox);
//  
 }

return(
  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckbox(!checkbox)}/>
    </Form.Field>
    <Button type='submit' onClick={postData}>Submit</Button>
  </Form>
)
}
