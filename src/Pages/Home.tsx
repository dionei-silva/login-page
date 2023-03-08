import React from "react"
import  Stack  from "@mui/material/Stack"
import Button from "@mui/material/Button"
import {Input ,ImageListItem , ImageList, Grid, Typography, Checkbox, TextField, Box, FormGroup, FormControlLabel, Link} from "@mui/material"
import { Warning } from "@mui/icons-material"
import { orange } from "@mui/material/colors"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Home: React.FC = () => {
      return(
            <>
            <Grid container height={'100vh'}>
                  <Grid item bgcolor={"orange"} xs={7} height={'100%'} >
                        <ImageList cols={1}>
                              <img src="https://source.unsplash.com/random" alt=""/>
                        </ImageList>
                  </Grid>

                  <Grid item bgcolor={"yellow"} xs={5} >
                        <Stack height='100vh' direction='column' justifyContent="center" alignItems="center">
                              <Box component={'form'} >
                                    <TextField id="email-adress" label="Email Adress" variant="outlined" /><br />
                                    <TextField id="password" label="Password" variant="outlined" />
                                    <FormGroup>
                                          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                    </FormGroup>
                                    <Button variant="contained">SING IN</Button>
                                    <Grid container justifyContent="space-between">
                                          <Link href="#">Forgot password?</Link>
                                          <Link href="#">Don't have an account? Sign Up</Link>
                                    </Grid>
                              </Box>     
                        </Stack>
                  </Grid>

            </Grid>
            </>
      )
}

export default Home