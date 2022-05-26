import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export const API_URL = environment.apiUrl;

export function errorHandler(e: HttpErrorResponse){
    let message = '';
    
    if(e.error instanceof ErrorEvent){
        message = 'Client Error Ocurred: ' + e.error.message + '';
    } else {
        message = 'Server Error Ocurred: ' + e.status + ' ' + e.statusText + '';  
    }

    return throwError(() => ({
        error: e.error,
        message: message,
        messageDesc: e.message
    }));
}