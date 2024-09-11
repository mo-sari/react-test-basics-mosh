import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import UserList from "../../src/components/UserList";
import '@testing-library/jest-dom/vitest';


describe('UserList', () => {
    it('should display a list of users if users passed', () => {
        const users = [
            {id:1, name: 'ali'},
            {id:2, name: 'mamad'}
        ]

        render(<UserList users={users}/>);
        screen.debug();
        users.forEach(user =>{
            const link = screen.getByRole('link', {name: user.name});

            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})