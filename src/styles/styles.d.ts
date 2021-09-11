import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      textRed: string;
      headBackground: string;
      green: string;
      headButton: string;
      textTitle: string;
      textBody: string;
      shape: string;
      border: string;
    };
  }
}
