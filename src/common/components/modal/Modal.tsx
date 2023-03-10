import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {IconButton, Stack} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
type BasicModalType = {
    children: React.ReactNode
    text: string
    action: () => void
    disabledButton: boolean
}
export const BasicModal: React.FC<BasicModalType> = ({
                                                         children,
                                                         disabledButton, text, action
                                                     }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => {
        setOpen(false)
        action()
    }

    return (
        <div>
            <IconButton onClick={handleOpen} disabled={disabledButton}>
                {children}
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-description" sx={{mt: 2, mb:6}}>
                        {text}
                    </Typography>
                    <Stack direction={"row"}   justifyContent={"space-between"}>
                        <Button variant={"contained"} onClick={handleSubmit}>Подтвердить</Button>
                        <Button variant={"contained"} onClick={handleClose}>Отменить</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
