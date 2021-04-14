import React, {Fragment, useState, useEffect, useRef} from 'react';
import { baseApiUrl, env } from '../config';
import { fetchApi } from '../common';

const Characters = () => {
    const [charactersList, setCharactersList] = useState();
    const inputRef = useRef(null);

    useEffect(() => {
        fetchCharactersApi()
            .then(characters => setCharactersList(characters))
    },[]);

    const fetchCharactersApi = async () => {
        try {
            const url = `${baseApiUrl.local}/characters`;
            const result = await fetchApi(url);
            return result.characters;
        } catch (e) {
            console.error(e);
        }
    }

    const renderCharactersList = () => {
        if (!charactersList){
            return;
        }

        return charactersList.map(app => {
            return (
                <li className="list-group-item" key={app}>{app} </li>
            )
        });
    }

    const handleSavePost = async () => {
        const data = {
            name: inputRef.current.value
        };

        const url = `${baseApiUrl['local']}/characters/save`
        const result = await fetch(url, { method: 'POST', body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json());
        setCharactersList(result.characters);
    }

    const handleSaveGet = async() => {
        const url = `${baseApiUrl['local']}/characters/save`
        const result = await fetch(url);

        const characters = await fetchCharactersApi();
        setCharactersList(characters);
    }

    const handleDelete = async() => {
        const url = `${baseApiUrl[env]}/characters/delete`
        await fetch(url);

        const characters = await fetchCharactersApi();
        setCharactersList(characters);
    }

    return (
        <div className="container">
            <h1>Characters</h1>
            <div className="bd-example">
            <form className="row g-3">
                <div className="col-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" ref={inputRef} className="form-control"/>
                </div>
                <div className="col-12 btn-gap">
                    <button type="button" onClick={handleSaveGet} className="btn btn-light">Add</button>
                    <button type="button" onClick={handleDelete} className="btn btn-secondary">Remove</button>
                </div>
            </form>
                <hr/>
                <div className="col">
                    <p>&nbsp;</p>
                    <h5>Short List of Main Characters</h5>
                    <ul className="list-group">
                        {renderCharactersList()}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Characters;