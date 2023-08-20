import React from 'react';

export const Profile = () => {
    return (
        <div className='main-content'>
            <h1>Main Content</h1>
            <div className="image-wrapper">
                <img src="https://wallpaperaccess.com/full/1204591.jpg" alt=""/>
            </div>
            <div className="user">
                <div className="user__image">
                    <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt=""/>
                </div>
                <div className="user__info">

                </div>
            </div>
            <div className="posts">
                <div className="posts__item">Post 1</div>
                <div className="posts__item">Post 2</div>
            </div>
        </div>
    );
};