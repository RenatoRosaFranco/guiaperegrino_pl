import React from 'react';
import { logo } from '../../Helpers/applicationHelper';
import './style.scss';

const Hero = () => {
  return(
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold text-center brand'>
               {logo}
            </h1>
          </div>
          
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                <h1 className="bold title">
                  Descubra sua Jornada Espiritual com o Guia do Peregrino
                </h1>

                <p className='subtitle'>Um app para ajudar você a viver a experiência do<br/> 
                Movimento de Cursilhos de Cristandade (MCC)</p>
                <br />

                <button className='btn btn-primary btn-lg bold'>
                  <i class="fa-brands fa-apple apple-icon"></i>
                  download
                  <i class="fa-solid fa-right-long right-icon"></i>
                </button>
              </div>

              <div className="col-md-5">
                <div className="jumbotron"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;