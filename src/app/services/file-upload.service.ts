import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async updatePhoto (
    file: File,
    type: 'product' | 'combo',
    id: string
  ) {
    try {
      const url = `${baseUrl}/products/image/${type}/${id}`;
      const formData = new FormData();
      formData.append('image', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();

      if (data.ok) {
        return data.filename;
      } else {
        console.log(data.msg);
        return false;
      }

    } catch (err) {
      console.log(err);
      return false
    }
  }
}
