/// <reference types="react-scripts" />
interface IArtista {
  id: number;
  biografia: string;
  nome: string;
  created_at: string;
  updated_t: string;
}
interface ICoverImage {
  url: string;
  ext: string;
  id: number;
  created_at: string;
  updated_t: string;
}
interface IGenero {
  id: number;
  nome: string;
  created_at: string;
  updated_t: string;
}
interface IProjectsResponse {
  id: string;
  artista: IArtista;
  categoria: string;
  cover: ICoverImage;
  descricao: string;
  destaque: true | false;
  formato: string;
  generos: IGenero[];
  lancamento: string;
  participantes: IArtista[];
  tags: string;
  tamanho: number;
  titulo: string;
  url: string;
}
