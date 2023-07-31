import { FormHelperText,Avatar,ListItemIcon,ListItemText,ListItemButton,Accordion, AccordionDetails, AccordionSummary, Chip, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { red, green,grey } from '@mui/material/colors';
import TerminalIcon from '@mui/icons-material/Terminal';
import { FormControl,Input,InputLabel } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef,GridToolbar, elGR } from '@mui/x-data-grid';
import { ContactSupport } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS, BASE_URL } from '../api'
import useStateContext from '../hooks/useStateContext'
import { Card, CardContent, CardMedia, CardHeader, Typography, LinearProgress } from '@mui/material'
import { getFormatedTime } from '../helper'

export default function Forms() {
    return (
       
        <FormControl>
            <InputLabel htmlFor="my-input">Developer</InputLabel>
            <Input value={"Prueba"} id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Developer</FormHelperText>
        </FormControl>
    );
    
};





