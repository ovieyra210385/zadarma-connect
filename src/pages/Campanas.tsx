import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Campanas = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [form, setForm] = useState({
    name: '',
    message: '',
    recipients: '', // separados por coma
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  async function fetchCampaigns() {
    setLoading(true);
    setError('');
    const { data, error } = await supabase.from('campaigns').select('*').order('created_at', { ascending: false });
    if (error) setError(error.message);
    else setCampaigns(data || []);
    setLoading(false);
  }

  async function handleCreateCampaign(e) {
    e.preventDefault();
    setSending(true);
    setError('');
    setSuccess('');
    if (!form.name || !form.message || !form.recipients) {
      setError('Todos los campos son obligatorios');
      setSending(false);
      return;
    }
    // Guardar campaña en Supabase
    const { error } = await supabase.from('campaigns').insert([
      {
        name: form.name,
        message: form.message,
        recipients: form.recipients,
        status: 'pendiente',
      },
    ]);
    if (error) setError(error.message);
    else {
      setSuccess('Campaña creada correctamente');
      setForm({ name: '', message: '', recipients: '' });
      fetchCampaigns();
    }
    setSending(false);
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">Campañas Masivas</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl text-center mx-auto">Gestiona y programa envíos masivos de mensajes, plantillas certificadas y segmentación avanzada.</p>

        <form onSubmit={handleCreateCampaign} className="bg-green-50 border border-green-200 rounded-xl p-8 shadow mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Crear nueva campaña</h2>
          <div className="mb-4">
            <input
              className="border rounded px-3 py-2 w-full mb-2"
              placeholder="Nombre de la campaña"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <textarea
              className="border rounded px-3 py-2 w-full mb-2"
              placeholder="Mensaje a enviar"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
              rows={3}
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Números destinatarios (separados por coma, ej: 5215551112222,5215553334444)"
              value={form.recipients}
              onChange={e => setForm({ ...form, recipients: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white rounded px-6 py-2 mt-2 hover:bg-green-700 disabled:opacity-50"
            disabled={sending}
          >
            {sending ? 'Creando...' : 'Crear Campaña'}
          </button>
          {success && <div className="text-green-600 mt-4">{success}</div>}
          {error && <div className="text-red-600 mt-4">{error}</div>}
        </form>

        <div className="bg-white border rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Historial de campañas</h2>
          {loading ? (
            <div className="text-center py-8">Cargando campañas...</div>
          ) : campaigns.length === 0 ? (
            <div className="text-center text-gray-500">No hay campañas registradas.</div>
          ) : (
            <table className="min-w-full bg-white border rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Nombre</th>
                  <th className="py-2 px-4 border-b">Mensaje</th>
                  <th className="py-2 px-4 border-b">Destinatarios</th>
                  <th className="py-2 px-4 border-b">Estado</th>
                  <th className="py-2 px-4 border-b">Creado</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c, i) => (
                  <tr key={c.id || i} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{c.name}</td>
                    <td className="py-2 px-4 border-b max-w-xs truncate">{c.message}</td>
                    <td className="py-2 px-4 border-b max-w-xs truncate">{c.recipients}</td>
                    <td className="py-2 px-4 border-b">{c.status}</td>
                    <td className="py-2 px-4 border-b">{c.created_at ? new Date(c.created_at).toLocaleString() : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Campanas;
