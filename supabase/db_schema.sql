-- Tabla de contactos
create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  phone text,
  created_at timestamp with time zone default now()
);

-- Tabla de conversaciones
create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Tabla de analytics/eventos
create table if not exists analytics (
  id uuid primary key default gen_random_uuid(),
  event text not null,
  user_id uuid,
  meta jsonb,
  created_at timestamp with time zone default now()
);
