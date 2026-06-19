import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user = JSON.parse(sessionStorage.getItem("user")||"")
  if(user.role=="admin"){
    return true
  }else{
    alert("Unauthorised access!!!")
    router.navigateByUrl('/login')
    return false;
  }
};
