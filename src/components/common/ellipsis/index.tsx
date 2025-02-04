import React from 'react';
import './style.css';

type Props = {
  text: string;
  maxLength?: number;
  className?: string;
};

const Ellipsis = (props: Props) => {
  const { text, maxLength = 1, className = '' } = props;
  return (
    <div
      className={`ellipsis-box ${className}`}
      style={{ WebkitLineClamp: maxLength }}
    >
      {text}
    </div>
  );
};

export default Ellipsis;
