import styled from '@emotion/styled';

export default function Item(){
  return (
    <ItemContainer>
      <a>
        <div className="cover-img">
          <img src="https://picsum.photos/250/250" alt=""/>
        </div>
        <div className="info">
          <label>상품 정보</label>
          <label>가격 정보</label>
        </div>
      </a>
    </ItemContainer>
  );
}

const ItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    padding-bottom: 20px;

    .cover-img img {
        border-radius: 5px;
    }
    
    .info {
        display: flex;
        flex-direction: column;
    }
`;
