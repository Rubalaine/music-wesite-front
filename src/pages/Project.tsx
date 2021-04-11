import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Generic/Button";
import Heading from "../components/Typography/Heading";
import Paragraph from "../components/Typography/Paragraph";
import AbsoluteCenter from "../components/Utils/AbsoluteCenter";
import Spacer from "../components/Utils/Spacer";
import Loader from "./../components/Utils/Loader";

/**
 * TODO:
 * Modificar a api para que o link de download seja um objecto {provedor, link}
 */
const Wrap = styled.div`
  /* box-shadow: var(--morph-shadow-hov); */
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--color-light-1);
`;
const Info = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  border-radius: 10px;
  width: 28rem;
  margin-right: 2rem;
`;
const Mixtapes = () => {
  const params = useParams<{ nome: string; id: string }>();
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<IProjectsResponse>();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: `smooth` });
    document.title = `${params.nome.replaceAll("$$", " ")}`;
    setLoading(true);
    axios
      .get<IProjectsResponse>(`http://localhost:1337/projectos/${params.id}`)
      .then(({ data }) => {
        console.log(data);

        setProject(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Wrap>
      <Heading size="xxl" weight="normal">
        {project?.titulo} - {project?.artista.nome}
      </Heading>

      <Info>
        <Image
          src={`http://localhost:1337${project?.cover.url}`}
          alt={project?.artista.nome + " " + project?.titulo}
          loading="lazy"
        />
        <div>
          <Paragraph weight="normal">
            <b>Artista:</b> {project?.artista.nome}
          </Paragraph>
          <Paragraph weight="normal">
            <b>Titulo:</b> {project?.titulo}
          </Paragraph>
          <Paragraph weight="normal">
            <b>Genéro:</b> {project?.generos.map((el) => el.nome + ", ")}
          </Paragraph>
          <Paragraph weight="normal">
            <b>Formato:</b> {project?.formato}
          </Paragraph>
          <Paragraph weight="normal">
            <b>Tamanho:</b> {project?.tamanho}mb
          </Paragraph>
          <Paragraph weight="normal">
            <b>Lançamento:</b>:{" "}
            {new Date(project?.lancamento || "date").toLocaleDateString(
              "pt-pt",
              {
                month: "long",
                year: "numeric",
                day: "numeric",
              }
            )}
          </Paragraph>
        </div>
      </Info>
      <div>
        <Paragraph weight="normal">
          <b>Descrição: </b>
          {project?.descricao}
        </Paragraph>
        <Spacer />
        <AbsoluteCenter>
          <Button>Baixar</Button>
        </AbsoluteCenter>
        <Spacer />
        <span>tags: {project?.tags}</span>
      </div>
    </Wrap>
  );
};

export default Mixtapes;
