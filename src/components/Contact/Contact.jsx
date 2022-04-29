import React from 'react';
import { FiArrowDownRight, FiFacebook, FiInstagram, FiYoutube, FiMapPin } from "react-icons/fi";
import Grupo from '../../assets/images/gpm.png';
import Plan from '../../assets/images/logo.png';
import Full from '../../assets/images/full-up.png'

import './Contact.css';

const Contact = () =>{
    return(
        <section id='contato'>
            <div className='contact-form'>
                <h1 className='form-title'>/Contato</h1>
                <p className='form-description'>Gostaria de saber mais sobre as inovações tecnológicas e também quer oferecer novas experiencias aos seus clientes? Então entre em contato e marque um encontro real conosco para conversarmos sobre as infinitas possibilidades do mundo virtual.</p>
                <form className='form-table' action="">
                    <label htmlFor="name">Nome:</label>
                    <input id='name' type="text" />
                    <div className='form-table-contact'>
                        <span>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" />
                        </span>
                        <span>
                            <label htmlFor="tel">Telefone:</label>
                            <input type="tel" name="tel" id="tel" />
                        </span>
                    </div>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </form>
                <div className='submit-section'>
                    <h5>Enviar</h5>
                    <FiArrowDownRight />
                </div>
            </div>
            <div className='social'>
                <div className='social-media'>
                    <h3 className='social-media-title'>Siga-nos</h3>
                    <p>Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</p>
                    <div className='social-media-buttons'>
                        <a href='#facebok'><FiFacebook className='facebook'/></a>
                        <a href='#instagram'><FiInstagram className='instagram'/></a>
                        <a href='#youtube'><FiYoutube className='youtube'/></a>
                    </div>
                </div>
                <div className='address'>
                    <div className='address-top'>
                            <FiMapPin />
                            <h3 className='adress-top-title'>/RS</h3>
                    </div>
                    <p>Rua Onze de Junho, 243 <br></br>
                        Novo Hamburgo/RS <br></br>
                        Brasil <br></br>
                        +55 51 98229.0400
                    </p>
                    <a href='#g' className='address-map'>
                        <h5 className='address-map-title'>Ver no google maps</h5>
                        <FiArrowDownRight />
                    </a>
                </div>
                <div className='address'>
                    <div className='address-top'>
                        <FiMapPin />
                        <h3 className='adress-top-title'>/SP</h3>
                    </div>
                    <p>Rua Ibijaú, 355/Sala 1309 <br></br>
                        São Paulo/SP <br></br>
                        Brasil<br></br>
                        +55 11 98871.8556
                    </p>
                    <a href='#g' className='address-map'>
                        <h5 className='address-map-title'>Ver no google maps</h5>
                        <FiArrowDownRight />
                    </a>
                </div>
                <div className='companies1'>
                    <img src={Grupo} alt="Grupo Plan Mkt" />
                    <p className='companies-description'>A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.</p>
                    <span>
                        <h5 className='companies-cta'>Conheça </h5>
                        <FiArrowDownRight />
                    </span>
                </div>
                <div className='companies2'>
                    <img src={Plan} alt="Plan Marketing" />
                    <p className='companies-description'>A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.</p>
                    <span>
                        <h5 className='companies-cta'>Conheça </h5>
                        <FiArrowDownRight />
                    </span>
                </div>
                <div className='companies3'>
                    <img src={Full} alt="Full Up" />
                    <p className='companies-description'>A FullUp é um agência especializada em branding, design e campanhas.</p>
                    <span>
                        <h5 className='companies-cta'>Conheça </h5>
                        <FiArrowDownRight />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact