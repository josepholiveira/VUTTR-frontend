import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import { MdAdd } from 'react-icons/md';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { Title, MyForm, MyInput, MyTextarea, Button } from './styles';

import * as ToolActions from '../../store/modules/tools/actions';
import Modal from '../Modal';

export default function ModalAdd({ isOpen }) {
  const dispatch = useDispatch();
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const schema = Yup.object().shape({
    title: Yup.string().required('É necessário adicionar um título'),
    link: Yup.string().url('Neste campo só são permitidas URLs válidas'),
    description: Yup.string().required('É necessário adicionar uma descrição'),
    tags: Yup.string().required('É necessário adicionar as tags'),
  });

  function handleSubmit(data) {
    const tool = {
      ...data,
      tags: data.tags.split(' '),
    };

    setModalStatus(false);

    dispatch(ToolActions.addToolRequest(tool));
  }

  return (
    <Modal isOpen={modalStatus}>
      <Title>
        <MdAdd /> Add new tool
      </Title>
      <MyForm schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="title">Tool Name</label>
        <MyInput id="title" name="title"></MyInput>
        <label htmlFor="link">Tool Link</label>
        <MyInput id="link" name="link" />
        <label htmlFor="description">Tool description</label>
        <MyTextarea id="description" name="description" />
        <label htmlFor="tags">Tags</label>
        <MyInput id="tags" name="tags" />
        <Button type="submit">Add tool</Button>
      </MyForm>
    </Modal>
  );
}

ModalAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
