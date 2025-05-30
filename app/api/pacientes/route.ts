import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, cedula, telefono, correo } = body;

    await pool.query(
      `INSERT INTO pacientes (nombre, cedula, telefono, correo)
       VALUES ($1, $2, $3, $4)`,
      [nombre, cedula, telefono, correo]
    );

    return NextResponse.json({ mensaje: 'Paciente guardado con éxito' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al guardar el paciente' }, { status: 500 });
  }
}

