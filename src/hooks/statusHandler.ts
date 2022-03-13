import {logout} from '../features/userSlice';

const statusHandler= (status:number) =>{
  if (status===401) {
    logout();
  }
};

