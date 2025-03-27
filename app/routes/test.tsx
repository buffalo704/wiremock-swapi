import React from 'react'
import { Link, Routes, Route } from 'react-router';
import { Authentication } from '~/routes/Authentication/Authentication';
import { Characters } from '~/routes/Characters/Characters';
import { Films } from '~/routes/Films/Films';

function test() {
  return (
     <div>
                    <ul>
                        <li>
                            <Link to="/authentication">Authentication</Link>
                        </li>
                        <li>
                            <Link to="/films">Films</Link>
                        </li>
                        <li>
                            <Link to="/characters">Characters</Link>
                        </li>
                    </ul>
    
                    <hr />
    
                    {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
                    <Routes>
                        <Route path="/authentication" element={<Authentication />} />
                        <Route path="/films" element={<Films />} />                            
                        <Route path="/characters" element={<Characters />} />                            
                    </Routes>
                </div>
  )
}

export default test
