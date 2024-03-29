import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

const renderAvatar = (props) => {
  return (
    <Avatar
      {...props}
      className={`ant-avatar-${props.type}`}
    >
      {props.text}
    </Avatar>
  );
};

export const AvatarStatus = (props) => {
  const { name, subTitle, id, src, onNameClick } = props;

  return (
    <div className="avatar-status d-flex align-items-center">
      <div className="ml-2">
        <div>
          {onNameClick ? (
            <div
              onClick={() => onNameClick({ name, subTitle, src, id })}
              className="avatar-status-name clickable"
            >
              {name}
            </div>
          ) : (
            <div className="avatar-status-name">{name}</div>
          )}
        </div>
        <div className="text-muted avatar-status-subtitle">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

AvatarStatus.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  onNameClick: PropTypes.func,
};

export default AvatarStatus;
