// @project
import Register from '@/blocks/auth/Register';

/***************************  REGISTER - DATA  ***************************/

const data = {
  heading: 'Sign up',
  caption: 'Start your 30-day free trial'
};

/***************************  BLOCK - REGISTER  ***************************/

export default function BlockRegister() {
  return <Register {...data} />;
}
