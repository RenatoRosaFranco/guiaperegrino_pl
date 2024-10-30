import React from 'react';
import './style.scss';

const Features = () => {
  return(
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <div className="row">
              <div className="col-md-3">
                <div className="panel panel-default feature">
                  <div className="panel-body text-center">
                    <h3 className="bold title">Conteúdo Espiritual</h3>
                    <p className='description'>Reflexões, Orações e meditações para o seu dia a dia</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default feature">
                  <div className="panel-body text-center">
                    <h3 className="bold title">Desafios e Missões</h3>
                    <p className='description'>Participe de desafios que irão enriquecer sua jornada espiritual.</p>                    
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default feature">
                  <div className="panel-body text-center">
                    <h3 className="bold title">A Estrutura do MCC</h3>
                    <p className='description'>Conheça os a estrutura do Movimento de Cursilho de Cristandade</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default feature">
                  <div className="panel-body text-center">
                    <h3 className="bold title">Agenda e Eventos do MCC</h3>
                    <p className='description'>Fique por dentro de Encontros, Ultreias e Assembleias do MCC</p>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;