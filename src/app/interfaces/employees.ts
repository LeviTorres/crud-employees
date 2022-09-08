export interface Employee {
  id?: string;
  code_employee: string;
  name: string;
  last_name: string;
  mother_surname: string;
  position: string;
  departament: string;
  manager: string;
  mentor: string;
  carnet: string;
  status: status;
}

export type status = 'ACTIVO' | 'BAJA' | 'REINGRESO';
