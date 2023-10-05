import { Box } from '@mui/material'
import Modal from '@mui/material/Modal'

export const UiModal = ({
   children,
   open,
   onClose,
   bgcolor = '#FFFFFF',
   width = '303px',
   height,
   padding = '30px 20px',
   ...rest
}) => {
   const style = {
      width: { width },
      height: { height },
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: { padding },
      borderRadius: '16px',
      backgroundColor: bgcolor === 'blue' ? '#EBF2FC' : '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:focus-visible': {
         outline: '0',
      },
   }

   return (
      <Modal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         {...rest}
      >
         <Box sx={style}>{children}</Box>
      </Modal>
   )
}
