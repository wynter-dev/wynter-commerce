'use client';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';
import Header from '@/app/common/Header';
import TopBanner from '@/app/common/TopBanner';
import Content from '@/app/main/_components/Content';

export default function Main() {
  return (
    <>
      <Global styles={styles}></Global>
      <Container>
        <TopBanner />
        <Header />
        <Content />
        <div className="footer">footer</div>
      </Container>
    </>
  );
}

const styles = css(`
    body {
      margin: 0px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
`);

const Container = styled.div `

  .footer {
    width: 1084px;
    margin: 0 auto;
    height: 10vh;
  }
`;


