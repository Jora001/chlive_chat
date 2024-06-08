/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
      return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='b0ecb783-051f-4e5b-9863-f5e882e59879'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
            />
        </div>
    );
};

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;
