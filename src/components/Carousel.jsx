import Carousel from 'react-bootstrap/Carousel';

export const Slider=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent-qro1-2.xx.fbcdn.net/v/t31.18172-8/12697034_984721611603112_8835009311774460861_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=ls68jO_VSRYAX_psEEI&_nc_ht=scontent-qro1-2.xx&oh=00_AfALHaXbWVF2bxclpY6s3iGqwbsJvc8ESYCjB1m93-frfw&oe=6380DE0B"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;