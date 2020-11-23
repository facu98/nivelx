import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import grey from '@material-ui/core/colors/grey';

export const Star = () => {
    return (
        <div>
            <StarIcon
                style={{ color: grey[300] }}
                onMouseEnter={(e) => {
                    console.log(e.target.value);
                    console.log('Ingreso a la estrella');
                }}
            />
            <StarIcon
                style={{ color: grey[300] }}
            />
            <StarIcon
                style={{ color: grey[300] }}
            />
            <StarIcon
                style={{ color: grey[300] }}
            />
            <StarIcon
                style={{ color: grey[300] }}
            />
        </div>
    )
}