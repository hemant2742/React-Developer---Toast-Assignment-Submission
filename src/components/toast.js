import React from 'react';
import '../css/toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faExclamationCircle,
    faCheckCircle,
    faExclamationTriangle,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const Toast = ({
    message,
    hideInfoIcon,
    withoutAction,
    withoutDivider,
    crossIcon,
    notificationIcon,
}) => {
    console.log(message, hideInfoIcon, withoutAction, withoutDivider, crossIcon, notificationIcon)
    return (
        <div className='toast'>
            {!hideInfoIcon && renderIcon(notificationIcon)}
            <span className='message'>{message}</span>
            {!withoutDivider && <div className='divider'></div>}
            {!withoutAction && (
                <button
                    className='custom-button'
                    onClick={() => console.log('Button clicked')}
                >
                    Button
                </button>
            )}
            {crossIcon && (
                <button
                    className='close-button'
                    onClick={() => console.log('Cross Button clicked')}
                >
                    <FontAwesomeIcon icon={faTimesCircle} size='lg' />
                </button>
            )}
        </div>
    );
};

const renderIcon = (notificationIcon) => {
    switch (notificationIcon) {
        case 'information':
            return (
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    size='lg'
                    style={{ color: 'blue' }}
                />
            );
        case 'error':
            return (
                <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    size='lg'
                    style={{ color: 'red' }}
                />
            );
        case 'warning':
            return (
                <FontAwesomeIcon
                    icon={faExclamationCircle}
                    size='lg'
                    style={{ color: 'yellow' }}
                />
            );
        case 'success':
            return (
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    size='lg'
                    style={{ color: 'green' }}
                />
            );
        default:
            return null;
    }
};

export default Toast;
