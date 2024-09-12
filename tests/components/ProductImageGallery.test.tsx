import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';
import '@testing-library/jest-dom/vitest';

describe('ProductImageGallery', () => {
    it('must have an empty page if no image url is passed', () => {
        const {container } = render(<ProductImageGallery imageUrls={[]}/>)
        
        expect(container).toBeEmptyDOMElement();
    });
    // it('must have an empty page if no image url is passed', () => {
    //     const imgurls = ['url1', 'url2']
    //     render(<ProductImageGallery imageUrls={imgurls}/>)
        
    //     imgurls.forEach(ulr =>{
            
    //     })
    // });
})