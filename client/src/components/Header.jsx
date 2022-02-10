
import { Badge } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import { getProductsFront } from "../Store/actions/products";



import Tech from "../assets/Imgs/Tech.png";
//
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {getuser} from '../Store/actions/users.js'
import {getProductsCartUser} from '../Store/actions/carts.js'
import { useLocation } from 'react-router-dom'

import { Container, 
         Wrapper,
         Left,
         Center,
         Right,
         TechC,
         MenuItem,
         MenuItemLink,
         MenuItems,
         SearchContainer,
         Input,
         ButtonSearch,
         MobileIcon
        } from "../assets/styles/NavBar.elements.js";
import s from '../assets/styles/NavBar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(state=>state.users)
  const cart = useSelector(state => state.cart.productscart)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [userData, setUserData] = useState(null);
  const currentLocation = useLocation();
  const [location,setLocation] = useState(currentLocation);
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [name, setName] = useState("");

  const [names, setNames] = useState({
    code: null,
    results: []
  });
  // const [visibility, setVisibility] = useState(s.hidden);

  useEffect(() => {
    dispatch(getuser())
  },[]);

  useEffect(() => {
    setUserData(user.user)
    dispatch(getProductsCartUser(user?.user?.userid)); 
  },[user]);

  const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/"

  useEffect(async() => {
    (async() => {
      if(name){  
        const res = await axios.get(`${SERVER}products/names?name=${name}`)
        // const res = await axios.get("http://localhost:3001/products/names?name=" + name);
      
        setNames(res.data);
      }else{
        setNames({
          code: null,
          results: []
        })
      }
    })()
  }, [name]);

  useEffect(() => {
    setLocation(currentLocation)
    dispatch(getProductsCartUser(user?.user?.userid)); 
  },[currentLocation])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Container className={s.container}>
      <Wrapper>

        <Left style={{width: "150px"}}> 
         {/*  <Logo src={Logoo} /> */}
         <div >
         <TechC src={Tech} onClick={()=>navigate("/")} style={{ cursor: "pointer" }}/>
         </div>
        </Left>

        <Center>
         {location.pathname=="/products"?<><SearchContainer>
            <form onSubmit={e => {
              e.preventDefault();

              dispatch(getProductsFront({
                category: '',
                brand: '',
                sort:''
              }, 0, name));
            }} className={s.form}>
              <Input 
                className={s.searchBar} 
                value={name}
                placeholder="Search"
                onChange={e =>{
                  setName(e.target.value);
                }}
                list="searchdata"
                /* onFocus={() => setVisibility(s.visible)} */
                // onBlur={() => setVisibility(s.hidden)}
              />
              <Search style={{ color: "gray", fontSize: 25}} type="submit"></Search>
            </form>
           {/* <Search style={{ color: "gray", fontSize: 25}}></Search> */}
            </SearchContainer>
          </>:null}

          {/*
           <div className={`${s.dataResult} ${visibility}`}>
            {names.code === null ? null : 
            names.code === 1 ? "No tenemos ese producto" : 
            names.names.map(name => 
              <div 
                key={name.id} 
                className={s.option}
                onClick={() => {
                  setName(name.name);

                  dispatch(getProductsFront({
                    category: '',
                    brand: '',
                    sort:''
                  }, 0, name.name));

                  setVisibility(s.hidden);
                }}
              >{name.name}</div>
            )}
          </div> 
          */}
          <datalist id="searchdata">
          {names.code === null ? null : 
            names.code === 1 ? "No tenemos ese producto" : 
            names.names.map(name => 
              <option 
                key={name.id} 
                className={s.option}
                value={name.name}
                onClick={() => {
                  setName(name.name);

                  dispatch(getProductsFront({
                    category: '',
                    brand: '',
                    sort:''
                  }, 0, name.name));

                 /* setVisibility(s.hidden) */
                }}
              >{name.name}</option>
            )}
            </datalist>
        </Center>
        
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)} >
          {showMobileMenu?
          <FaTimes value={{style:{fontSize:'2em'}}}/> :<FaBars value={{style:{fontSize:'2em'}}}/>
          }
        </MobileIcon>

        <Right open={showMobileMenu} className={s.right}>  
          <Link to="/products" className={s.linksss}>
            <MenuItems onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <MenuItemLink>
                Productos
              </MenuItemLink>
            </MenuItems>
          </Link>
          {!user.token?<>
            <Link to="/register" className={s.linksss} >
              <MenuItems onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MenuItemLink>
                  Crea Tu Cuenta!
                </MenuItemLink>
              </MenuItems>
            </Link>
            <Link to="/login" className={s.linksss}>
              <MenuItems onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MenuItemLink>
                 Ingresa 
                </MenuItemLink>
              </MenuItems>
            </Link></>:<>
            <Link to="/" className={s.linksss}>
              <MenuItems onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MenuItemLink>
                  HOME
                </MenuItemLink>
              </MenuItems>
            </Link></>
          }

          {user?.user?.type=="admin"?
            <Link to="/dashboard" className={s.linksss}>
              <MenuItems onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <MenuItemLink>
                  DASHBOARD
                </MenuItemLink>
              </MenuItems>
            </Link>
          :null}
          
          {user.token&&user.user?<Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar 
                src={userData?.photo?userData.photo:null} 
                sx={{ width: 34, height: 34 }}>{userData?.photo?null:userData?.name?.charAt(0)}
              </Avatar>
            </IconButton>
          </Tooltip>:null}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 18,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              {/* <Avatar /> */} {`${userData?.name.toUpperCase()} ${userData?.lastname.toUpperCase()}`}
            </MenuItem>
            <MenuItem onClick={()=>navigate("/profile/WishList")} >
              <ShoppingBagIcon /> My Favorites
            </MenuItem>
            <MenuItem onClick={()=>navigate("/profile/ShopHistory")}>
              <ShoppingBagIcon /> My Shops
            </MenuItem>
            <MenuItem onClick={()=>navigate('/profile')}>
              <Settings /> Edit Profile
            </MenuItem>
            <MenuItem onClick={() => {
              localStorage.removeItem("user");
              window.location='/';
            }}>
              <Logout /> Log out
            </MenuItem>
            <Divider />
          </Menu>
          <Link to='/cart' className={s.linksss}>
            <MenuItems onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <MenuItemLink>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartOutlined fontSize='large' color='primary'></ShoppingCartOutlined>
                </Badge>
              </MenuItemLink>
            </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;