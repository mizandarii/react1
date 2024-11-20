import React from 'react';

import './app-header.css'

//отображает заголовок приложения, включая имя, общее количество постов и количество понравившихся
const AppHeader = ({liked, allPosts}) => {
    return(
        <div className='app-header d-flex'>
        <h1>Kristiina</h1>
        <h2>{allPosts} kannet, nendest lemmikuna märgitud: {liked}</h2>
        </div>
    )
}

export default AppHeader;