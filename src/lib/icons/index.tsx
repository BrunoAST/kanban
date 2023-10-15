import React from 'react';
import { ICON_MAP } from './icon-map';

type IconsProps = {
  name: 'board' | 'hide' | 'chevron-down';
  classes?: string;
};

export default function Icons({
  name,
  classes,
}: IconsProps): JSX.Element {
  return (
    <>
      {ICON_MAP.find(item => item.name === name)?.content(classes)}
    </>
  );
}
