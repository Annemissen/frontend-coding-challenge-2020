import React from 'react';
import { Card } from './card';


interface SplashModalProps {
	title?: string;
	children: JSX.Element | JSX.Element[];
	className?: string;
  }



export const SplashModal = ({ children, title="", className="" }: SplashModalProps) => {
	

	return (
		<div className={`space-y-2 absolute bottom-4 right-5 ${className}`}>
			<Card>
				<Card.InsetBody className={`p-2`}>
					{title !== "" && <div className="text-base mb-1">{title}</div>}
					{children}
				</Card.InsetBody>
			</Card>
		</div>
	)
}
