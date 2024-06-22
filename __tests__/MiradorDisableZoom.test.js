import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MiradorDisableZoomMenuItem from '../src/plugins/MiradorDisableZoomMenuItem';
// import '@testing-library/jest-dom/extend-expect';

describe('MiradorDisableZoomMenuItem', () => {
  const mockUpdateWindow = jest.fn();
  const windowId = 'window-1';
  const t = (key) => key; // simplistic translation function for testing

  it('should render lock icon when enabled', () => {
    render(
      <MiradorDisableZoomMenuItem
        enabled
        t={t}
        updateWindow={mockUpdateWindow}
        windowId={windowId}
      />,
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'disableZoom');
    expect(screen.getByRole('button')).toContainElement(screen.getByTestId('LockIcon'));
  });

  it('should render lock open icon when not enabled', () => {
    render(
      <MiradorDisableZoomMenuItem
        enabled={false}
        t={t}
        updateWindow={mockUpdateWindow}
        windowId={windowId}
      />,
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'enableZoom');
    expect(screen.getByRole('button')).toContainElement(screen.getByTestId('LockOpenIcon'));
  });

  it('should toggle the enabled state on click', () => {
    render(
      <MiradorDisableZoomMenuItem
        enabled
        t={t}
        updateWindow={mockUpdateWindow}
        windowId={windowId}
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockUpdateWindow).toHaveBeenCalledWith(windowId, { disableZoomEnabled: false });

    fireEvent.click(button);
    expect(mockUpdateWindow).toHaveBeenCalledWith(windowId, { disableZoomEnabled: true });
  });
});
