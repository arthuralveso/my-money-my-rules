import logoImg from '../../assets/logo.svg';
import { Container, Content, SwitchThemeContainer } from './styles';
import Switch from 'react-switch'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import { lighten } from 'polished'
import { FiMoon, FiSun } from 'react-icons/fi'


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    toggleTheme: () => void;
}

export function Header({ onOpenNewTransactionModal, toggleTheme }: HeaderProps) {
    const { colors, title } = useContext(ThemeContext)


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="mymoneymyrules" />


                <div className="right-content">
                    <SwitchThemeContainer>
                        <FiSun
                            size={75}
                            style={{ marginRight: 10 }}
                        />
                        <Switch
                            onChange={toggleTheme}
                            checked={title === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            onColor={lighten(0.2, colors.headBackground)}
                            offColor={lighten(0.2, colors.headBackground)}

                        />
                        <FiMoon
                            size={75}
                            style={{ marginLeft: 10 }}
                        />

                    </SwitchThemeContainer>

                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova Transação
                    </button>
                </div>
            </Content>
        </Container>
    )
}