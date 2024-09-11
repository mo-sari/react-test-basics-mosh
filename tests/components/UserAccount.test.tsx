import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import UserAccount from "../../src/components/UserAccount";
import '@testing-library/jest-dom/vitest';


describe('UserAccount', () => {
    it('should not render the button if user is not an admin', () => {
        const user = {
            id: 1,
            name: 'hassan',
            isAdmin: false
        }
        render(<UserAccount user={user}/>);
        screen.debug();
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    });
    it('should  render the button if user is an admin', () => {
        const user = {
            id: 1,
            name: 'hassan',
            isAdmin: true
        }
        render(<UserAccount user={user}/>);
        screen.debug();
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });
    
    it('should not render the button if user is not ad admin', () => {
        const user = {
            id: 2,
            name: 'ali',
        }
        render(<UserAccount user={user}/>);

        expect(screen.getByText(user.name)).toBeInTheDocument();
    });

})
