
import { Badge } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import styled from "styled-components";
import mobile from "../responsive";
import Logoo from "../assets/Imgs/Logoo.png";
import Tech from "../assets/Imgs/Tech.png";

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

import s from "../assets/styles/NavBar.module.css";
import { getProductsFront } from "../Store/actions/products";
import axios from "axios";


const Container = styled.div`
 background-color: #fcf5f5;
 position: fixed;
 top:0;
 left:0;
 height: 60px;
 width: 100%;
 z-index:100;
 margin-bottom: 20px;
 ${mobile({ height: "50px" })}

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  ${mobile({ padding: "5px 0px" })}
  background-color: #fcf5f5;
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px; 

`;

const Logo = styled.img`
  display: flex;
  position: relative;
  width: 25%;
  margin-bottom: 20px;
  margin-right: 20px;
  padding-right: 200px;
  padding-bottom: 50px;
  ${mobile({ width: "20%" })}
  ${mobile({ fontSize: "24px" })}
`;

const TechC = styled.img`
  display: flex;
  width: 30%;
  margin-left: 20%;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;
 
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ marginLeft: "5px", fontSize: "12px" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  width: 90%;
  padding: 5px;

  ${mobile({ marginLeft: "10px" })}
`;


const Input = styled.input`
  border: none;
  width: 100%;
  height: 20px;
  ${mobile({ width: "50px" })}
`;


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
  
  const [name, setName] = useState("");

  const [names, setNames] = useState({
    code: null,
    results: []
  });
  const [visibility, setVisibility] = useState(s.hidden);

  useEffect(() => {
    dispatch(getuser())
  },[]);

  useEffect(() => {
    setUserData(user.user)
    dispatch(getProductsCartUser(user?.user?.userid)); 
  },[user]);

  useEffect(async() => {
    (async() => {
      if(name){  
        const res = await axios.get("http://localhost:3001/products/names?name=" + name);
      
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
    <Container>
      <Wrapper>
        <Left> 
         {/*  <Logo src={Logoo} /> */}
         <TechC src={Tech} onClick={()=>navigate("/")} style={{ cursor: "pointer" }}/>
          <Link to="/products">Productos</Link>
        </Left>
        <Center>
         {/* <TechC src={Tech}/> */}
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
          </SearchContainer></>:null}

          {/* <div className={`${s.dataResult} ${visibility}`}>
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
          </div> */}
          <datalist id="searchdata">
          {names.code === null ? null : 
            names.code === 1 ? "No tenemos ese producto" : 
            names.names.map(name => 
              <option 
                key={name.id} 
                /* className={s.option} */
                value={name.name}
                onClick={() => {
                  setName(name.name);

                  dispatch(getProductsFront({
                    category: '',
                    brand: '',
                    sort:''
                  }, 0, name.name));

                  setVisibility(s.hidden);
                }}
              >{name.name}</option>
            )}
            </datalist>
        </Center>
        <Right>
          {!user.token?<><Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
          <Link to="/login"><MenuItem>LOGIN</MenuItem></Link></>:<>
          <Link to="/"><MenuItem>HOME</MenuItem></Link></>}    
          {user?.user?.type=="admin"?<Link to="/dashboard"><MenuItem>DASHBOARD</MenuItem></Link>:null}
          
         
          {user.token&&user.user?<Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar src={userData?.photo?userData.photo:null} sx={{ width: 32, height: 32 }}>{userData?.photo?null:userData?.name?.charAt(0)}</Avatar>
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
                  right: 14,
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
            <MenuItem onClick={()=>navigate("/wishList")} >
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

         
          <MenuItem>
          <Link to='/cart' className='nav_links' >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartOutlined fontSize='large' color='primary'></ShoppingCartOutlined>
              </Badge>
            </Link>
        </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;