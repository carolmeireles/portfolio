import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          titulo="Preciatta Pizzaria"
          descricao="Site completo feito com Bootstrap"
          link="https://preciatta-pizzaria.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Agenda de contatos"
          descricao="Feita com JavaScript"
          link="https://agenda-contatos-hazel.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="e-Bookstore"
          descricao="Página inicial de uma livraria"
          link="https://e-library-rose.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="CosmoVision"
          descricao="Landing-page responsiva"
          link="https://cosmovision.vercel.app/"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
