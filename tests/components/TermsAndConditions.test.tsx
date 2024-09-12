import { it, expect, describe, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';


describe('TermsAndConditions', () => {
    const renderComponent = ()=>{
        render(<TermsAndConditions/>);

        return {
            button: screen.getByRole('button'),
            checkbox: screen.getByRole('checkbox')
        }
    }
    it('the checkbox must be unchecked at the begining', () => {
        const {button, checkbox} = renderComponent();

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Submit/i);
        expect(button).toBeDisabled();
    });
    // it('should enable the button when the checkbox is checked', async () => {
    //     const {button, checkbox} = renderComponent();
    //     const user = userEvent.setup();

    //     await user.click(checkbox);
    //     expect(button).toBeEnabled();
    // });
})

