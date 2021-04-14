import React, { Fragment, useState, useRef } from 'react';
import { baseApiUrl, env } from '../config';

const Search = () => {
    const [reply, setReply] = useState({text: '', imgUrl: ''});
    const inputRef = useRef(null);

    const handleSubmit = () => {    
        const data = {
            name: inputRef.current.value
        }
        
        fetchGreeting(data);
    };

    const fetchGreeting = async (data) => {
        const url = new URL(`${baseApiUrl[env]}/hello`);
        url.search = new URLSearchParams(data).toString();
            
        const result = await fetch(url)
            .then(response => response.json());

        
        setReply(result);                
    }

    const renderReply = () => {
        return reply.text && (
            <Fragment>
                <hr/>
                <div className="row">
                    <div className="col">
                        <p>&nbsp;</p>
                        <p>{reply.text}</p>
                        <img src={reply.imgUrl} className="img-fluid" />
                    </div>
                </div>
            </Fragment>
        );

    }

    return (<div className="container">
        <h1>Search</h1>
        <div className="bd-example">
        <form className="row g-3">

                <div className="col-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" ref={inputRef} className="form-control"/>
                </div>
                <div className="col-12">
                    <button type="button" onClick={handleSubmit} className="btn btn-light">Submit</button>
                </div>
        </form>
            {renderReply()}
        </div>

    </div>);

}

export default Search;