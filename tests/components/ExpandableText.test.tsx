import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';

describe('ExpandableText', () => {
    const text = 'a'.repeat(256);
    it('should have a button with show more text if text is not small', async () => {
        render(<ExpandableText text={text}/>);

        
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/show more/i);
        
        const user = userEvent.setup();
        await user.click(button);
        
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(button).toHaveTextContent(/show less/i);
    });
})