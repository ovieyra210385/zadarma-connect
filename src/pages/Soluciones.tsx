
import React from 'react';
import Navigation from '@/components/Navigation';
import SolucionesHeader from '@/components/soluciones/SolucionesHeader';
import IndustriesGrid from '@/components/soluciones/IndustriesGrid';
import SolutionTypes from '@/components/soluciones/SolutionTypes';
import CustomSolutions from '@/components/soluciones/CustomSolutions';

const Soluciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SolucionesHeader />
      <IndustriesGrid />
      <SolutionTypes />
      <CustomSolutions />
    </div>
  );
};

export default Soluciones;
