import { useState } from 'react'
import React from 'react';

import Image from './assets/cat.jpg'
import BodyCard from './components/BodyCard';
import './App.css';

const skills = {
  exploredSkills: ["ASP. NET Core","aiogram", "Django", "P-SQL"],
  unexploredSkills: ["React", "TypeScript", "Docker", "Golang", "Node.js", "Kubernetes", "OpenAPI", "YOLO", "Keras","PyTorch"]
};

function App() {

  return (
    <div className="app">
      <BodyCard
        title ="Мои компетенции"
        name="Гиясов Никита Рушенович"
        image={Image}
        skills={skills}
      />
    </div>
  );
}

export default App;