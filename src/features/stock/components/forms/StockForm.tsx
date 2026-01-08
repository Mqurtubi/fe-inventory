import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button, MenuItem, Select, Typography } from '@mui/material';
export default function StockForm(){
    return(
        <form className='space-y-5 border'>
            <div className='flex items-center gap-2'>
                <ViewInArIcon color='primary'/>
                <Typography >New Movement</Typography>
            </div>
            <div className=''>
                <Button sx={{backgroundColor:'ButtonHighlight'}} size='large' startIcon={<FileDownloadOutlinedIcon/>}>Stock In</Button>
                <Button  startIcon={<FileUploadOutlinedIcon/>}>Stock Out</Button>
                <Button startIcon={<AutorenewIcon/>}>Adjust</Button>
            </div>
            <div>
                <Select value="Select product">
                    <MenuItem>
                        Mouse
                    </MenuItem>
                    <MenuItem>
                        Keyboard
                    </MenuItem>
                    <MenuItem>
                        monitor
                    </MenuItem>
                </Select>
            </div>
        </form>
    )
}