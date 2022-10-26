import homeIcon from '../assets/icons8-home.svg';
import pieChart from '../assets/bar-chart-2.png';
import backArrow from '../assets/arrow-back.svg';
import download from '../assets/download.png';
import { Link, Outlet, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const homeBack = pathname === '/results' ? backArrow : homeIcon;
  const chartDownload = pathname === '/results' ? download : pieChart;
  const title = pathname === '/results' ? 'EXPORT' : 'RESULT';

  return (
    <>
      <nav>
        <div className="icon">
          <img src={homeBack} alt="home" />
        </div>
        <div className="action">
          <div className="icon">
            <img src={chartDownload} alt="result" />
          </div>
          <Link to={'/results'} className="details">
            {title}
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
