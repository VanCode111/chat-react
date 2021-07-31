import React from 'react'
import {Button as BaseButton} from 'antd';
import classNames from 'classnames';
import { ButtonProps as BaseButtonProps } from 'antd/lib/button';
import './Button.scss';

interface ButtonProps extends BaseButtonProps {

}

const Button: React.FC<ButtonProps> = ({children, className, ...props}) => {
  return (
    <BaseButton {...props} className={classNames('button', className)}>{children}</BaseButton>
  )
}

export default Button;
