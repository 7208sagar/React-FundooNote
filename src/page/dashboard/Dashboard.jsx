import * as React from 'react';
import { styled, useTheme,alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { SearchOffOutlined } from '@mui/icons-material';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import {IoApps} from "react-icons/io5";
import {AiOutlineSearch} from "react-icons/ai";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {CgProfile} from "react-icons/cg";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Notes from '../Notes/Notes';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor:"white",
  color:"black",
  boxShadow:0,
  border:"1px solid lightgrey",
  fontFamily: 'Product Sans Arial,sans-serif',
  fontsize: '22px',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

let iconLists=[
    {
    iconNames:<LightbulbOutlinedIcon/>,
    iconTexts:"Notes"
    },
    {
    iconNames:<NotificationsOutlinedIcon/>,
    iconTexts:"Reminders"
    },
    {
    iconNames:<LabelOutlinedIcon/>,
    iconTexts:"book1"
    },
    {
    iconNames:<LabelOutlinedIcon/>,
    iconTexts:"book2"
    },
    {
    iconNames:<LabelOutlinedIcon/>,
    iconTexts:"book3"
    },
    {
    iconNames:<ModeEditOutlineOutlinedIcon/>,
    iconTexts:"Edit labels"
    },
    {
    iconNames:<ArchiveOutlinedIcon/>,
    iconTexts:"Archive"
    },
    {
    iconNames:<DeleteOutlineOutlinedIcon/>,
    iconTexts:"Spam"
    },

]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              color:"#787878"
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
          <Typography variant="h6" noWrap component="div" sx={{color:"#787878"}} className='header-search-icons'>
            <div className='header-title'>Fundoo</div>
            </Typography>
            <Typography className='header-search-icons'>
            <Search className="search" style={{width:"100%",background: "transparent",marginLeft:"30%"}}>
            <SearchIconWrapper>
              <SearchIcon style={{color:"#787878"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Typography>
          <Typography className='header-search-icons'>
              <div className='header-search-icons' style={{display:"flex",marginLeft:"100%"}}>
            
            <Typography className='header-search-icons' style={{display:"flex",marginLeft:"30px"}}><RefreshOutlinedIcon style={{marginTop:"12px",color:"#787878"}} /></Typography>
            <Typography className='header-search-icons' style={{display:"flex",marginLeft:"60px"}}><GridViewOutlinedIcon style={{marginTop:"12px",color:"#787878"}}/></Typography>
            <Typography className='header-search-icons' style={{display:"flex",marginLeft:"30px"}}><SettingsOutlinedIcon style={{marginTop:"12px",color:"#787878"}}/></Typography>
            <Typography className='header-search-icons' style={{display:"flex",marginLeft:"50px"}}>
            <AppsOutlinedIcon  style={{marginTop:"12px",color:"#787878"}}/>
            </Typography>
            <Typography className='header-search-icons' style={{display:"flex",marginLeft:"130px",border:"1px solid lightgrey",borderRadius:"5px",padding:"5px"}}>
                    <img src="https://admin.google.com/u/0/ac/images/logo.gif?uid=109876292120276119235&service=google_gsuite" width="85" height="35" alt="profileImgLogo" />
                     <AccountCircleOutlinedIcon style={{marginTop:"10px",color:"#787878",fontsize:"20px"}}/> 
            </Typography>
            </div>
         </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {iconLists.map((text, index) => (
            <ListItem button key={text.iconNames}>
              <ListItemIcon>
                  {text.iconNames}
              </ListItemIcon>
              <ListItemText primary={text.iconTexts} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Notes/>
        <div style={{display:"block",width:"80%",height:"100px",textalign:"center",justifycontent:"center",alignItems:"center",margin:"2% 50% 20% 30%"}}>
          {/* notes  */}
          <div style={{display:"flex",opacity:"1",color:"#787878",padding:"20px",width:"60%",border:"1px solid lightgrey",height:"100px",textalign:"center",justifycontent:"center",borderRadius:"10px"
        ,alignItems:"center"
        }}>
             <div style={{width:"50%",display:"block"}}>Title</div><PushPinOutlinedIcon style={{width:"50%",}}/>
             {/* <div style={{width:"50%",display:"flex"}}>Take a note..</div> */}
          </div>
          <div style={{display:"flex",opacity:"1",color:"#787878",padding:"20px",width:"60%",border:"1px solid lightgrey",height:"100%",textalign:"center",justifycontent:"center",borderRadius:"10px",marginTop:"20px"
        ,alignItems:"center"
        }}>
             Display Notes
          </div>
        </div>
      </Box>
    </Box>
  );
}