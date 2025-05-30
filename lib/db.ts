export interface Patient {
  id: string
  name: string
  cedula: string
  phone: string
  email: string
  address?: string
  birthDate?: string
  gender?: "Masculino" | "Femenino" | "Otro"
  treatments: number
  status: "Activo" | "Seguimiento" | "Alta"
  notes?: string
  medicalHistory?: MedicalHistory[]
  createdAt: string
  updatedAt: string
}

export interface MedicalHistory {
  id: string
  date: string
  treatment: string
  notes: string
  evolution: string
}

export interface Appointment {
  id: string
  patientId: string
  patientName: string
  date: string
  time: string
  duration: number
  type: string
  notes?: string
  status: "confirmada" | "pendiente" | "cancelada"
  createdAt: string
  updatedAt: string
}

// Mock data
export const mockPatients: Patient[] = [
  {
    id: "1",
    name: "María González",
    cedula: "12345678",
    phone: "+1234567890",
    email: "maria@email.com",
    address: "Calle Principal 123",
    birthDate: "1985-03-15",
    gender: "Femenino",
    treatments: 8,
    status: "Activo",
    notes: "Paciente con lesión de rodilla",
    medicalHistory: [
      {
        id: "1",
        date: "2024-01-15",
        treatment: "Terapia manual",
        notes: "Primera sesión de evaluación",
        evolution: "Buena respuesta inicial",
      },
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    cedula: "87654321",
    phone: "+0987654321",
    email: "carlos@email.com",
    address: "Avenida Central 456",
    birthDate: "1978-07-22",
    gender: "Masculino",
    treatments: 12,
    status: "Seguimiento",
    notes: "Rehabilitación post-operatoria",
    medicalHistory: [],
    createdAt: "2023-12-15T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "3",
    name: "Ana Martínez",
    cedula: "11223344",
    phone: "+1122334455",
    email: "ana@email.com",
    address: "Plaza Mayor 789",
    birthDate: "1990-11-08",
    gender: "Femenino",
    treatments: 5,
    status: "Alta",
    notes: "Tratamiento completado exitosamente",
    medicalHistory: [],
    createdAt: "2023-11-01T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z",
  },
]

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientId: "1",
    patientName: "María González",
    date: "2024-01-20",
    time: "10:00",
    duration: 60,
    type: "Terapia manual",
    notes: "Sesión de seguimiento",
    status: "confirmada",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    patientId: "2",
    patientName: "Carlos Rodríguez",
    date: "2024-01-20",
    time: "14:00",
    duration: 45,
    type: "Rehabilitación",
    notes: "Control post-operatorio",
    status: "pendiente",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
]

// Helper functions for localStorage
export const getPatients = (): Patient[] => {
  if (typeof window === "undefined") return mockPatients
  const stored = localStorage.getItem("patients")
  return stored ? JSON.parse(stored) : mockPatients
}

export const savePatients = (patients: Patient[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("patients", JSON.stringify(patients))
  }
}

export const getAppointments = (): Appointment[] => {
  if (typeof window === "undefined") return mockAppointments
  const stored = localStorage.getItem("appointments")
  return stored ? JSON.parse(stored) : mockAppointments
}

export const saveAppointments = (appointments: Appointment[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }
}
