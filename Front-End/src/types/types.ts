interface User {
  token: string;
  email: string;
  is_authenticated: boolean;
  nep_id?: number;
  ie_id?: number;
  esp_pb_id?: number;
  response: string;
  EMPRESA: string;
  nomeCompleto: string;
}

interface LocalTrabalhoSelect {
  id: number;
  nome: string;
}