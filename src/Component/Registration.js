import { React} from 'react'

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { updateRoute } from '../features/form/formSlice';
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'












const initialValues = {
  first_name: "",
  email: "",
}
 

const onSubmit = values => {
  console.log("form data", values)
}



const validationSchema = Yup.object({
  first_name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required')

})


export default function Registration() {

  
  // const url ="https://my-json-server.typicode.com/typicode/demo/posts"
  // const [data, setData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   phone_number: ""
  // })

  // function submit(e) {
  //   e.preventDefault();
  //   Axios.post (url,{
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     email: data.email,
  //     phone_number: parseInt(data.phone_number)
  //   })
  //   .then(res =>{
  //     console.log(res.data)
  //   })
  // }

  // function handle (e) {
  //   const newdata = {...data }
  //   newdata[e.target.id] = e.target.id
  //   setData(newdata)
  //   console.log(newdata)
  // }
 

  

  const formik = useFormik({
    initialValues,
 
    validationSchema,
    
    onSubmit: value => {
      alert(JSON.stringify(value, null, 2));
     
    },
  })

  console.log("visited field", formik.touched)

  const dispatch = useDispatch();
  



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit ={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
     >

    <div className='main_container'>
      <div className='form_container'>
        
 
            <Form onSubmit={formik.handleSubmit} >

          <Row>
            <Col md={15}>
              <FormGroup>
                <Label for="exampleEmail">
                  First name
                </Label>
                <Input
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  type="text"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  
                  value={formik.first_name}
                  
                  
                  

                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <div className='error'>{formik.errors.first_name}</div>) : null }

              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={15}>
              <FormGroup>
                <Label for="examplePassword">
                  Last name
                </Label>
                <Input
                  id="last_name"
                  name="last_name"
                  placeholder="password placeholder"
                  type="text"
                
                  
                
                
              
                 
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={15}>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.email}
                  
             

                />
                {formik.touched.email && formik.errors.email ?
                  (<div className='error'>{formik.errors.email}</div>) : null}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={15}>
              <FormGroup>
                <Label for="Phone_number">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  name='phone_number'
                  class="form-control" 
                  id="phone_number"
                 
                 
                  placeholder="91257888" />
                  
                  
                 
              </FormGroup>
            </Col>
          </Row>

          <Button type="submit" id="next" onClick={() => dispatch(updateRoute(1))} >
            Next
          </Button>


        </Form>
        

          

        




      </div>

    </div>
    </Formik>
  )
}
