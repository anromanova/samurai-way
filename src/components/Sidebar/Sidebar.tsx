import React from 'react';
import s from './Sidebar.module.scss';
export const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.nav}>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
};