import "../assets/css/home.scss"
import logo from "../assets/svgs/ALTER_1.svg"
import croatia from "../assets/icons/croatia.png"
import usa from "../assets/icons/usa.png"
import ruthenia from "../assets/icons/rusyn.png"
import playIcon from "../assets/icons/play.svg"

const Home = () => {

  return (
    <div className="home">
      <nav>
        <div>
          <img src={logo} />
          <h3>MMU Srijem</h3>
        </div>

        <ul>
          <li>Naslovna</li>
          <li>Arhiva</li>
          <li>Djelatnosti</li>
          <li>O nama</li>
          <li><img src={croatia} /></li>
        </ul>

      </nav>

      <header>
        <div className="header-text">
          <h1>Ovdje smo zbog <span>vas</span>, budi dio <span>promjene</span>!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi eveniet sed voluptate repellat natus. Reprehenderit a cum voluptas sed, ab illo perferendis. Libero consectetur aut autem architecto impedit sunt nulla, incidunt harum! Quod consequatur ipsum optio deleniti quas aperiam eaque excepturi modi recusandae expedita fugit aliquam quibusdam, inventore repudiandae labore corrupti? Omnis non autem, quos accusamus in suscipit nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nesciunt cupiditate iusto debitis quibusdam voluptatibus vitae facere quisquam ipsa? Sequi?</p>
        </div>
        <div className="header-player">
          <section>
            <img src={playIcon} alt="play button" />
            <h1>Song name</h1>
          </section>
        </div>
      </header>
    </div>
  )
}

export default Home