import { it, expect, describe, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';


describe('TermsAndConditions', () => {
    it('the checkbox must be unchecked at the begining', () => {
        render(<TermsAndConditions/>);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Submit/i);
        expect(button).toBeDisabled();
    });
    it('should enable the button when the checkbox is checked', async () => {
        render(<TermsAndConditions/>);

        const checkbox = screen.getByRole('checkbox');
        const user = userEvent.setup();

        await user.click(checkbox);
        expect(screen.getByRole('button')).toBeEnabled();
    });
})

//below lines are not the topic right now

import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup(); // This ensures that the DOM is cleaned after each test
});
beforeEach(() => {
    // Reset or reinitialize any state, DOM, or mocks here
    cleanup(); // Provided by testing library to unmount components and clean the DOM
  });
  