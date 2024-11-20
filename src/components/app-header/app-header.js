import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className='app-header d-flex'>
        <h1>Teie nimi siin</h1>
        <h2>{allPosts} kannet, nendest lemmikuna märgitud: {liked}</h2>
        </div>
    )
}

export default AppHeader;