import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({isVisible}) => {
  const dispatch =useDispatch();
  const token = useSelector((state)=>state.user.token);
  return (
    <div>
      
    </div>
  )
}

export default Card
