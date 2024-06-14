import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  
  const path = route.routeConfig?.path;
  const token = localStorage.getItem('token');

  if(token != null)
  {    
    if(path === 'user/admin')
    {
       if(isLoggedInUserAdmin(token))
      {
        return true
      }
      else
      {
        router.navigate(['/user/profile']);
        return false;
      }

    }
    else
    {
      return true;
    }
  }
  else
  {
    router.navigate([''])
    return false;
  }
};



const isLoggedInUserAdmin = (token : string) => {
  let result = false;

  if(token != null)
  {
    let tokenFirstPartText = atob(token.split('.')[1]);
    let obj = JSON.parse(tokenFirstPartText);
    let role = obj["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    result = role === 'Admin' ? true : false;
  }

  return result;
}
