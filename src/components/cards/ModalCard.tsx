import { ReactNode, Ref, forwardRef } from 'react';

// @mui
import { SxProps } from '@mui/material/styles';
import Card from '@mui/material/Card';

interface Props {
  children?: ReactNode;
  sx?: SxProps;
}

const modalCardSX = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  borderRadius: 4,
  overflow: 'hidden'
};

/***************************  MODAL - CARD  ***************************/

function ModalCard({ children, sx, ...rest }: Props, ref: Ref<HTMLDivElement>) {
  return (
    <Card sx={{ ...modalCardSX, ...sx }} ref={ref} {...rest}>
      {children}
    </Card>
  );
}

export default forwardRef(ModalCard);
