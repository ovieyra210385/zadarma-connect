import React, { useEffect, useState } from 'react';
import { useZadarma, CallRecord } from '@/hooks/useZadarma';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Clock, TrendingUp, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Pbx = () => {
  const { loading, getCallHistory, getPbxStats } = useZadarma();
  const [callHistory, setCallHistory] = useState<CallRecord[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [historyData, statsData] = await Promise.all([
      getCallHistory(),
      getPbxStats()
    ]);
    
    if (historyData) setCallHistory(historyData);
    if (statsData) setStats(statsData);
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">PBX en la Nube</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Administra tu centralita virtual con estadísticas en tiempo real
            </p>
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Llamadas hoy</p>
                    <p className="text-2xl font-bold text-foreground">{stats.callsToday || 0}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duración promedio</p>
                    <p className="text-2xl font-bold text-foreground">
                      {formatDuration(stats.avgDuration || 0)}
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Eficiencia</p>
                    <p className="text-2xl font-bold text-foreground">{stats.efficiency || 0}%</p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Call History */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Historial de Llamadas</h3>
            
            {callHistory.length > 0 ? (
              <div className="space-y-4">
                {callHistory.slice(0, 10).map((call) => (
                  <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">
                          {call.from} → {call.to}
                        </p>
                        <p className="text-sm text-muted-foreground">{call.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        {formatDuration(call.duration)}
                      </span>
                      <Badge variant={call.status === 'completed' ? 'default' : 'secondary'}>
                        {call.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No hay llamadas registradas</p>
              </div>
            )}
          </Card>
          
          {loading && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Cargando estadísticas de PBX...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

};

export default Pbx;
