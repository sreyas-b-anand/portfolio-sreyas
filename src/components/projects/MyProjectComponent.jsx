import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

//components
import Loading from '../projects/Loading';

export default function MyProjectComponent({projects}) {
  return (
    <>
    <Typography sx={{fontSize : '20px' }} className='text-primary text-center w-screen p-2 ' >
        My Projects
      </Typography>
    <React.Suspense fallback={<Loading/>}>
    <Box sx={{ display : 'flex' ,flexDirection : {md: 'row' , xs : 'column'}}} className="gap-6 items-center justify-center mt-4">
      
      {projects.map((project ) =>{
        return (
        <Link to={project.weblink}  target='_blank' rel='noopener norefferer'>
          <Card sx={{ maxWidth: 340  , boxShadow: 1 , transition : 'all ease-in-out 0.4s'}} key={project.id} component={'div'} className='text-primary   hover:scale-[1.05]' >
        <CardMedia 
  
          component="img"
          alt="img"
          height="140 " 
          image={project.image}
          sx={
            {objectFit : 'cover'}
          }
          />
          <CardContent className='bg-cardbg'>
          <Typography  variant="h5" component="div" className='text-primary ' sx={{fontFamily : 'montserrat'}} >
            {project.header}
            </Typography>
            <Typography variant="body"  className='text-primary'>
            {project.desc}
            </Typography>
            </CardContent>
            <CardActions className='bg-cardbg'>
          <Link  to={project.gitlink} size="small" target='_blank' rel='noopener norefferer' className='text-primary px-2 bg-bg rounded-[5px] hover:bg-gray-900 '>Git</Link>
          <Link to={project.weblink} size="small" target='_blank' rel='noopener norefferer' className='text-primary px-2 bg-bg rounded-[5px] hover:bg-gray-900'>Web</Link>
          </CardActions>
          </Card>
        </Link>
          )
        
      })}
      </Box>
    </React.Suspense>
    </>
  )
}
    