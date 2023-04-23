import CMProps from "./Props/ConfigProps";
import ArticulationProps from "./Props/ArticulationProps";
import DirectProps from "./Props/DirectionalityProps";
import StepWizard from "react-step-wizard";

const Steppers = () => {
    
    return (
        <StepWizard initialStep={2}>
            <CMProps stepName={"basic"} />
            <div className="fundoCorpo bodyPoint">
                <ArticulationProps type="corpo" />
            </div>
            <DirectProps />
        </StepWizard>
    )
}

export default Steppers;