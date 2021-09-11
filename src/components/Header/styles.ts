import styled from "styled-components";

export const Container = styled.header`
  background: var(--head-background);
  transition: all 0.2s;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--head-button);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .right-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 23rem;
  }
`;

export const SwitchThemeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 8rem;

  svg {
    color: #fff;
  }
`;
