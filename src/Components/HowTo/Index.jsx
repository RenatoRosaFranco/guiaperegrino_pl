import React from 'react';
import './style.scss';

const HowTo = () => {
  return(
    <section className="howTo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3 col-md-offset-2">
              <h3 className="bold">Passo 1</h3>
              <p className='description'>Baixe o app na 
                <span className='bold'> Apple Store</span> ou 
                <span className='bold'> Google Play</span></p>
            </div>

            <div className="col-md-3">
              <h3 className="bold">Passo 2</h3>
              <p className='description'>
                <span className='bold'>Crie sua conta</span> e personalize sua experiência</p>
            </div>

            <div className="col-md-3">
               <h3 className="bold">Passo 3</h3>
               <p className='description'>Comece sua peregrinação espiritual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowTo;