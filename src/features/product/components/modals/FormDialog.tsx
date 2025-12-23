import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {  InputLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { createProduct } from '../../api';
import type { FormDialogProps, ProductFormValues } from '../../type';
export default function FormDialog({open,handleClose,onSuccess}:FormDialogProps) {
    const [form,setForm]=useState<ProductFormValues>({
        name:"",
        description:"",
        price:0,
        currentStock:0
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target

        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await createProduct(form)
    console.log(data)
    onSuccess(data.data.data)
    handleClose();
    setForm({
        name:"",
        description:"",
        price:0,
        currentStock:0
    })
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent sx={{width:"600px"}}>
          <form onSubmit={handleSubmit} id="subscription-form" className='space-y-6'>
            <div>
                <InputLabel>Name Product</InputLabel>
                <TextField placeholder='' sx={{width:"100%"}} type='text' value={form.name} onChange={handleChange} name='name'/>
            </div>
            <div>
                <InputLabel>Description Product</InputLabel>
                <TextField placeholder='' sx={{width:"100%"}} type='text' value={form.description} onChange={handleChange} name='description'/>
            </div>
            <div>
                <InputLabel>Stock Product</InputLabel>
                <TextField placeholder='' sx={{width:"100%"}} type='number' value={form.currentStock} onChange={handleChange} name='currentStock'/>
            </div>
            <div>
                <InputLabel>Price Product</InputLabel>
                <TextField placeholder='' sx={{width:"100%"}} type='number' value={form.price} onChange={handleChange} name='price'/>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Create 
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
