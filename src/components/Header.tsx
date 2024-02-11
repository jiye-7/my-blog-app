import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        Home
      </Link>
      <div>
        <Link to='/posts/new'>글 쓰기</Link>
        <Link to='/posts'>게시글</Link>
        <Link to='/profile'>프로필</Link>
      </div>
    </header>
  );
};

export default Header;
