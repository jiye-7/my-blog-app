import { useState } from 'react';

const IMAGE_1_URL =
  'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=1470&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D';
const IMAGE_2_URL =
  'https://images.unsplash.com/photo-1541890289-b86df5bafd81?w=1470&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D';
const IMAGE_3_URL =
  'https://images.unsplash.com/photo-1592248939980-5babf7d54eb9?w=1470&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D';

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <div>
      <div className='carousel'>
        <ul className='carousel__slides'>
          <input
            type='radio'
            name='radio-buttons'
            id='img-1'
            checked={activeImage === 1}
            readOnly
          />
          <li className='carousel__slide-container'>
            <div className='carousel__slide-img'>
              <img alt='scenery 1' src={IMAGE_1_URL} />
            </div>
            <div className='carousel__controls'>
              <label
                className='carousel__slide-prev'
                onClick={() => setActiveImage(3)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className='carousel__slide-next'
                onClick={() => setActiveImage(2)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type='radio'
            name='radio-buttons'
            id='img-2'
            checked={activeImage === 2}
            readOnly
          />
          <li className='carousel__slide-container'>
            <div className='carousel__slide-img'>
              <img alt='scenery 2' src={IMAGE_2_URL} />
            </div>
            <div className='carousel__controls'>
              <label
                className='carousel__slide-prev'
                onClick={() => setActiveImage(1)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className='carousel__slide-next'
                onClick={() => setActiveImage(3)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type='radio'
            name='radio-buttons'
            id='img-3'
            checked={activeImage === 3}
            readOnly
          />
          <li className='carousel__slide-container'>
            <div className='carousel__slide-img'>
              <img alt='scenery 3' src={IMAGE_3_URL} />
            </div>
            <div className='carousel__controls'>
              <label
                className='carousel__slide-prev'
                onClick={() => setActiveImage(2)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className='carousel__slide-next'
                onClick={() => setActiveImage(1)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className='carousel__dots'>
            <label
              className='carousel__dot'
              id='img-dot-1'
              onClick={() => setActiveImage(1)}
            ></label>
            <label
              className='carousel__dot'
              id='img-dot-2'
              onClick={() => setActiveImage(2)}
            ></label>
            <label
              className='carousel__dot'
              id='img-dot-3'
              onClick={() => setActiveImage(3)}
            ></label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
