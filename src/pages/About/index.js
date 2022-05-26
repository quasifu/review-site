import style from './About.module.scss';
import appStyle from '../../App.module.scss';

const links = [
  {
    name: 'liquidconceptpools.org',
    url: 'https://www.liquidconceptpools.org',
  },
  {
    name: 'liquidconceptpools.net',
    url: 'https://www.liquidconceptpools.net',
  },
  {
    name: 'liquidconceptpool.com',
    url: 'https://www.liquidconceptpool.com',
  },
  {
    name: 'liquidconceptpools.co',
    url: 'https://www.liquidconceptpools.co',
  },
  {
    name: 'liquidconcept-pools.com',
    url: 'https://www.liquidconcept-pools.com',
  },
  {
    name: 'liquidconceptpools.online',
    url: 'https://www.liquidconceptpools.online',
  },
  {
    name: 'liquidconceptpools.club',
    url: 'https://www.liquidconceptpools.club',
  },
  {
    name: 'liquidconceptpools.biz',
    url: 'https://www.liquidconceptpools.biz',
  },
  {
    name: 'liquidconceptpools.us',
    url: 'https://www.liquidconceptpools.us',
  },
  {
    name: 'liquidconceptspools.com',
    url: 'https://www.liquidconceptspools.com',
  },
];

function About() {
  return (
    <div className={appStyle.wrapper}>
      <h1>Liquid Concept Pools - Residential</h1>
      <div>
        Liquid Concept Pools markets themselves as Best Design, Best Build, and
        Best Price. This site provides real images and real builds.
      </div>
      <div className={style.listWrapper}>
        Other sites that provide reviews are:
        <ul className={style.list}>
          {links.map((link) => (
            <li>
              <a className={style.link} href={`${link.url}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
