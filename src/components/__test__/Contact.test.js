import React from 'react';
import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; 

test('Should load Contact component', () => {
    render(< Contact />);

    const heading = screen.getByRole('heading');

    // * Assertion
    expect(heading).toBeInTheDocument();
 });