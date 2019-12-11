import React, { useState, useEffect } from 'react';

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
