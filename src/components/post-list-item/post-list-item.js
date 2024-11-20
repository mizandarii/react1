import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crossedOut: false
        };
        this.toggleCrossOut = this.toggleCrossOut.bind(this);
    }


    toggleCrossOut() {
        this.setState(prevState => ({
            crossedOut: !prevState.crossedOut
        }));
    }

    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, like, important } = this.props;
        const { crossedOut } = this.state;

        let classNames = 'app-list-item row';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                {/* Label column: occupies 8/12 of the row */}
                <div className="col-8 d-flex align-items-center">
                    <span
                        className={`app-list-item-label ${crossedOut ? 'crossed-out' : ''}`}
                    >
                        {label}
                    </span>
                </div>


                <div className="col-4 d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-sm btn-star"
                        onClick={onToggleImportant}
                    >
                        <i className={`fa ${important ? 'fa-star' : 'fa-star-o'} important-icon`}></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-trash"
                        onClick={onDelete}
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-check"
                        onClick={this.toggleCrossOut} 
                    >
                        <i className={`fa ${crossedOut ? 'fa-check-circle' : 'fa-circle-o'}`}></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-heart"
                        onClick={onToggleLiked}
                    >
                        {/*<i className="fa fa-heart"></i>*/}
                        <i className={`fa ${like ? 'fa-heart' : 'fa-heart-o'}`}></i>
                    </button>
                </div>
            </div>
        );
    }
}
