import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <h3 className="bold">MCC do Brasil</h3>
              <p>2024 &copy; Movimento de Cursilhos de Cristandade do Brasil</p>
              <br />

              <p><span className='bold'>Guia do Peregrino</span>
              <br/> Todos os direitos reservados.</p>
            </div>

            <div className="col-md-5 text-center">
              <ul className="list-unstyled list-inline social-links">
                <li>
                  <a 
                    href='https://facebook.com/CursilhoBrasil' 
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a 
                    href='https://instagram.com//cursilho_brasil_oficial/' 
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a 
                    href='https://www.youtube.com/channel/UC0rm0ETCFcOXXQNQNXrQuSg' 
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h4 className="bold">Links Úteis</h4>
              <ul className="list-unstyled list-inline internal-links">
                <li>
                  <a 
                    href='https://cursilho.org.br/nossamissao'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a 
                    href='https://cursilho.org.br/nossamissao'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a href='mailto:suporte@guiadoperegrino.com.br'>
                    Contato
                  </a>
                </li>
              </ul>
              <br />

              <h4 className="bold">O MCC</h4>
              <ul className="list-unstyled list-inline internal-links">
                <li>
                  <a
                    href='https://www.cursilho.org.br/quem-somos/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.cursilho.org.br/nossamissao/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Missão
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.cursilho.org.br/opatrono/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Patrono
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
