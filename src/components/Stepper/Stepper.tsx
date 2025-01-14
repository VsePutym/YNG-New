import { Paper, Step, StepContent, StepLabel } from '@mui/material'
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import { Box, Button, Typography } from '@mui/material/'
import styles from '@Styles/Stepper.module.scss'

const steps = [
	{
		label: 'Выбор качественных ингредиентов',
		description: `Мы заботимся о вашем здоровье, поэтому используем только свежие и органические продукты. Каждое блюдо готовится из высококачественных ингредиентов, которые сохраняют свои питательные свойства и вкус.`,
	},
	{
		label: 'Приготовление с любовью и вниманием',
		description:
			'Каждое блюдо создается с особой заботой нашими шеф-поварами, которые придерживаются принципов правильного питания. Мы стремимся сохранять баланс между вкусом и пользой, избегая использования вредных добавок.',
	},
	{
		label: 'Наслаждение в уютной атмосфере',
		description: `Наш ресторан предлагает комфортную обстановку, где вы можете насладиться вкусными и полезными блюдами. Будь то легкий перекус или полноценный обед, мы стремимся сделать каждый визит особенным.`,
	},
];
const StepperFC = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	
	const handleReset = () => {
		setActiveStep(0);
	};
	
	return (
		<div className={styles.stepper}>
			<section>
				<h2>Почему выбирают нас?</h2>
				<Box sx={{ maxWidth: 600 }}>
					<Stepper activeStep={activeStep} orientation="vertical">
						{steps.map((step, index) => (
							<Step key={step.label}>
								<StepLabel
									optional={
										index === steps.length - 1 ? (
											<Typography variant="caption">Последний шаг</Typography>
										) : null
									}
								>
									{step.label}
								</StepLabel>
								<StepContent>
									<Typography sx={{textAlign: 'start'}}>{step.description}</Typography>
									<Box sx={{ mb: 2 }}>
										<Button
											variant="contained"
											onClick={handleNext}
											sx={{ mt: 1, mr: 1 }}
										>
											{index === steps.length - 1 ? 'Конец' : 'Вперёд'}
										</Button>
										<Button
											disabled={index === 0}
											onClick={handleBack}
											sx={{ mt: 1, mr: 1 }}
										>
											Назад
										</Button>
									</Box>
								</StepContent>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length && (
						<Paper square elevation={0} sx={{ p: 3 }}>
							<Typography>Поэтому мы заботимся о вашем здоровье</Typography>
							<Button variant="contained" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
								Заново
							</Button>
						</Paper>
					)}
				</Box>
			</section>
		</div>
	);
}

export default StepperFC;