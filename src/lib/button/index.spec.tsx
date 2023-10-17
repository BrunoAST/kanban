import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button, { ButtonProps } from '.';

function renderButton({ size, variant }: Partial<ButtonProps>) {
  render(<Button size={size} variant={variant} onClick={() => console.log('Click')}>Content</Button>);
}

describe('<Button />', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Button onClick={jest.fn}>Content</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render children content', () => {
    renderButton({});
    expect(screen.getByText('Content')).toBeDefined();
  });

  describe('Size', () => {
    test('Should set the large size by default', () => {
      renderButton({});
      const button = screen.getByText('Content');
      expect(button.classList).toContain('py-3.5');
      expect(button.classList).not.toContain('py-2');
    });

    test('Should set the small size when passed', () => {
      renderButton({ size: 'small' });
      const button = screen.getByText('Content');
      expect(button.classList).toContain('py-2');
      expect(button.classList).not.toContain('py-3.5');
    });
  });

  describe('Variant', () => {
    test('Should set the primary variant by default', () => {
      renderButton({});
      const button = screen.getByText('Content');
      expect(button.classList).toContain('bg-purple-200');
      expect(button.classList).not.toContain('bg-purple-125');
      expect(button.classList).not.toContain('bg-red-200');
    });

    test('Should set the secondary variant when passed', () => {
      renderButton({ variant: 'secondary' });
      const button = screen.getByText('Content');
      expect(button.classList).toContain('bg-purple-125');
      expect(button.classList).not.toContain('bg-purple-200');
      expect(button.classList).not.toContain('bg-red-200');
    });

    test('Should set the destructive variant when passed', () => {
      renderButton({ variant: 'destructive' });
      const button = screen.getByText('Content');
      expect(button.classList).toContain('bg-red-200');
      expect(button.classList).not.toContain('bg-purple-125');
      expect(button.classList).not.toContain('bg-purple-200');
    });
  });
});
