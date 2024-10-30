import React from 'react';
import './style.scss';

const DownloadApp = () => {
  return(
    <section className="downloadApp">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="bold text-center title">Baixe agora!</h3>
            <p className='text-center subtitle'>Baixe o aplicativo para o seu celular.</p>
            <br />

            <div className="col-md-3 col-md-offset-3 text-right">
               <a 
                className='btn btn-default btn-lg'
                href='https://apple.com/apple-store'
                target='_blank'
                rel='noreferrer'
               >
                <i class="fa-brands fa-apple"></i>
                Apple Store
               </a>
            </div>

            <div className="col-md-3 text-left">
              <a 
                className='btn btn-default btn-lg'
                href='https://play.google.com/'
                target='_blank'
                rel='noreferrer'
              >
                <i class="fa-brands fa-google-play"></i>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;