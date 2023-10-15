import React from 'react';
import { ICON_MAP } from './icon-map';

type IconsProps = {
  /**
  * List with available icons.
  */
  name: 'board' | 'hide' | 'chevron-down' | 'light' | 'dark';

  /**
  * Custom classes that is going to be applied to the svg element when provided.
  */
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
