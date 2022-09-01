import React, { useState, useEffect, useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import "../App.css";

const InputUrl = () => {

    const [urlData, setUrlData] = useState();
    const [loading, setLoading] = useState(false);

    const dataId = useId();

    const urlSchema = Yup.object().shape({
        url: Yup.string()
                .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please add a link'),
      });

    

    const apiShort = "https://api.shrtco.de/v2/shorten?url=";

    const submitLink = async (values) => {
        const response = await axios.post([`https://api.shrtco.de/v2/shorten?url=${values?.url}`]);
        if (response.status === 201) {
            setUrlData(response.data.result);
            // alert("Url sent");
        }
    };

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
                url: '',
            }}
            validationSchema={urlSchema}
            onSubmit={values => {
                // same shape as initial values
               submitLink(values);
            
            }}
            >
                {({ 
                    handleSubmit,
                    errors, 
                    touched,
                    values 
                }) => (
                    <Form onSubmit={handleSubmit} className="w-full relative sm:top-12 xs:top-14 z-10">
                        <div className='sm:w-6/12 xs:w-11/12 flex xs:flex-col xs:justify-between sm:flex-row mx-auto items-center sm:justify-start sm:p-7 xs:p-3 bg-PRIMARY_DARK_VIOLET'>
                            <div className='sm:w-5/6 xs:w-6/6 xs:mt-2 sm:mt-0 flex flex-col'>
                                <div>
                                    <Field 
                                        name="url" 
                                        values={values.url}
                                        className="sm:w-5/6 xs:  p-2 outline-none rounded-md"
                                        placeholder=" Shorten a link here..." 
                                    />
                                </div>
                                <div className='text-RED-_100 text-xs'>
                                    <ErrorMessage name="url"  />
                                </div> 
                            </div>
                            <div className='sm:w-1/6 xs:w-4/6 xs:mt-3 sm:mt-0 text-center rounded-md'>
                                <button type="submit" onMouseOver={changeBackground} onMouseOut={previousBackground} className='text-white xs:text-sm w-full p-2 sm:text-sm  border rounded-md'>
                                    Shorten it!
                                </button>
                            </div>
                        </div>
                        
                        
                    </Form>
                )}
            </Formik>
        </div>
        {urlData &&
            <div>
                <div>{urlData.original_link}</div>
                <div>{urlData.full_short_link}</div>
                <button>Copy</button>
            </div> 
        }  
    </>    
    );
};

export default InputUrl;