export interface InterfaceEczane {
  name: string;
  dist: string;
  address: string;
  phone: number;
  loc:string;
}
export interface APIResponse {
  success: boolean;
  result: [InterfaceEczane];
}
