import React from "react";
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    
    //создает список элементов (постов) со свойствами (фильтрами)
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className="list-group-item">
                <PostListItem
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleImportant = {() => onToggleImportant(id)}
                onToggleLiked = {() => onToggleLiked(id)} />
            </li>
        )
    });

    //отображает элементы на странице
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;