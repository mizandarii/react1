import React, {Component} from "react";

import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

export default class App extends Component{
    
    //конструктор нициализирует состояние компонента и привязывает методы. 
    constructor(props){
        super(props);
        this.state = {
            data: [ 
                {label: 'Õpin Reacti', important: true, like: false, id: 1},
                {label: 'See on nii hea', important: false, like: false, id:2},
                {label: 'On vaja pausi', important: false, like: false, id:3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this); 
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
                                                               
        
        this.maxId = 4;
    }

    //находит элемент по ид, создает массив, исключая найденный
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    
  
    //добавляет новую запись (текст берется из тела запроса)
    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })
    }

    //по ид элемента узнает значение important и меняет на противоположное
    onToggleImportant(id){
        this.setState(({data}) =>{ 
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        });
    }

    //по ид элемента узнает значение liked и меняет на противоположное
    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return{
                data:newArr
            }
        });
    }
    
    //ищет посты по тексту 
    searchPost(items, term){
        if (term.length === 0){
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1; 
        });
    }

    //фильтрует посты и возвращает понравившиеся
    filterPost(items, filter){
        if (filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items
        }
    }

    //обновляет текст поиска
    onUpdateSearch(term){
        this.setState({term})
    }

    //обновляет фильтр
    onFilterSelect(filter){
        this.setState({filter})
    }

    //отображает компонент на странице
    render(){
        const {data, term, filter} = this.state;

        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return(
            <div className="app">
                <AppHeader liked ={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex"> {}
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter  
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                posts={visiblePosts}
                onDelete={this.deleteItem}
                
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}
