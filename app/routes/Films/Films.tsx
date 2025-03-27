import React, { useState, useEffect } from 'react';
import { baseApiUrl, env } from '../../config';
import { fetchApi } from '../../common';

export default function Films() {
    const [films, setFilms] = useState<any>();

    useEffect(() => {
        fetchStarWarsFilms(['1','2','3','4','5','6','7','8','9'])
            .then(filmsMeta => {setFilms(filmsMeta)})
    },[]);

    const fetchStarWarsFilms = async (names: string[]) => {
        const requests = names.map((name) => {
            const url = `${baseApiUrl[env]}/api/films/${name}/`
            return fetchApi(url);
        })
        return Promise.all(requests)
    }

    const filmTitles = films?.map((film:any, i:number) => {
            if (!film || film.detail){
                return null;
            }
            
            return (
                <li className="list-group-item" key={i}>Episode {film.episode_id} - {film.title}</li>
            )
        });

    return (
        <div className="container">
        <h1>Films</h1>
            <div className="bd-example">
            <div className="row">
                <div className="col">
                    <h5>List of Star Wars ennealogy</h5>
                    <ul className="list-group">
                        {filmTitles}
                    </ul>
                </div>
            </div>
            </div>
    </div>);

}