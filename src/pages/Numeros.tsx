import React, { useEffect, useState } from 'react';
import { useZadarma, ZadarmaNumber, ZadarmaBalance } from '@/hooks/useZadarma';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Globe, CreditCard } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Numeros = () => {
  const { loading, getNumbers, getBalance, buyNumber } = useZadarma();
  const [numbers, setNumbers] = useState<ZadarmaNumber[]>([]);
  const [balance, setBalance] = useState<ZadarmaBalance | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [numbersData, balanceData] = await Promise.all([
      getNumbers(),
      getBalance()
    ]);
    
    if (numbersData) setNumbers(numbersData);
    if (balanceData) setBalance(balanceData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Números Virtuales</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Gestiona tus números virtuales de Zadarma desde un solo lugar
            </p>
          </div>

          {/* Balance Card */}
          {balance && (
            <Card className="p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <CreditCard className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Saldo disponible</p>
                  <p className="text-2xl font-bold text-foreground">
                    {balance.balance} {balance.currency}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Numbers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {numbers.map((number, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <Badge variant={number.status === 'active' ? 'default' : 'secondary'}>
                    {number.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {number.number}
                </h3>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Globe className="w-4 h-4" />
                  <span>{number.country}</span>
                  <Badge variant="outline">{number.type}</Badge>
                </div>

                <Button variant="outline" className="w-full">
                  Gestionar
                </Button>
              </Card>
            ))}
          </div>

          {numbers.length === 0 && !loading && (
            <Card className="p-8 text-center max-w-2xl mx-auto">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No tienes números virtuales
              </h3>
              <p className="text-muted-foreground mb-6">
                Compra tu primer número virtual para empezar a recibir llamadas
              </p>
              <Button onClick={() => buyNumber('US', 'mobile')}>
                Comprar Número
              </Button>
            </Card>
          )}
          
          {loading && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Cargando números...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

};

export default Numeros;
