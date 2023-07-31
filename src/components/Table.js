import React,{useState} from 'react'
import { Button,Avatar,ListItemIcon,ListItemText,ListItemButton,Accordion, AccordionDetails, AccordionSummary, CardMedia, Chip, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BASE_URL } from '../api';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { red, green,grey } from '@mui/material/colors';
import TerminalIcon from '@mui/icons-material/Terminal';
import { FormControl,Input,InputLabel } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef,GridToolbar } from '@mui/x-data-grid';
import { ContactSupport } from '@material-ui/icons';
import {GridApi, GridCellValue } from '@mui/x-data-grid';
import { Modal, Backdrop, Fade } from '@material-ui/core';




export default function Table({qnTableColums}) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);    
    };

    /* MODAL */
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /* ***** */
  const handleClick = (event, cellValues) => {
    
    if (event.type == "click") {
      console.log(cellValues.row["qnId"]);
      handleOpen();
    }
  };

    const handleCellClick = (param, event) => {
      event.stopPropagation();
    };
    
    const handleRowClick = (param, event) => {
      event.stopPropagation();
    };


    //Agregar las columnas correspondientes.
      const GridColDef = [
        {
          field: "Acciones",
          renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  //handleClick(event, cellValues);
                  
                }}
              >
                Editar
              </Button>
            );
          }
        },
        // { field: 'id', headerName: 'Id', width: 75 },
        { field: 'cantidad', headerName: 'No. Primo Mersenne', width: 400,headerAlign: 'center', align: 'center' },
        // { field: 'activo', headerName: 'activo', width: 130,hide:true}
            ];

      const getRowId = (qnTableColums) => {
        return qnTableColums.id;
      };
      
  return (
    
    <div style={{ height: '100%', width: '100%', maxWidth:650}}>
     <DataGrid
       rows={qnTableColums}
       columns={GridColDef}
       pageSize={10}
       getRowId = {getRowId}
       autoHeight 
       autoWidth 
       slots={{ toolbar: GridToolbar }}
       
     />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} nodeRef={open}>
          <div>
            Contenido del Modal
          </div>
        </Fade>
      </Modal>
   </div>
  )}