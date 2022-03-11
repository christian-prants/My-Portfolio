import React from 'react';
import Type from '../Layout/Type';

import image from '../../Assets/my_face.jpg';
import classes from './Home.module.css'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";


const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.intro}>
            <h1>Christian Prants</h1>
            <Type />

            <p>Sou um designer procurando uma oportunidade para reingressar na área como Desenvolvedor Full Stack. <br /><br /> 
            Acredito que minha vivência em design traz uma visão sólida voltada para acessibilidade e interfaces rápidas e limpas. 
            Além de possuir experiência passada trabalhando com desenvolvimento Full Stack utilizando C# e SQL para trazer melhorias e manutenções
            em módulos financeiros.  <br /><br />
            </p>

            <div className={classes.links}>
                <div className={classes.icons}>
                    <a href="https://www.linkedin.com/in/christian-prants/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>
                <div className={classes.icons}>
                    <a href="https://github.com/christian-prants/" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <div className={classes.icons}>
                    <a href="https://www.behance.net/the_prants" target="_blank" rel="noopener noreferrer">
                        <FaBehance />
                    </a>
                </div>
            </div>
        </div>

        <div className={classes.support}>
            <img src={image} alt="mememe"/> 
        </div>
      </div>
  )
}

export default Home