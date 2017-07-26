import React from 'react';
import $ from 'jquery';

const SearchModal = () => (
    <div id='search-modal-container'>
        <div id='search-modal'>
            <span onClick={ () => $('#search-modal-container').fadeOut() } className='close-modal'>x</span>
            <form>
                <input type='text'
                    id='search-modal-input'
                    placeholder='Search'
                />
            </form>
        </div>
    </div>
);

export default SearchModal;
