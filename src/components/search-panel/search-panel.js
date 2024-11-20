import React, {Component} from "react";

import './search-panel.css'

export default class SearchPanel extends Component {
    //Инициализирует состояние term как пустую строку, привязывает методы onUpdateSearch
    constructor (props){
        super(props)
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    //обноваляет состояние term и передает для осуществления поиска
    onUpdateSearch(e){
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    //отображает поисковую строку на странице
    render(){
        return(
            <input
                className="form-control search-input"
                type="text"
                placeholder="Kannete otsing"
                value={this.state.term}
                onChange={this.onUpdateSearch}
                />
        )
    }
}