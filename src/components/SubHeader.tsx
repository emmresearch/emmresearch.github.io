import React from 'react';
import './SubHeader.scss';

interface SubHeaderProps {
    title: string;
}

export const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {
    return <h2 className='sub-header'>{title}</h2>;
};