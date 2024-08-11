import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface Props extends ButtonProps {
  label: string;
}

const Button: React.FC<Props> = ({ label, ...rest }) => <AntButton {...rest}>{label}</AntButton>;

export default Button;
