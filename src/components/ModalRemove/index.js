import React, { useState, useEffect } from 'react';

import { MdClose } from 'react-icons/md';

import { useDispatch } from 'react-redux';

import { Container, Title } from './styles';

import * as ToolActions from '../../store/modules/tools/actions';
import Modal from '../Modal';

export default function ModalAdd({ isOpen, tool }) {
  const dispatch = useDispatch();
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  function handleRemove(id) {
    setModalStatus(false);

    dispatch(ToolActions.removeToolRequest(id));
  }

  return (
    <Modal isOpen={modalStatus}>
      <Title>
        <MdClose /> Remove tool
      </Title>
      <Container>
        <h4>Are you sure you want to remove {tool.title}</h4>
        <div>
          <button type="button" onClick={() => setModalStatus(false)}>
            Cancel
          </button>
          <button type="button" onClick={() => handleRemove(tool.id)}>
            Yes, remove
          </button>
        </div>
      </Container>
    </Modal>
  );
}
