import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.style.backgroundColor};
    ${({ theme }) => theme.strings.backgroundImage && `background-image: url('${theme.strings.backgroundImage}'); background-size: cover;`}
	padding: 12px 24px;
`;

const Inner = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
	max-width: 300px;
    width: 100%;
`;

const Container = ({ children }) => (
    <Wrapper>
        <Inner>{children}</Inner>
    </Wrapper>
);

export default Container;