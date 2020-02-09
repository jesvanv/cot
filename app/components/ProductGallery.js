import React from 'react';

import { Button } from 'components/Button'

export const ProductGallery = ({setShowGallery}) => {
    const galleryImages = [
        {
            image: 'app/images/_gallery/s491676366340357639_c2_i2_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c3_i2_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c4_i2_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c5_i2_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c6_i1_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c7_i2_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c9_i2_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c10_i1_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_c11_i1_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_p3_i1_w640.jpeg',
            caption: ''
        },
        {
            image: 'app/images/_gallery/s491676366340357639_p4_i1_w640.jpeg',
            caption: ''
        }
    ]
    return (
        <div className='product-gallery'>
        <Button className={'close-button'} onClick={() => {setShowGallery(false); 
    document.body.classList.toggle('noscroll', false)}} />
        <div className='gallery-container'>
            { galleryImages.map((imageObj, i) => {
                return (
                    <img key={`galleryImage_${i}`} src={ imageObj.image } className={'gallery-product-image'}/>
                )
            }) }
            </div>
        </div>
    )
}