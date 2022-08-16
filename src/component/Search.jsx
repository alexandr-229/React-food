import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('');
    const { search } = useLocation();

    const handleChange = (e) => {
        setValue(e);
        handleSubmit(e);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e.target.value);
        }
    };

    const handleSubmit = (e = undefined) => {
        if (e === undefined) {
            cb(value);
        } else {
            cb(e);
        }
    };

    useEffect(() => {
        const string = search !== '' ? search.split('=')[1] : '';
        handleChange(string);
    }, []);

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={(e) => handleKey(e)}
                    onChange={(e) => handleChange(e.target.value)}
                    value={value}
                />
                <button
                    className="btn"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
};
