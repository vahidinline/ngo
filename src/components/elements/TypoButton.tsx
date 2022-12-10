import { Button } from 'antd';

type TypoButtonProps = {
  type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  size: 'large' | 'middle' | 'small';
  children: string;
  handleClick: () => void;
};

export const TypoButton = (props: TypoButtonProps) => {
  return (
    <Button type="primary" size="large">
      {props.children}
    </Button>
  );
};
