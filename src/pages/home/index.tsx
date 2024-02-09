import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <Link to='/posts/new'>글 쓰기</Link>
          <Link to='/posts'>게시글</Link>
          <Link to='/profile'>프로필</Link>
        </div>
      </header>
      <div className='post__list'>Post list</div>
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  );
};

export default Home;
