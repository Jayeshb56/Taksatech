import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { updateRoute } from '../features/form/formSlice';
import { Formik ,useFormik } from 'formik'
import * as Yup from 'yup'


const initialValues = {

  git_profile: "",
  Cv: "",
  about_you: ""
}
const onSubmit = values => {
  console.log("form data" , values)
}

const validationSchema = Yup.object({
  git_profile: Yup.string().required('Required'),
  Cv: Yup.string().required('A file is required'),
        
  about_you: Yup.string().min(20).required('Required')      
 
})

export default function StepTwo() {
  const dispatch = useDispatch();

  const formik = useFormik ({
    initialValues ,
    
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
   
  })

  console.log("visited field", formik.touched)
  

  

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


        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={15}>
              <FormGroup>
                <Label for="inlineRadio1">
                  Do you live in US?
                </Label>
                
                <div>
                <Input
                  type="radio"
                  name="radio_button"
                  id="inlineRadio1"
                  value="yes"
                  /> YES
                </div>
                
                <Input
                  type="radio"
                  name="radio_button"
                  id="inlineRadio1"
                  value="no"
                  
                /> No

              </FormGroup>
            </Col>
          </Row>


          <Row>
            <Col md={15}>
              <FormGroup>
                <Label for="gitProfile">
                  Git Profile
                </Label>
                <Input
                  id="git_Profile"
                  name="git_profile"
                  placeholder="Git URL"
                  type="text"
                  value={formik.values.git_profile.users}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.git_profile  && formik.errors.git_profile ? (
                <div className='error'>{formik.errors.git_profile}</div> ): null }
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleFile">
              Upload CV
            </Label>
            <Input
              id="uplaod_CV"
              name="Cv"
              type="file"
              value={formik.values.Cv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Cv  && formik.errors.Cv ? (
                <div className='error'>{formik.errors.Cv}</div> ): null }
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">
              Upload Cover Letter
            </Label>
            <Input
              id="cover_letter"
              name="file"
              type="file"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">
              About You
            </Label>
            <Input
              id="exampleText"
              name="about_you"
              type="textarea"
              value={formik.values.about_you}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.about_you  && formik.errors.about_you ? (
                <div className='error'>{formik.errors.about_you}</div> ): null }
          </FormGroup>


          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
            />
            <Label
              checkfor="exampleCheck"
            >
              Check me out
            </Label>
          </FormGroup>

          <Button onClick={() => dispatch(updateRoute(0))}>
            Back
          </Button>
          <Button onClick={() => dispatch(updateRoute(2))}>
            Submit
          </Button>
       </Form>


      </div>

    </div>
    </Formik>
  )
}
