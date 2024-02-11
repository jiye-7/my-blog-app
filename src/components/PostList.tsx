import { Link } from 'react-router-dom';

interface PostListProps {
  hasNavigation?: boolean;
}

const PostList = ({ hasNavigation = true }: PostListProps) => {
  return (
    <>
      {hasNavigation && (
        <div className='post__navigation'>
          <div className='post__navigation--active'>전체</div>
          <div>나의 글</div>
          <div>Frontend</div>
          <div>Backend</div>
          <div>Web</div>
          <div>Native</div>
        </div>
      )}

      <div className='post__list'>
        {[...Array(10)].map((e, idx) => (
          <div key={idx} className='post__box'>
            <Link to={`/posts/${idx}`}>
              <div className='post__profile-box'>
                <div className='post__profile' />
                <div className='post__author-name'>totoro@gmail.com</div>
                <div className='post__date'>2024.02.09 금요일</div>
              </div>
              <div className='post__title'>게시글 {idx}</div>
              <div className='post__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                harum vel nemo repudiandae, molestiae dolorem incidunt illum
                enim, dignissimos tenetur esse qui distinctio asperiores dolores
                voluptas. Odit quis quod repellat! Hic necessitatibus accusamus
                odio qui blanditiis dolorem maxime nesciunt laboriosam velit
                aliquid autem aut a animi ipsum praesentium nemo possimus neque
                eligendi ullam, vitae explicabo. Labore suscipit commodi
                veritatis debitis. Mollitia aspernatur inventore quam veniam
                enim harum, reiciendis quibusdam numquam. Harum saepe modi
                pariatur non obcaecati ad provident magni iusto nostrum quidem,
                odit voluptatibus molestias eos, temporibus enim cupiditate
                facilis? Nesciunt reprehenderit sapiente eveniet? Eos ullam
                reiciendis ea placeat error natus earum iste pariatur dolor,
                minus, doloribus aliquid eveniet aut cumque corrupti similique
                accusantium, aspernatur odit amet sunt quo perspiciatis. Qui
                unde sunt, distinctio hic modi rem maiores, sed aliquam impedit
                error deserunt dolore iure praesentium nisi facere ut.
              </div>
              <div className='post__utils-box'>
                <div className='post__edit'>수정</div>
                <div className='post__delete'>삭제</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
