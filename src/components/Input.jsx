import React, { useState, useEffect, useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import "../App.css";

const InputUrl = () => {

    const [urlData, setUrlData] = useState([]);
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
        const response = await axios.post([`https://api.shrtco.de/v2/shorten?url=${values.url}`]);
        if (response.status === 201) {
            alert("Url sent");
        }
    };

    const getLink = async (values) => {
        const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${values.url}`);
        const res = response.data.result;
        console.log(res);
        // setUrlData(res);
        // console.log(response, "Kokoma");
    }

    useEffect(() => {
        getLink()
    }, [urlData])

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
               getLink(values);
            }}
            >
                {({ 
                    handleSubmit,
                    errors, 
                    touched,
                    values 
                }) => (
                    <Form onSubmit={handleSubmit} className="w-full relative top-12 z-10">
                        <div className='w-6/12 flex flex-row mx-auto items-center p-7 bg-PRIMARY_DARK_VIOLET'>
                            <div className='w-5/6 flex flex-col'>
                                <div>
                                    <Field 
                                        name="url" 
                                        values={values.url}
                                        className="w-5/6 p-2 outline-none rounded-md"
                                        placeholder=" Shorten a link here..." 
                                    />
                                </div>
                                <div className='text-RED-_100 text-xs'>
                                    <ErrorMessage name="url"  />
                                </div> 
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
        {urlData && urlData.map((item) => {
            <div key={dataId}>
                <div>{item.original_link}</div>
                <div>{item.full_short_link}</div>
                <button>Copy</button>
            </div> 
        })}  
    </>    
    );
};

export default InputUrl;