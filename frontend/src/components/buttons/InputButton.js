import React from 'react';
import { Button } from 'react-bootstrap';

const InputButton = ({ text, onClick }) => {
  return (
    <Button variant="primary" type="button" onClick={onClick}>{text}
    </Button>
  );
};

export default InputButton;
