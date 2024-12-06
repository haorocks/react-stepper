import React, { useState } from "react";
import styled from "styled-components";

import { IconCheck } from "../SVGs";

const steps = [
	{
		key: 0,
		label: "Step 1",
		content: "Step 1",
	},
	{
		key: 1,
		label: "Step 2",
		content: "Step 2",
	},
	{
		key: 2,
		label: "Step 3",
		content: "Step 3",
	},
	{
		key: 3,
		label: "Step 4",
		content: "Step 4",
	},
	{
		key: 4,
		label: "Step 5",
		content: "Step 5",
	},
];

const MIN_STEP = 0;
const MAX_STEP = 4;

export function Stepper() {
	const [currentStep, setCurrentStep] = useState(1);

	const handlePrevStep = () => {
		if (currentStep > MIN_STEP) setCurrentStep((s) => s - 1);
	};

	const handleNextStep = () => {
		if (currentStep < MAX_STEP) setCurrentStep((s) => s + 1);
	};

	return (
		<div>
			<StepHeader>
				{steps.map((s, index) => (
					<React.Fragment key={s.key}>
						{currentStep > index && (
							<StepWrapper>
								{index > 0 && <StepperTrail />}
								<FlexWrapper>
									<FinishedStep onClick={() => setCurrentStep(index)}>
										<IconCheck />
									</FinishedStep>
								</FlexWrapper>
								<Label style={{ color: "#19c0ff" }}>{s.label}</Label>
							</StepWrapper>
						)}
						{currentStep === index && (
							<StepWrapper>
								{index > 0 && <StepperTrail />}
								<FlexWrapper>
									<CurrentStep onClick={() => setCurrentStep(index)}>
										<CurrentStepDot />
									</CurrentStep>
								</FlexWrapper>
								<Label style={{ color: "#19c0ff" }}>{s.label}</Label>
							</StepWrapper>
						)}
						{currentStep < index && (
							<StepWrapper>
								{index > 0 && <StepperTrail style={{ backgroundColor: "#E5E7EB" }} />}
								<FlexWrapper>
									<Step onClick={() => setCurrentStep(index)}>{index + 1}</Step>
								</FlexWrapper>
								<Label>{s.label}</Label>
							</StepWrapper>
						)}
					</React.Fragment>
				))}
			</StepHeader>
			<FlexWrapper>
				<StepContent>{steps[currentStep]?.content}</StepContent>
			</FlexWrapper>
			<FlexWrapper>
				{currentStep > MIN_STEP ? <Button onClick={handlePrevStep}>PREVIOUS</Button> : <FakeButton />}
				{currentStep < MAX_STEP ? <Button onClick={handleNextStep}>NEXT</Button> : <FakeButton />}
			</FlexWrapper>
		</div>
	);
}

const StepHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 48px;
`;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
`;

const StepWrapper = styled.div`
	flex: 1;
	position: relative;
`;

const FinishedStep = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	background-color: #19c0ff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const CurrentStep = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	border: 2px solid #19c0ff;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	cursor: pointer;
`;

const CurrentStepDot = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 12px;
	background-color: #19c0ff;
`;

const Step = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	border: 2px solid #e5e7eb;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	color: #65686f;
	cursor: pointer;
`;

const Label = styled.div`
	text-align: center;
	font-size: 12px;
	font-weight: 600;
	line-height: 18px;
	margin-top: 12px;
	color: #65686f;
`;

const StepperTrail = styled.div`
	position: absolute;
	top: 20px;
	right: calc(50% + 32px);
	height: 2px;
	border-radius: 2px;
	width: calc(100% - 64px);
	background-color: #19c0ff;
`;

const StepContent = styled.div`
	width: 100%;
	height: 40vh;
	margin: 24px;
	border: 1px solid #e5e7eb;
	border-radius: 20px;
	font-size: 24px;
	font-weight: 600;
	color: #65686f;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
`;

const Button = styled.button`
	width: 180px;
	height: 50px;
	border: 1px solid #e5e7eb;
	outline: none;
	border-radius: 50px;
	font-size: 14px;
	font-weight: 600;
	color: #65686f;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-sizing: border-box;
	background-color: transparent;
`;

const FakeButton = styled.div`
	width: 180px;
	height: 50px;
`;
