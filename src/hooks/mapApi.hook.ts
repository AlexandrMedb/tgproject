
import {useAppDispatch} from '../store/hooks';
import {logout} from '../features/userSlice';
import {MAP} from '../const/reqURL';
import {TOKEN} from '../const/localStorageKeys';
import {receiveMaps} from '../features/mapsSlice';


export const mapApiHook = () => {
  const dispatch =useAppDispatch();
  const getMap= ()=>{
    fetch(MAP, {
      headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN)}`},
    }).then(async (res)=> {
      const data = await res.json();
      if (!res.ok) {
      // badRestStatus(res.status);
        throw new Error(data.message || 'Что-то пошло не так');
      }
      console.log(data);
      dispatch(receiveMaps(data));
    },
    ).catch((reg)=>console.log(reg.message));
    // dispatch(logout());
  };
  return {getMap};
};
