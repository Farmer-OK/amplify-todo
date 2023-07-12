import { configure } from '@/my-aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import React, { FC } from 'react';
 
configure()

type LoginRequiredProps = React.PropsWithChildren<{}>;
 
export const LoginRequired: FC<LoginRequiredProps> = ({ children }) => { // --- ②
 return <Authenticator>{children}</Authenticator> // --- ③
}