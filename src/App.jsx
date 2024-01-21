import { useState, useEffect } from 'react';
import star from '../src/images/icon-star.svg?url';
import illustration from '../src/images/illustration-thank-you.svg';
import './App.scss';

function App() {
  useEffect(() => {
    const firstContainer = document.getElementById('firstContainer');
    const secondContainer = document.getElementById('secondContainer');
    const ratingContainer = document.getElementById('ratingContainer');
  }, []);

  const [rating, useRating] = useState('');

  function afterSubmit() {
    if(firstContainer.style.display === '') {
      firstContainer.style.display = 'none';
      secondContainer.style.display = 'flex';
    }
  }

  function selectOption(event) {
    useRating(event.target.innerText);
    ratingContainer.childNodes.forEach(node => {
      console.log(node.style.backgroundColor)
      if(node.style.backgroundColor === 'rgb(124, 135, 152)') {
        node.style.backgroundColor = 'hsl(213, 19%, 18%)';
        node.style.color = 'hsl(217, 12%, 63%)'
      }
    })
    event.target.style.backgroundColor = 'hsl(216, 12%, 54%)';
    event.target.style.color = 'hsl(0, 0%, 100%)';
  }

  return (
    <>
      <div id='firstContainer' className='firstContainer'>
        {/*   Rating state start    */}
        <div id='starContainer' className='starContainer'>
          <img className='starIcon' src={star} alt="star" />
        </div>
        <h1 id='title1'>How did we do?</h1>

        <p id='description' className='description'>
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>

        <ul id='ratingContainer' className='ratingContainer'>
          <li  onClick={selectOption}>1</li>
          <li  onClick={selectOption}>2</li>
          <li  onClick={selectOption}>3</li>
          <li  onClick={selectOption}>4</li>
          <li  onClick={selectOption}>5</li>
        </ul>

        <button id='button' type="button" onClick={afterSubmit}>SUBMIT</button>
        {/* Rating state end */}
      </div>
        

      {/* Thank you state start */}

      <div id='secondContainer' className='secondContainer'>
      <div>
        <img src={illustration} alt="illustration" />
      </div>
      <p className='selected'>You selected {rating} out of 5</p>
      {/* You selected <!-- Add rating here --> out of 5 */}
      <p id='title2' className='title2'>Thank you!</p>
      
      <p id='message' className='message'>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
      {/* <!-- Thank you state end --> */}
      </div>
    </>
  )
}

export default App
