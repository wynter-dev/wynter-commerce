import styled from '@emotion/styled';
import Item from '@/components/list/Item';

export default function Content() {
  return (
    <Container>
      {/* TODO Change Slider */ }
      <img src="https://picsum.photos/1084/500" alt="mainImage"/>
      <div className="recommend-area">
        <div className="title">
          <hr/>
          <label>추천 상품</label>
          <hr/>
        </div>
        <div className="list">
          <ul>
            { new Array(16).fill(null).map((item, idx) => (<Item key={ `item_${ idx }` }/>)) }
          </ul>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    width: 1084px;
    margin: 0 auto;
    min-height: 80vh;

    .recommend-area {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        with: 100%;

        .title {
            display: flex;
            flex-direction: row;
            width: 100%;

            hr {
                width: 43%;
                margin: auto;

                :last-child {

                }
            }

            label {
                font-size: 25px;
                font-weight: bold;
                padding: 20px;
            }
        }

        .list {
            ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                list-style-type: none;
                margin: auto 0;
                padding: 0px;
                
            }
        }
    }
`;
