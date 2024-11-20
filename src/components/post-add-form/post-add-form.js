import React,  {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    //Инициализирует состояние text как пустую строку, gривязывает методы onValueChange и onSubmit 
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //Обновляет состояние text текущим значением ввода
    onValueChange(e){
        this.setState({
            text: e.target.value
        });
    }

    //Вызывает метод onAdd, передавая в него текущий текст, очищает поле ввода
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    //отображает на экране поля для ввода и кнопку
    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Millest mõtlete?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Lisada
                </button>
            </form>
        );
    }
}    