import React from 'react';
import './Header.scss';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return <h1 className="header">{title}</h1>;
};