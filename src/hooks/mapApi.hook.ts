import {useAppDispatch} from '../store/hooks';
import {logout} from '../features/userSlice';
import {MAP} from '../const/reqURL';
import {TOKEN} from '../const/localStorageKeys';
import {setMaps} from '../features/mapsSlice';


export const useMapApi=()=> {
  const dispatch =useAppDispatch();
  const getMaps= ()=>{
    fetch(MAP, {
      headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN)}`},
    }).then(async (res)=> {
      const data = await res.json();
      if (!res.ok) {
        if (res.status===401) dispatch(logout());
        throw new Error(data.message || 'Что-то пошло не так');
      }
      dispatch(setMaps(data));
    },
    ).catch((reg)=>console.log(reg.message));
  };

  const createMap =(data:FormData)=>{
    // todo add data validation
    fetch(MAP, {
      method: 'POST',
      body: data,
      headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN)}`},
    }).then(async (res)=> {
      const data = await res.json();
      if (!res.ok) {
        if (res.status===401) dispatch(logout());
        throw new Error(data.message || 'Что-то пошло не так');
      }
      getMaps();
    },
    ).catch((reg)=>console.log(reg.message));
  };

  const updateMap =(data:FormData)=>{
    // todo add data validation
    fetch(MAP, {
      method: 'PUT',
      body: data,
      headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN)}`},
    }).then(async (res)=> {
      const data = await res.json();
      if (!res.ok) {
        if (res.status===401) dispatch(logout());
        throw new Error(data.message || 'Что-то пошло не так');
      }
      getMaps();
    },
    ).catch((reg)=>console.log(reg.message));
  };

  const deleteMap =(data:FormData)=>{
    // todo add data validation
    fetch(MAP, {
      method: 'DELETE',
      body: data,
      headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN)}`},
    }).then(async (res)=> {
      const data = await res.json();
      if (!res.ok) {
        if (res.status===401) dispatch(logout());
        throw new Error(data.message || 'Что-то пошло не так');
      }
      getMaps();
    },
    ).catch((reg)=>console.log(reg.message));
  };

  return {getMaps, createMap, updateMap, deleteMap};
};
