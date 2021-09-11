import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: ${(props) => props.theme.colors.background};
        --red: ${(props) => props.theme.colors.textRed};
        --head-background: ${(props) => props.theme.colors.headBackground};

        --green: ${(props) => props.theme.colors.green};
        --head-button: ${(props) => props.theme.colors.headButton};

        --text-title: ${(props) => props.theme.colors.textTitle};
        --text-body: ${(props) => props.theme.colors.textBody};

        --shape: ${(props) => props.theme.colors.shape};

    }
    


    *,
    *::after,
    *::before {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: var(--background);
        
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        transition: all 0.2s;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

    }

    .reacte-close-modal {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;
