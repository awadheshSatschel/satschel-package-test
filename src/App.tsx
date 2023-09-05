import React from 'react';

interface MyComponentProps {
  text?: string;
}

export const App: React.FC<MyComponentProps> = ({ text = "Data null" }) => {
  return <div>{text}</div>;
};
