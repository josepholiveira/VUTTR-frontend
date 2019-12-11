import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import { modalStyle } from './styles';

export default function Modal({ children, isOpen }) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      style={modalStyle}
      isOpen={modalStatus}
      contentLabel="Add new tool"
    >
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
