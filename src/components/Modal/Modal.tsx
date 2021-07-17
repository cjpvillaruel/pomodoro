import React from "react";
import Button from "../Button";

interface ModalProps {
  title?: string;
  onOk?: () => void;
  okButtonText?: string;
  okButtonProps?: IButtonProps;
}

const Modal: React.FunctionComponent<ModalProps> = ({title, children, okButtonProps, okButtonText}) => {
  return (
  <div>
    {title && <div>{title}</div>}
    <div>
      {children}
    </div>

    <Button {...okButtonProps}>{okButtonText}</Button>
  </div>)
};

export default Modal;
