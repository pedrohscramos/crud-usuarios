import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/users';  // URL da API Flask

  constructor(private http: HttpClient) { }

  // Método para listar todos os usuários
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  // Método para obter um usuário por ID
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo usuário
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, user);
  }

  // Método para atualizar um usuário existente
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  // Método para excluir um usuário
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
