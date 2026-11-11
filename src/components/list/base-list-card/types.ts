import type {To} from 'react-router-dom';

export interface CardAction {
    actionTitle: string;
    to?: To;
    onClick?: () => void;
}

export interface BaseCardProps {
    id: string;
    title: string;
    actions?: CardAction[];
}
