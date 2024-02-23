import styled from '@emotion/styled';

export default function Header(){
  return (
    <HeaderContainer className="header">
      <div className="header-top">
        <a>로그인</a>
        <a>회원가입</a>
        <a>고객센터</a>
        <a>마이페이지</a>
        <a>장바구니</a>
      </div>
      <div>

      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  height: 10vh;
  width: 1084px;
  margin: 0 auto;
  .header-top {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 10px 0;

    a {
      font-size: 12px;
      color: #999999;
      cursor: pointer;
    }
    a:not(:last-child){
      padding-right: 20px;
    }

  }
`;
