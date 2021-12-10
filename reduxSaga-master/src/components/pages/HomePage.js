import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, setLoading } from "../../actions/user";
import TablaUsers from "../layout/home/Tabla";
import Progress from "../layout/progress/Progress";
const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, mensajeError } = useSelector(
    (state) => state.UserReducer
  );

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllUsers());
    // dispatch(getHeroebyId(1));
  }, [dispatch]);

  if (loading) return <Progress />;

  if (error) return <span>{mensajeError}</span>;

  return (
    <Box
      sx={{
        m: "2px",
        backgroundColor: "primary.dark",
      }}
    >
      <Grid container style={{ padding: "30px" }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
            <h1>Pagina Redux-Saga</h1>
          </Paper>
        </Grid>
        <TablaUsers />
      </Grid>
    </Box>
  );
};

export default HomePage;
