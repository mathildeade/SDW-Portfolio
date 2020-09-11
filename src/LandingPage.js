import React from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'

const LandingPage = () => {
    return <div>
        <Navbar />
        <Header 
        title="Mon site"
        description="apprenez-en plus sur moi"
        button text="Me contacter"
        imageUrl="https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/d/8/7d82ddcc55_126034_ocean-dudarev-mikhail-fotolia-01.jpg"
    />

        <Header 
        title="Mon portfolio"
        description="Voici des exemples de mon travail"
        button text="Voir mon portfolio"/>
    </div>
}

export default LandingPage