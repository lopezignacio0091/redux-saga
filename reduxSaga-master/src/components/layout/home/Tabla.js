import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import {Grid} from '@mui/material'
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
const TablaUsers = () => {
    const dispatch = useDispatch();
    const { users} = useSelector((state) => state.UserReducer);

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const options = {
        selectableRows: 'none',
        download: false,
        search: true,
        print: false,
        filter: true,
        confirmFilters: false,
        viewColumns: false,
        pagination: false,
        enableNestedDataAccess: '.',
        // customToolbar: () => {
        //     return (
        //         <CustomToolBar />
        //     );
        // },
    };


    const columns = [
        {
            name: "name",
            label: "Nombre",
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            name: "username",
            label: "Apellido",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: "Email",
            name: 'email',
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            label: "Direccion",
            name: 'address',
            options: {
                filter: false,
                sort: true,
                customBodyRender: (value) => value.street,
            }
        },


    ];



    return (
        <Grid container>
            <Grid item xs={12} style={{'marginTop':'2%'}}>
            <ThemeProvider theme={theme}>
                <MUIDataTable
                    data={users}
                    columns={columns}
                    options={options}
                    title={"Usuarios"}
                />
                 </ThemeProvider>
            </Grid>
        </Grid>
    );
}

export default TablaUsers;