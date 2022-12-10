import { Input } from 'antd';

type TypoInputProps = {
  type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
  size: 'large' | 'middle' | 'small';
  children?: string;
  handleChange: () => void;
};

const TypoInput = (props: TypoInputProps) => {
  return <Input type={props.type} size={props.size} />;
};

export default TypoInput;
