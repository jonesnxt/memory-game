import styled from 'styled-components';

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    width: 100%;
`;

export default CardContainer;