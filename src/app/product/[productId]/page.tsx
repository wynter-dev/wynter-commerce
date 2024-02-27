'use client'
import styled from '@emotion/styled';
import Header from '@/app/common/Header';

interface Props {
  params: { [key:string]: string; }
}
export default function ProductMain({ params }: Props) {
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="header">
          <div>
            <img src="https://picsum.photos/500/500" alt=""/>
          </div>
          <div>
            상품 타이틀
          </div>
        </div>
        <div>
          상품 상세
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1084px;
    margin: 0 auto;
    .content {
        .header {
            display: flex;
            flex-direction: row;
        }
    }

`;
