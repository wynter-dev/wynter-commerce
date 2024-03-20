'use client';
import styled from '@emotion/styled';

export default function User() {
  return (
    <Container>
      <div className="input-area">
        <input type="text" placeholder="Email"/>
      </div>
      <div className="input-area">
        <input type="text" placeholder="password"/>
      </div>
      <div className="login-btn">
        <button>Sign in</button>
      </div>
      <div>
        You don't have an account? <a href="/user/sign" className="signup">sign up</a>
      </div>
    </Container>
  );
}

const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input-area {
        margin-bottom: 10px;

        input {
            line-height: 30px;
            width: 300px;
        }
    }

    .login-btn {
        button {
            margin-bottom: 10px;
            line-height: 30px;
            width: 310px;
            background-color: #ff9e30;
            border: #ff9e30 1px solid;
            border-radius: 2px;
            color: white;
        }
    }
    
    .signup {
        color: #ff9e30;
    }

`;
