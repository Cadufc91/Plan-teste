import React from 'react';
import Playing1 from '../../assets/images/playing.jpg';
import Playing2 from '../../assets/images/playing2.png';
import Playing3 from '../../assets/images/playing3.png';
import Controller from '../../assets/images/controller.png';

import { FiArrowDownRight } from "react-icons/fi";

import './Games.css';

const Games = () => {
    return(
        <section id='o-que-fazemos'>
            <div className='description'>
                <h1 className='title-link'>/O que fazemos</h1>
                <h2 className='title-section'>/Games</h2>
                <h3 className='section-info'>Desenvolvimento de games digitais</h3>
                <h4 className='section-details'>Empresa especializada em desenvolvimento games digitais e gamificação</h4>
                <p className='section-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, id? Totam neque nihil rem molestias! Sed suscipit facere voluptas delectus rerum expedita cum, laboriosam quasi nesciunt, omnis aspernatur saepe nemo.</p>
            </div>
            <div className='game-example'>
                <div className='game-example-item1'>
                    <img src={Playing1} alt="Playing1" />
                    <p className='game-description'>A <span className='bold-text'>PlanXP</span> tem uma equipe qualificada para o <span className='bold-text'>desenvolvimento de jogos digitais</span> para <span className='bold-text'>dispositivos móveis</span> (smartphones, tablets e afins).</p>
                </div>
                <div className='game-example-item2'>
                    <img src={Playing2} alt="Playing2" />
                    <p className='game-description'>Desenvolvemos games para anunciar seus produtos e serviços, através da <span className='bold-text'>gamificação</span> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).</p>
                </div>
                <div className='game-example-item3'>
                    <img src={Playing3} alt="Playing3" />
                    <p className='game-description'>Utilizando as últimas tecnologias para a <span className='bold-text'>criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>
                </div>
            </div>
            <div className='game-example2'>
                <img className='controller-image' src={Controller} alt="" />
                <p>Experimente inovar com a <span className='bold-text'>PlanXP</span> para <span className='bold-text'>desenvolver seus jogos digitais!</span></p>
                <div className='cta-games'>
                    <a href="#contato">Entre em contato agora mesmo</a>
                    <FiArrowDownRight />
                </div>
            </div>
        </section>
    )
}

export default Games