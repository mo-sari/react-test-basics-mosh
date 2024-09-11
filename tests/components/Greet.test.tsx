import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import Greet from "../../src/components/Greet";
import '@testing-library/jest-dom/vitest';


describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name="Mosh"/>);

        // screen.debug();
        const heading = screen.getByRole('heading', {name: /hello mosh/i});

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Hello Mosh');
    });
    it('should render login when name is not provided', () => {
        render(<Greet name=''/>);

        // screen.debug();
        const button = screen.getByRole('button', {name: /login/i});

        expect(button).toBeInTheDocument();
    })
})