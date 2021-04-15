import React, { Fragment, useState, useRef } from 'react';
import { baseApiUrl } from '../config';

const Authentication = () => {
    const [reply, setReply] = useState({text: '', imgUrl: ''});
    const [isError, setIsError] = useState(false);

    const inputRef = useRef(null);

    const handleSubmitPost = async () => {
        const data = {
            name: inputRef.current.value
        };

        const url = new URL(`${baseApiUrl['local']}/hello`);
        try {
            const result = await fetch(url, { method: 'POST', body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())

            setReply(result);
            setIsError(false);
        } catch(e) {
            setIsError(true);
            setReply({text: '', imgUrl: ''});
        }

    }

    const handleSubmit = () => {    
        const data = {
            name: inputRef.current.value
        }
        
        fetchGreeting(data);
    };

    const fetchGreeting = async (data) => {
        const url = new URL(`${baseApiUrl['local']}/hello`);
        url.search = new URLSearchParams(data).toString();

        try {
            const result = await fetch(url)
                .then(response => response.json());

            setReply(result);
            setIsError(false);
        } catch(e) {
            setIsError(true);
            setReply({text: '', imgUrl: ''});
        }

    }

    const renderReply = () => {
        return reply.text && (
            <Fragment>
                <hr/>
                <div className="row">
                    <div className="col">
                        <p>&nbsp;</p>
                        <p>{reply.text}</p>
                        <img src={reply.imgUrl} className="img-fluid" alt="" />
                    </div>
                </div>
            </Fragment>
        );

    }

    const renderError = () => {
        return isError && (<div className="showError">
            This person is not recognized.
        </div>)
    }

    return (<div className="container">
        <h1>Authentication</h1>
        <div className="bd-example">
        <form className="row g-3">
            <div className="col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" ref={inputRef} className="form-control"/>
                {renderError()}
            </div>
            <div className="col-12">
                <button type="button" onClick={handleSubmitPost} className="btn btn-light">Submit</button>
            </div>
        </form>
            {renderReply()}
        </div>

    </div>);

}

export default Authentication;