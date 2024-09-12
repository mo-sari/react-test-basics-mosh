import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';
import '@testing-library/jest-dom/vitest';

describe('ProductImageGallery', () => {
    it('must have an empty page if no image url is passed', () => {
        const {container } = render(<ProductImageGallery imageUrls={[]}/>)
        
        expect(container).toBeEmptyDOMElement();
    });
    it('must render a list of images if is passed', () => {
        const imgurls = ['url1', 'url2']
        render(<ProductImageGallery imageUrls={imgurls}/>)
        
        // images have no text value, so we can't iterate over them 
        // and get single elements one by one
        const images = screen.getAllByRole('img');
        imgurls.map((url, inx)=>{
            expect(images[inx]).toHaveAttribute('src', url);
        })
        expect(images).toHaveLength(2);
    });
})