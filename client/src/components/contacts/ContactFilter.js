import React, { useContext, useRef } from 'react'

import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);

    const text = useRef('');

    const onChange = e => {

    }

    return (
        <Form>
            <input
                ref={text}
                type="text"
                placeholder="Filter Contacts..."
                onChnage={onChange}
            />
        </Form>
    );
}

export default ContactFilter
