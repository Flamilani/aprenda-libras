import ReactJoyride from "react-joyride";

const Guide = (props) => {
    return (
        <ReactJoyride
        steps={props.steps}
        continuous={true}
        scrollToFirstStep
        showSkipButton={true}
        showProgress={true}
        run={props.run}
        locale={{
            last: "Último",
            next: 'Próximo',
            skip: "Pular",
            back: 'Voltar',
            close: 'Fechar'
        }}
        styles={{
            options: {
                zIndex: 10000,
                primaryColor: '#3f51b5',
            },
        }}
    />
    )
}
export default Guide;