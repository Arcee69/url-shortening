import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import "../App.css"

const InputUrl = ({}) => {

    const urlSchema = Yup.object().shape({
        url: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
      });

    function changeBackground(e) {
        e.target.style.background = '#2acfcf';
        e.target.style.color = '#fff';
    };

    function previousBackground(e) {
        e.target.style.background = 'none';
        e.target.style.border = '1px solid #fff';
    };

    return (
    <>
        <div>
            <Formik
            initialValues={{
                name: '',
            }}
            validationSchema={urlSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
            >
                {({ 
                    handleSubmit,
                    errors, 
                    touched 
                }) => (
                    <Form onSubmit={handleSubmit} className="w-full mt-4">
                        <div className='w-6/12 flex flex-row mx-auto items-center p-7 shorten bg-PRIMARY_DARK_VIOLET'>
                            <div className='w-5/6'>
                                <Field 
                                    name="name" 
                                    className="w-5/6 p-2 rounded-md"
                                    placeholder=" Shorten a link here..." 
                                />
                                    {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                    ) : null} 
                                <ErrorMessage name="name" />
                            </div>
                            <div className='w-1/6 text-center rounded-md'>
                                <button type="submit" onMouseOver={changeBackground} onMouseOut={previousBackground} className='text-white p-2 border rounded-md'>
                                    Shorten it!
                                </button>
                            </div>
                        </div>
                        
                        
                    </Form>
                )}
            </Formik>
        </div>
    </>    
    );
};

export default InputUrl;